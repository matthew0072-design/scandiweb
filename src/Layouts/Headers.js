import  {Component} from 'react'
import {Link} from 'react-router-dom'
import Icon from '../Assets/Images/a-logo.png';
import Cart from '../Assets/Images/Empty Cart.png'
import {Query} from "@apollo/react-components"
import {gql} from '@apollo/client';
import Styles from '../Assets/Styles/Header.module.scss'

class Header extends Component {
 render() {
        const GETCURRENCIES = gql`
        query allcurrency{
            currencies{
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
                    <img src={Icon} alt="icon" />
                </figure>
            </div>
            <div className={Styles.dropdown}>
            <section>
                
                <Query query={GETCURRENCIES} >
        {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error!! ${error.message}`;
        
       
        return (
        
                    <select>
                     <option value={data.currencies[0].label}>{data.currencies[0].symbol}  {data.currencies[0].label}</option>
                     <option value={data.currencies[1].label}>{data.currencies[1].symbol} {data.currencies[1].label}</option>
                     <option value={data.currencies[2].label}>{data.currencies[2].symbol} {data.currencies[2].label}</option>
                     <option value={data.currencies[3].label}>{data.currencies[3].symbol} {data.currencies[3].label}</option>
                     <option value={data.currencies[4].label}>{data.currencies[4].symbol} {data.currencies[4].label}</option>
                 </select>
                    
                    
        );
      }}
        </Query>

            </section>
            <div>
            <Link to="/cart">
                <figure className={Styles.img}>
                    <img src={Cart} alt="cart"/>
                </figure>
                </Link>
            </div>
            </div>
            </div>
        );
    }
}

export default Header;