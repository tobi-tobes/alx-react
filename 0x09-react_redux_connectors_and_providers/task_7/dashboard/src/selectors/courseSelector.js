import { List } from 'immutable';

const courseSelector = (state) => {
  const courseEntities = state.courses;

  return List(courseEntities.valueSeq());
};

export default courseSelector;
