const initialState = []

export default function products (state = initialState, action) {
	switch(action.type) {
		case 'GET_PRODUCTS_SUCCESS':
			return [...state, ...action.payload]
		case 'DELETE_PRODUCT_SUCCESS':
			return [...state.filter(product => product.id !== action.payload)];
		case 'ADD_PRRODUCT_SUCCESS':
			return [...state, action.payload]
		default: return state	
	}
}