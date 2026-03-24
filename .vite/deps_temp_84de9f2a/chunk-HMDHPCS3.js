import {
  Link,
  getItemTitle,
  useActivePage
} from "./chunk-4NUYUSI7.js";
import {
  Breadcrumbs_default,
  Container_default,
  Stack_default
} from "./chunk-UI65FZK7.js";
import {
  Link_default
} from "./chunk-664K4RHA.js";
import {
  Typography_default
} from "./chunk-QGXQENJK.js";
import {
  useSlotProps_default
} from "./chunk-DSEXQT6F.js";
import {
  Box_default
} from "./chunk-UTQ6B6VX.js";
import {
  require_prop_types,
  styled_default2 as styled_default
} from "./chunk-3NB4NH7D.js";
import {
  require_jsx_runtime
} from "./chunk-6BPC6FNR.js";
import {
  require_react
} from "./chunk-I4BD4AGR.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/PageContainer/PageContainer.js
var React3 = __toESM(require_react(), 1);
var import_prop_types3 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/PageContainer/PageHeader.js
var React2 = __toESM(require_react(), 1);
var import_prop_types2 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/PageContainer/PageHeaderToolbar.js
var React = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var PageHeaderToolbarRoot = styled_default("div")(({
  theme
}) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(1),
  // Ensure the toolbar is always on the right side, even after wrapping
  marginLeft: "auto"
}));
function PageHeaderToolbar(props) {
  return (0, import_jsx_runtime.jsx)(PageHeaderToolbarRoot, {
    ...props
  });
}
true ? PageHeaderToolbar.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types.default.node
} : void 0;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/PageContainer/PageHeader.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var PageContentHeader = styled_default("div")(({
  theme
}) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: theme.spacing(2)
}));
function PageHeader(props) {
  const {
    breadcrumbs,
    title
  } = props;
  const activePage = useActivePage();
  const resolvedBreadcrumbs = breadcrumbs ?? activePage?.breadcrumbs ?? [];
  const resolvedTitle = title ?? activePage?.title ?? "";
  const ToolbarComponent = props?.slots?.toolbar ?? PageHeaderToolbar;
  const toolbarSlotProps = useSlotProps_default({
    elementType: ToolbarComponent,
    ownerState: props,
    externalSlotProps: props?.slotProps?.toolbar,
    additionalProps: {}
  });
  return (0, import_jsx_runtime2.jsxs)(Stack_default, {
    children: [(0, import_jsx_runtime2.jsx)(Breadcrumbs_default, {
      "aria-label": "breadcrumb",
      children: resolvedBreadcrumbs ? resolvedBreadcrumbs.map((item, index) => {
        return item.path ? (0, import_jsx_runtime2.jsx)(Link_default, {
          component: Link,
          underline: "hover",
          color: "inherit",
          href: item.path,
          children: getItemTitle(item)
        }, index) : (0, import_jsx_runtime2.jsx)(Typography_default, {
          color: "text.primary",
          children: getItemTitle(item)
        }, index);
      }) : null
    }), (0, import_jsx_runtime2.jsxs)(PageContentHeader, {
      children: [resolvedTitle ? (0, import_jsx_runtime2.jsx)(Typography_default, {
        variant: "h4",
        children: resolvedTitle
      }) : null, (0, import_jsx_runtime2.jsx)(ToolbarComponent, {
        ...toolbarSlotProps
      })]
    })]
  });
}
true ? PageHeader.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The breadcrumbs of the page. Leave blank to use the active page breadcrumbs.
   */
  breadcrumbs: import_prop_types2.default.arrayOf(import_prop_types2.default.shape({
    path: import_prop_types2.default.string,
    title: import_prop_types2.default.string.isRequired
  })),
  /**
   * The props used for each slot inside.
   */
  slotProps: import_prop_types2.default.shape({
    toolbar: import_prop_types2.default.shape({
      children: import_prop_types2.default.node
    }).isRequired
  }),
  /**
   * The components used for each slot inside.
   */
  slots: import_prop_types2.default.shape({
    toolbar: import_prop_types2.default.elementType
  }),
  /**
   * The title of the page. Leave blank to use the active page title.
   */
  title: import_prop_types2.default.string
} : void 0;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/PageContainer/PageContainer.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
function PageContainer(props) {
  const {
    children,
    breadcrumbs,
    slots,
    slotProps,
    title,
    ...rest
  } = props;
  const PageHeaderSlot = slots?.header ?? PageHeader;
  return (0, import_jsx_runtime3.jsx)(Container_default, {
    ...rest,
    sx: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      ...rest.sx
    },
    children: (0, import_jsx_runtime3.jsxs)(Stack_default, {
      sx: {
        flex: 1,
        my: 2
      },
      spacing: 2,
      children: [(0, import_jsx_runtime3.jsx)(PageHeaderSlot, {
        title,
        breadcrumbs,
        ...slotProps?.header
      }), (0, import_jsx_runtime3.jsx)(Box_default, {
        sx: {
          flex: 1,
          display: "flex",
          flexDirection: "column"
        },
        children
      })]
    })
  });
}
true ? PageContainer.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The breadcrumbs of the page. Leave blank to use the active page breadcrumbs.
   */
  breadcrumbs: import_prop_types3.default.arrayOf(import_prop_types3.default.shape({
    path: import_prop_types3.default.string,
    title: import_prop_types3.default.string.isRequired
  })),
  /**
   * @ignore
   */
  children: import_prop_types3.default.node,
  /**
   * The props used for each slot inside.
   */
  slotProps: import_prop_types3.default.shape({
    header: import_prop_types3.default.shape({
      breadcrumbs: import_prop_types3.default.arrayOf(import_prop_types3.default.shape({
        path: import_prop_types3.default.string,
        title: import_prop_types3.default.string.isRequired
      })),
      slotProps: import_prop_types3.default.shape({
        toolbar: import_prop_types3.default.object.isRequired
      }),
      slots: import_prop_types3.default.shape({
        toolbar: import_prop_types3.default.elementType
      }),
      title: import_prop_types3.default.string
    }).isRequired
  }),
  /**
   * The components used for each slot inside.
   */
  slots: import_prop_types3.default.shape({
    header: import_prop_types3.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object]),
  /**
   * The title of the page. Leave blank to use the active page title.
   */
  title: import_prop_types3.default.string
} : void 0;

export {
  PageHeaderToolbar,
  PageHeader,
  PageContainer
};
//# sourceMappingURL=chunk-HMDHPCS3.js.map
