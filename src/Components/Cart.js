import {Component} from 'react';
import Header from '../Layouts/Headers';
import './ImageSlider/Slider.css'
import {connect} from 'react-redux';
import {addToCart, subQuantity} from '../Store/Actions/cartActions';
import BtnSlider from './ImageSlider/btnSlider';

class Cart extends Component {

    state = {
        slideIndex: 0
    }
     

     


    
    render(){


            
        return (
            <div>
                <Header />
                <h1>CART</h1>
                <div>
                <section>
                  {this.props.carts.map((item) => 
                      (
                        <div key={item.id}>
                            <div>
                            <p>{item.name}</p> 
                             <p>{item.brand}</p> 
                             
                             
                        </div> 
                        <div>
                        <button>XS</button>
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                    </div>
                    <div>
                        <p>COLOR:</p>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <section>
                        <div> 
                        <button onClick ={() => this.props.addToCart(item)}>+</button>
                        <p>{item.quantity}</p>
                        <button onClick ={() => this.props.subQuantity(item)}>-</button>
                        </div>
                        
                        <div>
                        {item.galleries.map((items,index) => {
                            const imageLength = item.galleries.length

                           const nextSlide = () => {
                                
                                
                                let newSlide = this.state.slideIndex === imageLength - 1 ? 0 : this.state.slideIndex + 1
                                   this.setState({slideIndex: newSlide})
                        
                             }

                        const prevSlide = () => {
                                
                                
                                 let newSlide = this.state.slideIndex ===  0 ? imageLength - 1 : this.state.slideIndex - 1;
                                 this.setState({slideIndex:newSlide})
                            
                            }
                        
                               
                          return (
                            <div key={index}>
                          <div   className={this.state.slideIndex === index  ? "slide active-anim" : "slide"}>
                        <img src={items} alt={item.name}/>
                        <BtnSlider click={nextSlide} direction={"next"} />
                        <BtnSlider click={prevSlide}  direction={"prev"}/>
                        
                        </div>
                        
                        </div>)
                        
                            
                        })}   
                           

                        </div>
                                    </section>
                    </div>
                      )
                  )}  
                   
                </section>
                </div>
                <div>
                    <p>Tax 21%: {this.props.carts.reduce((total, item) => total + (item.prices*item.quantity)*(0.21),0)}</p>
                    <p>Quantity: {this.props.numberCarts}</p>
                    <p>Total: {this.props.carts.reduce((total, item) => total + (item.prices*item.quantity),0)}</p>
                    <button>Order</button>
                    </div>
            </div>
        )
    
} 
}

const mapStateToProps = state => {

    return {
        carts: state.cartItem.carts,
        value: state.selects.value,
        numberCarts: state.cartItem.numberCart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: product => dispatch(addToCart(product)),
        subQuantity: (id) => dispatch(subQuantity(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)