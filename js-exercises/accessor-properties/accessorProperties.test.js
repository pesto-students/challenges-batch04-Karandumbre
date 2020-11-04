import { accessorProperties } from './accessorProperties';

describe('Accessor Properties', () => {
  test('Should Return correct binary', () => {
    const obj = accessorProperties();
    obj.number = 36;

    expect(obj.number).toBe('100100');
  });
});
