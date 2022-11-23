import {Component} from 'react';
import '../ImageSlider/Slider.css';
import {connect} from 'react-redux';
import {addToCart, subQuantity} from '../../Store/Actions/cartActions'
import Styles from "../Overlay/Overlay.module.css"



class Cart extends Component {

    
    render(){
            
        return (
            <div className={Styles.OverlayCart}>
                <div>
                <h1 className={Styles.BagItem}>My Bag, {this.props.numberCarts} </h1>
                </div>
                
                  {this.props.carts.map((item) => 
                      (
                        <div key={item.id} className={Styles.Item}>
                            <div className={Styles.ProductName}>
                            <p className={Styles.OverlayName}>{item.name}</p> 
                             <p className={Styles.OverlayName}>{item.brand}</p> 
                             <p className={Styles.OverlayPrice}>{this.props.value}{item.prices} </p>
                         <p className={Styles.OverlaySize}>Size:</p>
                             <div className={Styles.OverlaySizeContainer}>
                        <button className={Styles.OverlaySizeButton}>XS</button>
                        <button className={[Styles.OverlaySizeButton, Styles.OverlaySizeBlackButton].join(" ")}>S</button>
                        <button className={Styles.OverlaySizeButton}>M</button>
                        <button className={Styles.OverlaySizeButton}>L</button>
                    </div>
                    <p>COLOR:</p>
                    <div className={Styles.OverlayColorContainer}>
                        
                        <div className={Styles.OverlayColorDiv1}></div>
                        <div className={Styles.OverlayColorDiv2}></div>
                        <div className={Styles.OverlayColorDiv3}></div>
                    </div>    
                             
                        </div> 
                        
                

                        <div className={Styles.CartNumber}> 
                        <button onClick ={() => this.props.addToCart(item)} className={Styles.ButtonPlus}>+</button>
                        <p className={Styles.ButtonPlusNumber}>{item.quantity}</p>
                        <button onClick ={() => this.props.subQuantity(item)} className={Styles.ButtonPlus}>-</button>
                        </div>
                        
                        <div>
                        <img src={item.galleries[0]} alt={item.name} className={Styles.ProductImage}/>
                        
                       
                        
                        </div>
                        </div>
                      )
                  )}  
                   
                
                <div className={Styles.TotalContainer}>
                    
                    <p className={Styles.TotalParagraph}>Total </p>
                    <p className={Styles.TotalParagraphPrice}> {this.props.value}{this.props.carts.reduce((total, item) => total + (item.prices*item.quantity),0)}</p>
                    </div>
                    <div className={Styles.CheckOut}>
                    <button className={Styles.ViewBag}>VIEW BAG</button>
                    <button className={Styles.CheckOutButton}>CHECK OUT</button>
                    </div>
            </div>
        )
    
} 
}

const mapStateToProps = state => {

    return {
        value: state.selects.value,
        carts: state.cartItem.carts,
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