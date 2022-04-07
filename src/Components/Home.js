import {Component} from "react";
import {Query} from '@apollo/react-components';
import Header from '../Layouts/Headers';
import {Link, Outlet} from 'react-router-dom';
import Styles from '../Assets/Styles/Home.module.scss';
//import withRouter from '../Layouts/WithRouter';

class Home extends Component {


    render() {

        
        return (
            <div className={Styles.Overall}>
                <Header />
                <h1 className={Styles.Category}>Category name </h1>
                <Query query={this.props.CATEGORIES} variables={this.props.variable}>
        {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error!! ${error.message}`;
        
        return (
          <div className={Styles.Products}>
                {data.category.products.map(product => (
                    
                       <Link to={`/${product.id}`} className={Styles.Link} >
                       
                            <img src={product.gallery[0]} alt={product.name} />
                            <p>{product.name}</p>
                            <p><span>{product.prices[0].currency.symbol}</span>{product.prices[0].amount}</p>
                        
                        </Link>
                    ))}
            

          </div>
        );
      }}
        </Query>
        <Outlet/>
            </div>

        )
    }
}


export default Home