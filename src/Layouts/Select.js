import {Component} from "react";
import Styles from "../Assets/Styles/Select.module.css"
import {Query} from "@apollo/react-components"
import {gql} from '@apollo/client';
import {connect} from 'react-redux';
import {changeValue} from '../Store/Actions/selectActions';


const mapStateToProps = state => {
    return {
        value: state.selects.value,
        
    }
}


function mapDispatchToProps(dispatch) {
    return {

        changeValue: value => dispatch(changeValue(value))
    }
}


class Select extends Component {
    
  
    state = {
        isOpenSelect: false,
        
    }

    listToggle = (option) => {
      this.props.changeValue(option)
      this.setState({isOpenSelect: false})
    }
    
    toggling = () => {

        this.setState(prevState => ({isOpenSelect: !prevState.isOpenSelect}));
      
    }



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
            <>
                 <Query query={GET_CURRENCIES} >
        {({ loading, error, data }) => {
        
        if (error) return `Error!! ${error.message}`;
        
       
        return (
        
            <div>
              <div  onClick={this.toggling} className={Styles.DropDownHeader}>
              {this.props.value}
              </div>
              {this.state.isOpenSelect && (
                <div >
                  <ul className={Styles.DropDownList}>
                    {data.currencies.map(option => (
                      <li onClick={() => this.listToggle(option.symbol)} key={option.label} className={Styles.ListItem}>
                        {option.symbol} {option.label}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
        )}}
           </Query>
                    
          </>
          
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Select)