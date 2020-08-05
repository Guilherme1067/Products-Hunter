import React, {Component} from 'react';

import api from '../../services/api'

export default class Main extends Component{
    
    state = { 
        products: [],
    }
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () =>{
        const response = await api.get('/products');
        console.log(response)
        this.setState({products: response.data.docs});
    }
    render(){
        const { products } = this.state
        return (
            <div className="list-products">
                {products.map(product => (
                    <article key={product._id}>{product.title}</article>
                    ))}
            </div>
        )
    }
}
