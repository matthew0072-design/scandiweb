import {Component} from 'react';
import Header from '../Layouts/Headers';
import {Query} from '@apollo/react-components';
import withRouter from '../Layouts/WithRouter';
import {connect} from 'react-redux';
import {addToCart} from '../Store/Actions/cartActions'
import Styles from '../Assets/Styles/Product.module.css'
import Spinner from "./Overlay/Spinner"


class Product extends Component {



    state = {
        price: "",
        imageIndex: 0,
    }

handleImageIndex = (index) => {
        this.setState({imageIndex: index})
} 

    handleAmount = (amount) => {
        
        this.setState({price: amount })
        
    }


    

    render() {
       let priceAmount;
       
         return (
            <div>
                <Header />
                
                <Query query={this.props.PRODUCTS} variables={{"id":this.props.router.params.id}}>
        {({ loading, error, data }) => {
        if (loading) return <Spinner/>;
        if (error) return `Error!! ${error.message}`;                                                                                                                                                                      
        
        return (
           
          
                        <div className={Styles.overall}>
                            
                            <div className={Styles.imageGallery}>
                                {data.product.gallery.map((productItem, index) => { 
                                
                               return (
                                    
                                        <img src={productItem} key={index} alt={productItem.name} className={Styles.image} onClick={() => this.handleImageIndex(index)}/>
                                    
                                )}
                                )}
                                
                            </div>
                                    <section >
                                    </section>
                                    <section >
                                        <img src={data.product.gallery[this.state.imageIndex]} alt="" className={Styles.displayImage} />
                                    </section>
                            <div className={Styles.productDetails}>
                            <p className={Styles.productName}>{data.product.name}</p>
                            <p className={Styles.productBrand}>{data.product.brand}</p>
                            <p className={Styles.size}>Size:</p>
                            <div className={Styles.sizeContainer}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                                <button className={Styles.sizeButton}>XS</button>
                                <button className={[Styles.sizeButton,Styles.sizeBlackButton].join(" ")}>S</button>                           
                                <button className={Styles.sizeButton}>M</button>
                                <button className={Styles.sizeButton}>L</button>
                            </div>
                            <p className={Styles.color}>COLOR:</p>
                            <section className={Styles.colorContainer}>
                                <div className={Styles.colorDiv1}></div>
                                <div className={Styles.colorDiv2}></div>
                                <div className={Styles.colorDiv3}></div>
                            </section>
                            
                            {data.product.prices.map((price, index) => {
                                 if(price.currency.symbol === this.props.value) {
                                            priceAmount = price.amount;
                                                                   
                                    return <p key={index} className={Styles.color}>PRICE:<span className={Styles.spanPrice}>{price.currency.symbol}{price.amount}</span></p>
                                 } return ""
                            })}

                            
                            <button onClick={() => this.props.addToCart({id:data.product.id,
                            name: data.product.name,
                            brand: data.product.brand,
                            gallery: data.product.gallery,
                            prices: priceAmount
                            
                            })} className={Styles.cartButton}>ADD TO CART</button>
                          <p className={Styles.description}>{data.product.description.replace( /(<([^>]+)>)/ig, '')}</p> 
                        
                        
                         </div>
                         
                        </div>
                    )
            
    
      }}
        </Query>

            </div>
        
  )  
}}


const mapStateToProps = state => {
    return {
        value: state.selects.value,
        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
}
}
function mapDispatchToProps(dispatch){
    return {
       addToCart: product => dispatch(addToCart(product))
         }
    };


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Product))