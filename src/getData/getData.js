const axios = require('axios')

const mapArrToString = require('../mapArrToString/mapArrToSting')

const placeholderJSONUrl = 'https://jsonplaceholder.typicode.com/users'

const getData = () => {
	try {
		const response = axios.get(placeholderJSONUrl)
		const usersIds = response.data.map(user => user.id)
		return mapArrToString(usersIds)
	} catch (error) {
		
	}

}

module.exports = getData