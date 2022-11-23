import {Component} from "react";
import {Query} from '@apollo/react-components';
import Header from '../Layouts/Headers'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Styles from "../Assets/Styles/ProductList.module.css"
import Spinner from "./Overlay/Spinner"

const mapStateToProps = state => {
    return {
        value: state.selects.value
    }
};

class Clothes extends Component {


    render() {

       
        return (
            <div>
                <Header />
               
                <Query query={this.props.CATEGORIES} variables={this.props.variables}>
        {({ loading, error, data }) => {
        if (loading) return <Spinner />;
        if (error) return `Error!! ${error.message}`;
       
            

      return (
          <div className={Styles.Overall}>
                 {data.category.products.map(product => {
                     
                     return(<div key={product.id} className={Styles.productCard}>
                         <Link to={`/${product.id}`} className={Styles.Link}>
                            <img src={product.gallery[1]} alt={product.name} className={Styles.productImage}/>
                            <p className={Styles.productName}>{product.name}</p>
                            {product.prices.map((price,index) => {
                                if(price.currency.symbol === this.props.value){
                                return <p key={index} className={Styles.productPrice}><span>{price.currency.symbol}</span>{price.amount}</p>
                                } return ""
                            })}
                            
                            </Link>
                        </div>)}
                 )}
            
          </div>
        );
      }}
        </Query>

            </div>

        )
    }
}


export default connect(mapStateToProps)(Clothes)