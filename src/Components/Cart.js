import {Component} from 'react';
import Header from '../Layouts/Headers';
import CartImage from '../Assets/Images/Empty Cart.png';

class Cart extends Component {
    render(){
        return (
            <div>
                <Header />
                <h1>Cart</h1>
                <div>
                <section>
                    <p>product name</p>
                    <p>product price</p>
                    <div>
                        <button>S</button>
                        <button>M</button>
                    </div>
                </section>
                <section>
                    <button>+</button>
                    <p>No of product</p>
                    <button>-</button>
                    <img src={CartImage} alt="productImage" />
                </section>
                </div>
            </div>
        )
    }
} 

export default Cart