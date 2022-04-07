import {Component} from "react";
import {Query} from '@apollo/react-components';
import Header from '../Layouts/Headers'


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
                {data.category.products.map(product => (
                    
                        <div key={product.id}>
                            <img src={product.gallery[0]} alt={product.name} />
                            <p>{product.name}</p>
                            <p><span>{product.prices[0].currency.symbol}</span>{product.prices[0].amount}</p>
                            
                        </div>
                    )
                    
                        
                    )}
            

          </div>
        );
      }}
        </Query>

            </div>

        )
    }
}


export default Tech