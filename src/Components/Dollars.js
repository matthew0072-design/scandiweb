import {Component} from "react";
import {Query} from '@apollo/react-components';
import {Link, Outlet} from 'react-router-dom';
import Styles from '../Assets/Styles/Home.module.scss';
import {connect} from "react-redux";



const mapStateToProps = state => {
    return {
        value: state.selects.value
    }
};


class Dollars extends Component {
             
    render() {
        
        return (
            <div className={Styles.Overall}>
                
                <Query query={this.props.CATEGORIES} variables={this.props.variables}>
        {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error!! ${error.message}`;
        
        return (
          <div className={Styles.Products}>
                {data.category.products.map(product => {
                    
                 return (<div key={product.id}>
                    <Link to={`/${product.id}`} className={Styles.Link} >
                         <img src={product.gallery[0]} alt={product.name} />
                         <p>{product.name}</p>
                        {product.prices.map((price,index) => {
                            console.log(this.props.value)
                            if(price.currency.symbol === this.props.value){
                                
                               return  <p key={index}><span>{price.currency.symbol}</span>{price.amount}</p>
                             } return""
                                
                             
                      })}

                         
                    {/* {product.prices.map((price,index) => {
                        if(price.currency.symbol === this.props.value){
                       return <p key={index}><span>{price.currency.symbol}</span>{price.amount}</p>
                    } return ""
                    })} */}

                     </Link>
                 </div>)
                   })}
          </div>
        );
      }}
        </Query>
        <Outlet/>
        
            </div>

        )
    }
}


export default connect(mapStateToProps)(Dollars)