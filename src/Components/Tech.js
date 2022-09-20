import {Component} from "react";
import {Query} from '@apollo/react-components';
import Header from '../Layouts/Headers';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        value: state.value
    }
}
class Tech extends Component {


    render() {

        return (
            <div>
                <Header />
                <h1>Tech Product Page </h1>
                <Query query={this.props.CATEGORIES} variables={this.props.variables}>
        {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error!! ${error.message}`;
        
        return (
          <div>
                {data.category.products.map(product => {
                    
                       return (<div key={product.id}>
                        <Link to={`/${product.id}`} >
                            <img src={product.gallery[0]} alt={product.name} />
                            <p>{product.name}</p>
                            {product.prices.map((price,index) => {
                                if(price.currency.symbol === this.props.value) {
                                  return  <p key={index}><span>{price.currency.symbol}</span>{price.amount}</p>
                                } return ""
                            })}
                            
                        </Link>
                        </div>
                    )})}
            

          </div>
        );
      }}
        </Query>

            </div>

        )
    }
}


export default connect(mapStateToProps)(Tech)