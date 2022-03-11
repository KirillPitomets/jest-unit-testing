const delay = require('./delay')

describe('Tests of delay function', () => {
	test('Valid value', async () => {
		const sum = await delay(() => 5 + 5, 1000)
		expect(sum).toBe(10)
	})
})
