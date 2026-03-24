// node_modules/.pnpm/@mui+utils@7.3.7_@types+react@19.2.7_react@19.2.3/node_modules/@mui/utils/esm/isFocusVisible/isFocusVisible.js
function isFocusVisible(element) {
  try {
    return element.matches(":focus-visible");
  } catch (error) {
    if (!window.navigator.userAgent.includes("jsdom")) {
      console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join("\n"));
    }
  }
  return false;
}

export {
  isFocusVisible
};
//# sourceMappingURL=chunk-ZWM3JFZX.js.map
