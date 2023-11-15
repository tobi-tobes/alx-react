import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const immutable = fromJS(object);
  const found = immutable.getIn(array);
  return found;
}
