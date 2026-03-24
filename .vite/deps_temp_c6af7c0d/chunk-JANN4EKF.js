import {
  require_react
} from "./chunk-I4BD4AGR.js";
import {
  __commonJS,
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/.pnpm/invariant@2.2.4/node_modules/invariant/browser.js
var require_browser = __commonJS({
  "node_modules/.pnpm/invariant@2.2.4/node_modules/invariant/browser.js"(exports, module) {
    "use strict";
    var invariant = function(condition, format, a, b, c, d, e, f) {
      if (true) {
        if (format === void 0) {
          throw new Error("invariant requires an error message argument");
        }
      }
      if (!condition) {
        var error;
        if (format === void 0) {
          error = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(
            format.replace(/%s/g, function() {
              return args[argIndex++];
            })
          );
          error.name = "Invariant Violation";
        }
        error.framesToPop = 1;
        throw error;
      }
    };
    module.exports = invariant;
  }
});

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/shared/context.js
var React = __toESM(require_react(), 1);
var BrandingContext = React.createContext(null);
var NavigationContext = React.createContext([]);
var PaletteModeContext = React.createContext({
  paletteMode: "light",
  setPaletteMode: () => {
  },
  isDualTheme: false
});
var RouterContext = React.createContext(null);
var DashboardSidebarPageItemContext = React.createContext(null);
var CrudContext = React.createContext({
  dataSource: null,
  dataSourceCache: null
});
var WindowContext = React.createContext(void 0);

export {
  require_browser,
  BrandingContext,
  NavigationContext,
  PaletteModeContext,
  RouterContext,
  DashboardSidebarPageItemContext,
  CrudContext,
  WindowContext
};
//# sourceMappingURL=chunk-JANN4EKF.js.map
