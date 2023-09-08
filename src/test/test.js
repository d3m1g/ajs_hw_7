import { Validator } from '../index.js';

describe("Validate", () => {
 test('demik_true"]', () => {
  const demik = new Validator('dem1k');
  expect(demik.validateUsername('demik')).toEqual(true);
 });

 test('demik_not_true"]', () => {
  const demik = new Validator('1demik');
  expect(demik.validateUsername('demik')).toEqual(false);
 })

 test('demik_not_true"]', () => {
  const demik = new Validator('dem1k1');
  expect(demik.validateUsername('demik')).toEqual(false);
 })

 test('demik_not_true"]', () => {
  const demik = new Validator('demik-');
  expect(demik.validateUsername('demik')).toEqual(false);
 })

 test('demik_not_true"]', () => {
  const demik = new Validator('d333mik');
  expect(demik.validateUsername('demik')).toEqual(false);
 })
})