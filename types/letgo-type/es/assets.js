var IPublicEnumAssetLevel = /* @__PURE__ */ ((IPublicEnumAssetLevel2) => {
  IPublicEnumAssetLevel2[IPublicEnumAssetLevel2["Environment"] = 1] = "Environment";
  IPublicEnumAssetLevel2[IPublicEnumAssetLevel2["Library"] = 2] = "Library";
  IPublicEnumAssetLevel2[IPublicEnumAssetLevel2["Theme"] = 3] = "Theme";
  IPublicEnumAssetLevel2[IPublicEnumAssetLevel2["Runtime"] = 4] = "Runtime";
  IPublicEnumAssetLevel2[IPublicEnumAssetLevel2["Components"] = 5] = "Components";
  IPublicEnumAssetLevel2[IPublicEnumAssetLevel2["App"] = 6] = "App";
  return IPublicEnumAssetLevel2;
})(IPublicEnumAssetLevel || {});
const AssetLevels = [
  1,
  2,
  3,
  4,
  5,
  6
  /* App */
];
var IPublicEnumAssetType = /* @__PURE__ */ ((IPublicEnumAssetType2) => {
  IPublicEnumAssetType2["JSUrl"] = "jsUrl";
  IPublicEnumAssetType2["CSSUrl"] = "cssUrl";
  IPublicEnumAssetType2["CSSText"] = "cssText";
  IPublicEnumAssetType2["JSText"] = "jsText";
  IPublicEnumAssetType2["Bundle"] = "bundle";
  return IPublicEnumAssetType2;
})(IPublicEnumAssetType || {});
export {
  AssetLevels,
  IPublicEnumAssetLevel,
  IPublicEnumAssetType
};
