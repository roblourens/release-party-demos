// BEGIN: 5f7d8c8c5f7d
import { isIUser } from './demo';

describe('isIUser', () => {
  it('should return true for an object with id and name properties', () => {
    const obj = { id: 1, name: 'John' };
    expect(isIUser(obj)).toBe(true);
  });

  it('should return false for an object without id property', () => {
    const obj = { name: 'John' };
    expect(isIUser(obj)).toBe(false);
  });

  it('should return false for an object without name property', () => {
    const obj = { id: 1 };
    expect(isIUser(obj)).toBe(false);
  });

  it('should return false for an object with additional properties', () => {
    const obj = { id: 1, name: 'John', email: 'john@example.com' };
    expect(isIUser(obj)).toBe(false);
  });
});
// END: 5f7d8c8c5f7d