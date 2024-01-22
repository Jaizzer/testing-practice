import capitalize from './capitalize';

test('dog becomes Dog', () => {
    expect(capitalize('dog')).toBe('Dog');
});

test('head becomes Head', () => {
    expect(capitalize('head')).toBe('Head');
});
