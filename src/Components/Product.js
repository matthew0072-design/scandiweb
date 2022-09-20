import {Component} from 'react';
import Header from '../Layouts/Headers';
import {Query} from '@apollo/react-components';
import withRouter from '../Layouts/WithRouter';
import {connect} from 'react-redux';
import {addToCart} from '../Store/Actions/cartActions'




class Product extends Component {


// handleClick =(products) => {
                                                                                                                                                                                                                         //     this.props.addToCart(products)
//     console.log(products)
// }


    state = {
        price: ""
    }

    handleAmount = (amount) => {
        
        this.setState({price: amount })
        console.log(amount)
    }

//  handleClick = () => {
//     const item = {
//         id: data.product.id,
//         name: data.product.name,
//         brand: data.product.brand,
//         gallery: data.product.gallery,
//         price: this.state.price
//     }
//     this.props.carts(this.setState({item}))
// }
        


    render(){
       let priceAmount;
         return (
            <div>
                <Header />
                
                <Query query={this.props.PRODUCTS} variables={{"id":this.props.router.params.id}}>
        {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error!! ${error.message}`;                                                                                                                                                                      
        
        return (
          
                        <div>
                            <div>
                                <img src={data.product.gallery[0]} alt={data.product.name} />
                                <img src={data.product.gallery[1]} alt={data.product.name} />
                                <img src={data.product.gallery[2]} alt={data.product.name} />
                                <img src={data.product.gallery[3]} alt={data.product.name} />
                                <img src={data.product.gallery[4]} alt={data.product.name} />
                            </div>
                            <p>{data.product.name}</p>
                            <div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                                <button>XS</button>
                                <button>S</button>                           
                                <button>M</button>
                                <button>L</button>
                            </div>
                            <section>
                                <div></div>
                                <div></div>
                                <div></div>
                            </section>
                            
                            {data.product.prices.map((price, index) => {
                                 if(price.currency.symbol === this.props.value) {
                                            priceAmount = price.amount;
                                            console.log(priceAmount)                         
                                    return <p key={index} >PRICE:<span>{price.currency.symbol}</span>{price.amount}</p>
                                 } return ""
                            })}

                            
                            <button onClick={() => this.props.addToCart({id:data.product.id,
                            name: data.product.name,
                            brand: data.product.brand,
                            gallery: data.product.gallery,
                            prices: priceAmount
                            
                            })}>ADD TO CART</button>
                         {/* <p>{data.product.description.replace( /(<([^>]+)>)/ig, '')}</p> */}
                         <p>{data.product.description}</p>
                           
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