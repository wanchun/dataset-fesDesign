var IEnumCodeType = /* @__PURE__ */ ((IEnumCodeType2) => {
  IEnumCodeType2["JAVASCRIPT_QUERY"] = "query";
  IEnumCodeType2["JAVASCRIPT_FUNCTION"] = "function";
  IEnumCodeType2["JAVASCRIPT_COMPUTED"] = "computed";
  IEnumCodeType2["TEMPORARY_STATE"] = "temporaryState";
  IEnumCodeType2["LIFECYCLE_HOOK"] = "lifecycleHook";
  return IEnumCodeType2;
})(IEnumCodeType || {});
var IEnumResourceType = /* @__PURE__ */ ((IEnumResourceType2) => {
  IEnumResourceType2["Query"] = "query";
  IEnumResourceType2["RESTQuery"] = "rest";
  return IEnumResourceType2;
})(IEnumResourceType || {});
var IEnumRunCondition = /* @__PURE__ */ ((IEnumRunCondition2) => {
  IEnumRunCondition2["Manual"] = "manual";
  return IEnumRunCondition2;
})(IEnumRunCondition || {});
var IEnumCacheType = /* @__PURE__ */ ((IEnumCacheType2) => {
  IEnumCacheType2["RAM"] = "ram";
  IEnumCacheType2["SESSION_STORAGE"] = "sessionStorage";
  IEnumCacheType2["LOCAL_STORAGE"] = "localStorage";
  return IEnumCacheType2;
})(IEnumCacheType || {});
function isQueryResource(obj) {
  return obj && obj.type === "query";
}
function isRestQueryResource(obj) {
  return obj && obj.resourceType === "rest";
}
function isJavascriptFunction(obj) {
  return obj && obj.type === "function";
}
function isJavascriptComputed(obj) {
  return obj && obj.type === "computed";
}
function isVariableState(obj) {
  return obj && obj.type === "temporaryState";
}
function isLifecycleHook(obj) {
  return obj && obj.type === "lifecycleHook";
}
function isDirectory(obj) {
  return obj && obj.code;
}
export {
  IEnumCacheType,
  IEnumCodeType,
  IEnumResourceType,
  IEnumRunCondition,
  isDirectory,
  isJavascriptComputed,
  isJavascriptFunction,
  isLifecycleHook,
  isQueryResource,
  isRestQueryResource,
  isVariableState
};
