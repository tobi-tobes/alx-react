import { schema, normalize } from 'normalizr';

export const courses = new schema.Entity('courses');

export function coursesNormalizer(data) {
  return normalize(data, [courses]);
}
