import {Component} from 'react';
import Header from '../Layouts/Headers';
import {Query} from '@apollo/react-components';
import withRouter from '../Layouts/WithRouter';


class Product extends Component {
    render(){
        
         return (
            <div>
                <Header />
                
                <Query query={this.props.PRODUCTS} variables={this.props.variables}>
        {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error!! ${error.message}`;
        
        return (
          
                        <div>
                            
                            <p>{data.product.name}</p>
                            <p>{data.product.description}</p>
                            
                        </div>
                    )
            
    
      }}
        </Query>

            </div>
        
  )  
}
}
export default withRouter(Product)