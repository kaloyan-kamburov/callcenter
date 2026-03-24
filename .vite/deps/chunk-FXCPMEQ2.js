import {
  useEnhancedEffect_default
} from "./chunk-3NB4NH7D.js";
import {
  require_react
} from "./chunk-I4BD4AGR.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/.pnpm/@mui+utils@7.3.7_@types+react@19.2.7_react@19.2.3/node_modules/@mui/utils/esm/useForkRef/useForkRef.js
var React = __toESM(require_react(), 1);
function useForkRef(...refs) {
  const cleanupRef = React.useRef(void 0);
  const refEffect = React.useCallback((instance) => {
    const cleanups = refs.map((ref) => {
      if (ref == null) {
        return null;
      }
      if (typeof ref === "function") {
        const refCallback = ref;
        const refCleanup = refCallback(instance);
        return typeof refCleanup === "function" ? refCleanup : () => {
          refCallback(null);
        };
      }
      ref.current = instance;
      return () => {
        ref.current = null;
      };
    });
    return () => {
      cleanups.forEach((refCleanup) => refCleanup?.());
    };
  }, refs);
  return React.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (value) => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = void 0;
      }
      if (value != null) {
        cleanupRef.current = refEffect(value);
      }
    };
  }, refs);
}

// node_modules/.pnpm/@mui+material@7.3.7_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@emotion+s_809553f7d28c83e176bdd81dc58ef16f/node_modules/@mui/material/esm/utils/useForkRef.js
var useForkRef_default = useForkRef;

// node_modules/.pnpm/@mui+utils@7.3.7_@types+react@19.2.7_react@19.2.3/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js
var React2 = __toESM(require_react(), 1);
function useEventCallback(fn) {
  const ref = React2.useRef(fn);
  useEnhancedEffect_default(() => {
    ref.current = fn;
  });
  return React2.useRef((...args) => (
    // @ts-expect-error hide `this`
    (0, ref.current)(...args)
  )).current;
}
var useEventCallback_default = useEventCallback;

export {
  useEventCallback_default,
  useForkRef,
  useForkRef_default
};
//# sourceMappingURL=chunk-FXCPMEQ2.js.map
