(function () {
  var CONFIG_KEY = "callcenter.browserPhone.config";
  var MESSAGE_SOURCE = "callcenter";
  var PARENT_SOURCE = "browser-phone";
  var pendingNumber = null;

  function readConfig() {
    try {
      var raw = window.localStorage.getItem(CONFIG_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (error) {
      console.warn("Failed to parse Browser Phone config", error);
      return {};
    }
  }

  function writeConfig(config) {
    try {
      window.localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
    } catch (error) {
      console.warn("Failed to store Browser Phone config", error);
    }
  }

  function applyRuntimeConfig(config) {
    Object.entries(config || {}).forEach(function (entry) {
      var key = entry[0];
      var value = entry[1];

      if (value === undefined || value === null || value === "") {
        return;
      }

      window.localStorage.setItem(key, String(value));
    });
  }

  function notifyParent(type, payload) {
    if (window.parent && window.parent !== window) {
      window.parent.postMessage(
        {
          source: PARENT_SOURCE,
          type: type,
          payload: payload || null,
        },
        window.location.origin,
      );
    }
  }

  function dialPendingNumber() {
    if (!pendingNumber || typeof window.DialByLine !== "function") {
      return false;
    }

    window.DialByLine("audio", null, pendingNumber);
    notifyParent("dialed", { number: pendingNumber });
    pendingNumber = null;
    return true;
  }

  function queueDial(number) {
    if (!number) {
      return;
    }

    pendingNumber = String(number);
    dialPendingNumber();
  }

  function safeCloseWindow() {
    if (window.parent && typeof window.parent.CloseWindow === "function") {
      window.parent.CloseWindow();
      return;
    }

    notifyParent("close-request");
  }

  var config = readConfig();
  applyRuntimeConfig(config);

  window.callcenterBrowserPhoneConfig = config;
  window.callcenterNotifyParent = notifyParent;
  window.callcenterQueueDial = queueDial;
  window.callcenterDialPendingNumber = dialPendingNumber;
  window.callcenterSafeCloseWindow = safeCloseWindow;

  window.addEventListener("message", function (event) {
    if (event.origin !== window.location.origin) {
      return;
    }

    var data = event.data;
    if (!data || data.source !== MESSAGE_SOURCE || typeof data.type !== "string") {
      return;
    }

    if (data.type === "browser-phone:configure") {
      var nextConfig = Object.assign({}, readConfig(), data.payload || {});
      writeConfig(nextConfig);
      applyRuntimeConfig(nextConfig);
      window.callcenterBrowserPhoneConfig = nextConfig;
      notifyParent("configured", nextConfig);
      return;
    }

    if (data.type === "browser-phone:call") {
      queueDial(data.payload && data.payload.number);
    }
  });
})();
