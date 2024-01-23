import analyzeArray from './analyzeArray';

test('[5, 6, 7] has a length of 3', () => {
    expect(analyzeArray([5, 6, 7]).length).toBe(3);
});

test('[5, 6, 7] has a min of 5', () => {
    expect(analyzeArray([5, 6, 7]).min).toBe(5);
});

test('[5, 6, 7] has a max of 7', () => {
    expect(analyzeArray([5, 6, 7]).max).toBe(7);
});

test('[5, 6, 7] has a average of 6', () => {
    expect(analyzeArray([5, 6, 7]).average).toBeCloseTo(6);
});

test('[5, 6, 7] has a average close to 5.565', () => {
    expect(analyzeArray([5, 6, 7, 5, 8, 7, 1]).average).toBeCloseTo(5.565);
});
