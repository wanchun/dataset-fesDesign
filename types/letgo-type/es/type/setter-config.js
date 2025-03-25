function isSetterConfig(obj) {
  return obj && typeof obj === "object" && "componentName" in obj;
}
export {
  isSetterConfig
};
