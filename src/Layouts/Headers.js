import  {Component} from 'react'
import {Link} from 'react-router-dom'
import Icon from '../Assets/Images/a-logo.png';
import Cart from '../Assets/Images/Empty Cart.png'
import {Query} from "@apollo/react-components"
import {gql} from '@apollo/client';
import Styles from '../Assets/Styles/Header.module.scss';
import {connect} from 'react-redux';
import {changeValue} from '../Store/Actions/selectActions';


function mapDispatchToProps(dispatch) {
    return {

        changeValue: value => dispatch(changeValue(value))
    }
}

const mapStateToProps = state => {
    return {
        value: state.selects.value,
        carts:state.cartItem.numberCart
    }
}



class Header extends Component {


 render() {

    
        const GET_CURRENCIES = gql`
        query allcurrency {

            currencies {
              label,
              symbol
            }
            
          }
        `;

        
        return (
            <div className={Styles.container}>
            <nav>
                <ul className={Styles.navigation}>
                    <li><Link to="/"> ALL</Link></li>
                    <li><Link to="/cloth">CLOTHES</Link></li>
                    <li><Link to="/tech">TECH</Link></li>
                </ul>
            </nav>
            <div>
                <figure>
                    <Link to="/">
                    <img src={Icon} alt="icon" />
                    </Link>
                </figure>
            </div>
            <div className={Styles.dropdown}>
            <section>
                
                <Query query={GET_CURRENCIES} >
        {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error!! ${error.message}`;
        
       
        return (
        <select  value={this.props.value}  onChange={(e) => this.props.changeValue(e.target.value)}>
                {data.currencies.map(option => (
                    <option value={option.symbol} key={option.label}>{option.symbol} </option>
                ))}
        </select>
                
                    
        );
      }}
        </Query>
       

            </section>
            <div>
            <Link to="/cart">
                <figure className={Styles.img}>
                    <span><img src={Cart} alt="cart"/> cart:{this.props.carts}</span> 
                    
                </figure> 
                </Link>
            </div>
            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);