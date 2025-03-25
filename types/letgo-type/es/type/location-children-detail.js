import { IPublicEnumLocationDetail } from "..";
function isLocationChildrenDetail(obj) {
  return obj && obj.type === IPublicEnumLocationDetail.Children;
}
export {
  isLocationChildrenDetail
};
