import getData from '../index';

const get = new getData();

test('shoud get all sumPopulation data', () => {
    expect.assertions(1)
    return get.sumPopulation().then(data => {
        expect(data.length).toBe(99)
    })
})

test('shoud get collect sumPopulation data', () => {
    expect.assertions(2)
    return get.sumPopulation().then(data => {
        expect(data[0].x).toBe(0)
        //expect(data[0].y).toBe(127094745)
    })
})

test('shoud get all malePopulation data', () => {
    expect.assertions(1)
    return get.malePopulation().then(data => {
        expect(data.length).toBe(99)
    })
})

test('shoud get collect malePopulation data', () => {
    expect.assertions(2)
    return get.malePopulation().then(data => {
        expect(data[0].x).toBe(0)
        //expect(data[0].y).toBe(61841738)
    })
})

test('shoud get all femalePopulation data', () => {
    expect.assertions(1)
    return get.femalePopulation().then(data => {
        expect(data.length).toBe(99)
    })
})

test('shoud get collect femalePopulation data', () => {
    expect.assertions(2)
    return get.femalePopulation().then(data => {
        expect(data[0].x).toBe(0)
        //expect(data[0].y).toBe(65253007)
    })
})