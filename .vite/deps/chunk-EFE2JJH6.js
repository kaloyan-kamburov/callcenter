// node_modules/.pnpm/@mui+material@7.3.7_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@emotion+s_809553f7d28c83e176bdd81dc58ef16f/node_modules/@mui/material/esm/utils/createSimplePaletteValueFilter.js
function hasCorrectMainProperty(obj) {
  return typeof obj.main === "string";
}
function checkSimplePaletteColorValues(obj, additionalPropertiesToCheck = []) {
  if (!hasCorrectMainProperty(obj)) {
    return false;
  }
  for (const value of additionalPropertiesToCheck) {
    if (!obj.hasOwnProperty(value) || typeof obj[value] !== "string") {
      return false;
    }
  }
  return true;
}
function createSimplePaletteValueFilter(additionalPropertiesToCheck = []) {
  return ([, value]) => value && checkSimplePaletteColorValues(value, additionalPropertiesToCheck);
}

export {
  createSimplePaletteValueFilter
};
//# sourceMappingURL=chunk-EFE2JJH6.js.map
