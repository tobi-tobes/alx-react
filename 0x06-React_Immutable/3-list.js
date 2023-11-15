import { List } from 'immutable';

export function getListObject(array) {
  return List(array);
}

export function addElementToList(list, element) {
  const finalList = list.push(element);
  return finalList;
}
