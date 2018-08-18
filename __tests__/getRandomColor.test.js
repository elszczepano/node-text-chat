import getRandomColor from '../src/public/js/modules/getRandomColor';

test('Check is returning a color in HEX', () => {
    expect(getRandomColor()).toMatch(/^#[0-9A-F]{6}$/i);
});
