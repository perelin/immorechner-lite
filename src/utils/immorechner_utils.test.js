import immoUtils from './../utils/immorechner_util'

test('checkIfValidNumber NaN', () => {
    const result = immoUtils.checkIfValidNumber(NaN)
    expect(result).toBe(0)
})

test('checkIfValidNumber POSITIVE_INFINITY', () => {
    const result = immoUtils.checkIfValidNumber(Number.POSITIVE_INFINITY)
    expect(result).toBe(0)
})

test('checkIfValidNumber valid number', () => {
    const result = immoUtils.checkIfValidNumber(3.56)
    expect(result).toBe(3.56)
})