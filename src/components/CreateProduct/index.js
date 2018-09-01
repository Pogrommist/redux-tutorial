import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import './index.css'

export class CreateProduct extends Component {
 
	render() {
			return (
			<form 
			onSubmit={this.props.handleSubmit}
			className='product-form'>
				<Field
					name='name'
					component='input'
					placeholder='Название'
					type='text'
				/>
				<Field
					name='flavor'
					component='input'
					placeholder='Вкус'
					type='text'
				/>
				<Field
					name='initial_price'
					component='input'
					placeholder='Закупочная цена'
					type='text'
				/>
				<Field
					name='full_price'
					component='input'
					placeholder='Полная цена'
					type='text'
				/>
				<button type='submit'>Добавить</button>
			</form>
		)
	}
}
export default reduxForm({ form: 'CreateProduct' })(CreateProduct)