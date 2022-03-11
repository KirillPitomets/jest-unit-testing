const validateValue = require('./validateValue')

describe('validate value', () => {
	test('correct value', () => {
		expect(validateValue(50)).toBe(true)
	})
	test('min correct value', () => {
		expect(validateValue(0)).toBe(true)
	})
	test('max correct value', () => {
		expect(validateValue(100)).toBe(true)
	})
	test('Invalid value. -1 is less than 1', () => {
		expect(validateValue(-1)).toBe(false)
	})

	test('Invalid value. 101 is greater than 100', () => {
		expect(validateValue(101)).toBe(false)
	})
})
