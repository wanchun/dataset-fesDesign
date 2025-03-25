var IEnumEventHandlerAction = /* @__PURE__ */ ((IEnumEventHandlerAction2) => {
  IEnumEventHandlerAction2["CONTROL_QUERY"] = "controlQuery";
  IEnumEventHandlerAction2["CONTROL_COMPONENT"] = "controlComponent";
  IEnumEventHandlerAction2["SET_TEMPORARY_STATE"] = "setTemporaryState";
  IEnumEventHandlerAction2["SET_LOCAL_STORAGE"] = "localStorage";
  IEnumEventHandlerAction2["RUN_FUNCTION"] = "runFunction";
  return IEnumEventHandlerAction2;
})(IEnumEventHandlerAction || {});
var IEnumRunScript = /* @__PURE__ */ ((IEnumRunScript2) => {
  IEnumRunScript2["BIND"] = "bind";
  IEnumRunScript2["PLAIN"] = "plain";
  return IEnumRunScript2;
})(IEnumRunScript || {});
function isRunFunctionEventHandler(data) {
  return data.action === "runFunction";
}
function isSetTemporaryStateEventHandler(data) {
  return data.action === "setTemporaryState";
}
function isSetLocalStorageEventHandler(data) {
  return data.action === "localStorage";
}
export {
  IEnumEventHandlerAction,
  IEnumRunScript,
  isRunFunctionEventHandler,
  isSetLocalStorageEventHandler,
  isSetTemporaryStateEventHandler
};
