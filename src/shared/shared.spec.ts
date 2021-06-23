import * as Shared from './shared';

describe('First Test', () => {
  it('Should return truthy', () => {
    expect(Shared.returnsTrue()).toBeTrue();
  });
  it('Should return falsy', () => {
    expect(Shared.returnsTrue()).toBeFalsy();
  })
});