import {Component} from "react";
import {Query} from '@apollo/react-components';
import Header from '../Layouts/Headers'


class Clothes extends Component {


    render() {

       

        return (
            <div>
                <Header />
                <h1>Cloth Category Page </h1>
                <Query query={this.props.CATEGORIES} variables={this.props.variables}>
        {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error!! ${error.message}`;
       
            const overall = data.category.products[0].prices[0].currency.symbol
            console.log(overall)

      return (
          <div>
                 {data.category.products.map(product => (
                     <div key={product.id}>
                            <img src={product.gallery[1]} alt={product.name} />
                            <p>{product.name}</p>
                            
                            <p><span>{product.prices[0].currency.symbol}</span>{product.prices[0].amount}</p>
                        </div>
                    
                    
                        
                 ))}
            
          </div>
        );
      }}
        </Query>

            </div>

        )
    }
}


export default Clothes