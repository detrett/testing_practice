import { analyzeArray } from "./analyzeArray";

it('analyze array: 1', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
 });
})

it('analyze array: 2', () => {
  expect(analyzeArray([5,9,7,6,3,6,-1])).toEqual({
    average: 5,
    min: -1,
    max: 9,
    length: 7
 });
})