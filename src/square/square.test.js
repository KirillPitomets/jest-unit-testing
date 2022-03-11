const square = require('./square')

describe('square', () => {
	let mockValue

	// Перед каждым
	beforeEach(() => {
		mockValue = Math.random()
		// Например: добавили user в БД
	})
	// Перед запуском
	beforeAll(() => {})
	// После каждого теста
	afterEach(() => {
		jest.clearAllMocks()
	})
	// После всех тестов
	afterAll(() => {
		// Удалили user с БД
	})

	test('valid value ', () => {
		// expect(square(2)).toBe(4)
		// expect(square(2)).toBeLessThan(5)
		// expect(square(2)).toBeGreaterThan(3)
		// expect(square(2)).not.toBeUndefined()

		const spyMathPow = jest.spyOn(Math, 'pow')

		square(2)
		// Ожидаем 1 вызов метода Math.pow
		expect(spyMathPow).toBeCalledTimes(1) 
	})

	test('valid value ', () => {
		// expect(square(2)).toBe(4)
		// expect(square(2)).toBeLessThan(5)
		// expect(square(2)).toBeGreaterThan(3)
		// expect(square(2)).not.toBeUndefined()

		const spyMathPow = jest.spyOn(Math, 'pow')

		square(1)
		// Ожидаем 0 вызов метода Math.pow
		expect(spyMathPow).toBeCalledTimes(0) 
	})
})
