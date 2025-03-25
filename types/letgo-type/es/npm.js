function isProCodeComponentType(desc) {
  return "package" in desc;
}
function isLowCodeComponentType(desc) {
  return !isProCodeComponentType(desc);
}
export {
  isLowCodeComponentType,
  isProCodeComponentType
};
