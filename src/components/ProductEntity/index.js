import React, { Component } from 'react';
import './index.css'

export class ProductEntity extends Component {
	deleteProduct = () => {
		const { id, onDestroyProduct } = this.props
		if (window.confirm('Вы действительно хотите удалить запись?')) {
      onDestroyProduct(id)
    }
	}

	render() {
		const { name, flavor, initial_price, full_price } = this.props
		return (
			<div className='product-entity'>
				<p>{name}</p>
				<p>{flavor}</p>
				<p>{initial_price}</p>
				<p>{full_price}</p>
				<p onClick={this.deleteProduct}>x</p>
			</div>
		)
	}
}