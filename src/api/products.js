import axios from 'axios'

export function getProducts () {
	return axios.get('http://localhost:3001/products')
}

export function deleteProduct(id) {
	return axios.delete(`http://localhost:3001/products/${id}`)
}

export function createProduct(data) {
	return axios.post('http://localhost:3001/products', data)
}
