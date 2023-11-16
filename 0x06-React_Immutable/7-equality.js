import { Map } from 'immutable';

export default function areMapsEqual(map1, map2) {
  return Map.is(map1, map2);
}
