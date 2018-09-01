import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchProducts, destroyProduct, addProduct} from '../../redux/actions/products'
import './index.css';
import { ProductEntity } from '../../components/ProductEntity'
import  CreateProduct  from '../../components/CreateProduct'

class Products extends Component {

	componentDidMount () {
		const { fetchProducts } = this.props 
		fetchProducts()
	}

	handleSubmit = (data) => {
		const { onCreateProduct } =this.props
		onCreateProduct(data)
	}

	render() {
		return(
			<div className='products-container'>
				<CreateProduct onSubmit={this.handleSubmit} />
				
				<div>
				{this.props.products.map(
					item => 
					 <ProductEntity 
						name={item.name}
						flavor={item.flavor}
						initial_price={item.initial_price}
						full_price={item.full_price}
						key={item.id}
						id={item.id}
						onDestroyProduct={this.props.destroyProduct}
					 />
				)}
				</div>
				
			</div>
		)
	}
}

const mapStateToProps = state => ({
	products: state.products
})

const mapDispatchToProps = dispatch => ({
	fetchProducts() { return dispatch(fetchProducts())},
	destroyProduct(id) { return dispatch(destroyProduct(id))},
	onCreateProduct(data) { return dispatch(addProduct(data))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)