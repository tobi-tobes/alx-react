import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  const list1 = List(page1);
  const list2 = List(page2);
  const concat = list1.concat(list2);

  return concat;
}

export function mergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  const merged = map1.merge(map2);

  return merged;
}
