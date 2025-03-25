import { IPublicEnumDragObject } from "..";
function isDragNodeObject(obj) {
  return obj && obj.type === IPublicEnumDragObject.Node;
}
function isDragNodeDataObject(obj) {
  return obj && obj.type === IPublicEnumDragObject.NodeData;
}
function isDragAnyObject(obj) {
  return obj && obj.type !== IPublicEnumDragObject.NodeData && obj.type !== IPublicEnumDragObject.Node;
}
export {
  isDragAnyObject,
  isDragNodeDataObject,
  isDragNodeObject
};
