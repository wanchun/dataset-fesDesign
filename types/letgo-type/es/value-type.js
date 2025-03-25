function isJSExpression(data) {
  return data && typeof data === "object" && data.type === "JSExpression";
}
function isJSFunction(data) {
  return data && typeof data === "object" && data.type === "JSFunction";
}
function isJSSlot(data) {
  return data && typeof data === "object" && data.type === "JSSlot";
}
export {
  isJSExpression,
  isJSFunction,
  isJSSlot
};
