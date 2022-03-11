const mapArrToSting = require('./mapArrToSting')

describe('mapArrToSting', () => {

	test('Valid value', () => {
		// toEqual для сравнения содержимого
		expect(mapArrToSting([1, 2, 3])).toEqual(['1', '2', '3'])
	})

	test('Array with different types', () => {
		// toEqual для сравнения содержимого
		expect(mapArrToSting([1, 2, 3, null, 'Hi'])).toEqual(['1','2','3'])
	})

	test('Empty array', () => {
		// toEqual для сравнения содержимого
		expect(mapArrToSting([])).toEqual([])
	})

	// Отрицания =====

	test('Отрицание', () => {
		expect(mapArrToSting([1,2,3])).not.toEqual([1,2,3,4])
	})

})
