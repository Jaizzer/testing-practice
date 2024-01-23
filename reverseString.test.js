import reverseString from './reverseString';

test('dog becomes god', () => {
    expect(reverseString('dog')).toBe('god');
});

test('missile becomes elissim', () => {
    expect(reverseString('missile')).toBe('elissim');
});
