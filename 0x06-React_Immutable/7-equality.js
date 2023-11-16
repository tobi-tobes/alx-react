import { Map } from 'immutable';

export default function areMapsEqual(map1, map2) {
  return Map.isMap(map1, map2);
}
