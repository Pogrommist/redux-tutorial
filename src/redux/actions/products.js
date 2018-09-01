import { createProduct, getProducts, deleteProduct } from '../../api/products'

export function fetchProducts () {
	return dispatch => {
		getProducts()
			.then(res => dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: res.data }))
	}
}

export function destroyProduct(id) {
	return dispatch => {
		deleteProduct(id)
		.then(res => dispatch({ type:'DELETE_PRODUCT_SUCCESS', payload: id }))
	}
}

export function addProduct(data) {
	return dispatch => {
		createProduct(data)
		.then(res => dispatch({ type:'ADD_PRRODUCT_SUCCESS', payload: res.data }))
	}
}