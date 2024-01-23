import caesarCipher from './caesarCipher';

test('shifting "jaizzer" by 7 gives "qhpggly"', () => {
    expect(caesarCipher('jaizzer', 7)).toBe('qhpggly');
});

test('shifting "Hello World" by 56 gives "Lipps Asvph"', () => {
    expect(caesarCipher('Hello World', 56)).toBe('Lipps Asvph');
});

test('shifting "dog" by 1 gives "eph"', () => {
    expect(caesarCipher('dog', 1)).toBe('eph');
});

test('shifting "lasdhghasdlkhasdglkadsgaglJAJSKkKKk" by 33 gives "shzkonohzksrohzknsrhkznhnsQHQZRrRRr"', () => {
    expect(caesarCipher('lasdhghasdlkhasdglkadsgaglJAJSKkKKk', 33)).toBe('shzkonohzksrohzknsrhkznhnsQHQZRrRRr');
});

test('shifting "###" by 5 gives "###"', () => {
    expect(caesarCipher('"###"', 5)).toBe('"###"');
});
