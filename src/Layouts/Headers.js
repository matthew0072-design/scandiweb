import  {Component} from 'react'
import {Link} from 'react-router-dom'
import Icon from '../Assets/Images/a-logo.png';
import Cart from '../Assets/Images/Empty Cart.png'

import Styles from '../Assets/Styles/Header.module.css';
import {connect} from 'react-redux';
import {changeValue} from '../Store/Actions/selectActions';
import Overlay from '../Components/Overlay/Overlay';
import withRouter from './WithRouter';
import Select from './Select';

function mapDispatchToProps(dispatch) {
    return {

        changeValue: value => dispatch(changeValue(value))
    }
}

const mapStateToProps = state => {
    return {
        
        carts:state.cartItem.numberCart
    }
}

   

class Header extends Component {


     state = {
        isOpen: false,
        
    }

    toggleOverlay = () => {
        this.setState({isOpen: !this.state.isOpen})
        
    }

    

  

 render() {

    
    
        
        return (
            <div className={Styles.container}>
            <nav>
                <ul className={Styles.navigation}>
                    <li className={`${this.props.router.location.pathname === "/" ? Styles.isActive : ""}`}><Link to="/" style={{ color: this.props.router.location.pathname === "/" ? "#5ECE7B" : ""}}> ALL</Link></li>
                    <li className={`${this.props.router.location.pathname === "/cloth" ? Styles.isActive : ""}`}><Link to="/cloth" style={{ color: this.props.router.location.pathname === "/cloth" ? "#5ECE7B" : ""}}>CLOTHES</Link></li>
                    <li className={`${this.props.router.location.pathname === "/tech" ? Styles.isActive : ""}`}><Link to="/tech" style={{ color: this.props.router.location.pathname === "/tech" ? "#5ECE7B" : ""}}>TECH</Link></li>
                </ul>
            </nav>
            <div>
                <figure>
                    <Link to="/">
                    <img src={Icon} alt="icon" className={Styles.Icon}/>
                    </Link>
                </figure>
            </div>
            
            <div className={Styles.dropdown}>
            
            <div className={Styles.select}>
            <Select />
                </div>
            <div>
            
                <figure className={Styles.img}>
                    <span onClick={this.toggleOverlay}><img src={Cart} alt="cart" /> <span className={Styles.CartCount}>{this.props.carts}</span></span> 
                <Overlay isOpen={this.state.isOpen} onClose={this.toggleOverlay}/>        
                </figure>   
                
            </div>
            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
