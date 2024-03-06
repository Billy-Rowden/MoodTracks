import {
  require_classnames,
  require_jsx_runtime,
  useBootstrapPrefix
} from "./chunk-5XDEJKRP.js";
import {
  require_react
} from "./chunk-JBG67EE7.js";
import {
  __toESM
} from "./chunk-UV5CTPV7.js";

// node_modules/react-bootstrap/esm/Container.js
var import_classnames = __toESM(require_classnames());
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var Container = React.forwardRef(({
  bsPrefix,
  fluid = false,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "container");
  const suffix = typeof fluid === "string" ? `-${fluid}` : "-fluid";
  return (0, import_jsx_runtime.jsx)(Component, {
    ref,
    ...props,
    className: (0, import_classnames.default)(className, fluid ? `${prefix}${suffix}` : prefix)
  });
});
Container.displayName = "Container";
var Container_default = Container;

export {
  Container_default
};
//# sourceMappingURL=chunk-V7CWODSG.js.map
