// node_modules/.pnpm/@mui+utils@7.3.7_@types+react@19.2.7_react@19.2.3/node_modules/@mui/utils/esm/createChainedFunction/createChainedFunction.js
function createChainedFunction(...funcs) {
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }
    return function chainedFunction(...args) {
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {
  });
}

// node_modules/.pnpm/@mui+utils@7.3.7_@types+react@19.2.7_react@19.2.3/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

// node_modules/.pnpm/@mui+utils@7.3.7_@types+react@19.2.7_react@19.2.3/node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js
function ownerWindow(node) {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
}

// node_modules/.pnpm/@mui+utils@7.3.7_@types+react@19.2.7_react@19.2.3/node_modules/@mui/utils/esm/setRef/setRef.js
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

export {
  createChainedFunction,
  ownerDocument,
  ownerWindow,
  setRef
};
//# sourceMappingURL=chunk-VBFXXF3Q.js.map
