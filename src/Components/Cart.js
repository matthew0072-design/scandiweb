import {Component} from 'react';
import Header from '../Layouts/Headers';
import './ImageSlider/Slider.css'
import {connect} from 'react-redux';
import {addToCart, subQuantity} from '../Store/Actions/cartActions';
import BtnSlider from './ImageSlider/btnSlider';
import Styles from '../Assets/Styles/Cart.module.css';


class Cart extends Component {

    
    state = {
        slideIndex: 0
    }


    render() {

        

        return (
            <div className={Styles.Container}>
                <Header />
                <h1 className={Styles.Cart}>CART</h1>
                <div className={Styles.cartItem}>
                  {this.props.carts.map((item) =>

                      (<div key={item.id} className={Styles.cartItems}>
                        <div className={Styles.CartFeatures} >
                            <div> 
                            <p className={Styles.CartName}>{item.name}</p> 
                             <p className={Styles.CartBrand}>{item.brand}</p> 
                             <p className={Styles.CartPrice}>{item.prices}</p>
                             
                         </div> 
                         <p className={Styles.CartSize}>Size</p>
                        <div className={Styles.CartSizeContainer}>
                        <button className={Styles.buttonSize}>XS</button>
                        <button className={Styles.buttonSize}>S</button>
                        <button className={Styles.buttonSize}>M</button>
                        <button className={Styles.buttonSize}>L</button>
                    </div>
                    <p className={Styles.color}>COLOR:</p>
                    <div className={Styles.colorContainer}>
                        
                        <div className={Styles.colorSize}></div>
                        <div className={Styles.colorSize}></div>
                        <div className={Styles.colorSize}></div>
                    </div>
                    </div>
                    <section className={Styles.SectionImage}>
                        <div  className={Styles.IncreasedButton}> 
                        <button onClick ={() => this.props.addToCart(item)} className={Styles.btn}>+</button>
                        <p>{item.quantity}</p>
                        <button onClick ={() => this.props.subQuantity(item)} className={Styles.btn}>-</button>
                        </div>
                        
                        <div className={Styles.ImageGallery}>
                            
                        {item.galleries.map((items,index) => {
                            let imageLength = item.galleries.length
                        

                           const nextSlide = () => {

                           let newSlide = this.state.slideIndex === imageLength - 1 ?  0 : this.state.slideIndex + 1 
                             this.setState({slideIndex: newSlide})
                             
                                     
                             }


                             const prevSlide = () => {

                                let newSlide = this.state.slideIndex === 0 ?  imageLength - 1 : this.state.slideIndex - 1 
                                this.setState({slideIndex: newSlide})
                              
                 }  
                          return (
                            <div key={index}>                         
                                 <div  className={this.state.slideIndex === index ? "slide active-anim" : "slide"}>
                        
                        
                        <img src={items} alt={item.name} className={Styles.ImageSlide} />
                         <BtnSlider click={nextSlide} direction={"next"} />
                         <BtnSlider click={prevSlide}  direction={"prev"}/> 
                        
                         </div>
                         </div>)})}   
                        </div>
                                    </section>
                    </div>
                      )
                  )}  
                   
                
                </div>
                <div className={Styles.total}>
                    <p className={Styles.tax}>Tax 21%:<span className={Styles.taxBold}>  {this.props.carts.reduce((total, item) =>Math.round((total + (item.prices*item.quantity)*(0.21)) * 100 + Number.EPSILON)/100 ,0)}</span></p>
                    <p className={Styles.tax}>Quantity: <span className={Styles.taxBold}> {this.props.numberCarts}</span></p>
                    <p className={Styles.totalPrice}>Total: {this.props.carts.reduce((total, item) => Math.round( (total + (item.prices*item.quantity)) * 100 + Number.EPSILON)/100,0)}</p>
                    <button className={Styles.orderButton}>Order</button>
                    </div>
            </div>
        )
    
} 
}

const mapStateToProps = state => {

    return {
        carts: state.cartItem.carts,
        value: state.selects.value,
        numberCarts: state.cartItem.numberCart,
        
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: product => dispatch(addToCart(product)),
        subQuantity: (id) => dispatch(subQuantity(id)),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)