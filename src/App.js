import {Component} from 'react';
import Home from './Components/Home';
import Clothes from './Components/Clothes';
import {gql} from '@apollo/client';
import Tech from './Components/Tech'
import Cart from './Components/Cart'
import Product from './Components/Product';
import withRouter from './Layouts/WithRouter'

import {
  
  Routes,
  Route,
} from "react-router-dom";
import './app.css'

class App extends Component {

  render() {
    const CATEGORIES = gql`
        query getCategories($input:CategoryInput){
            category(input:$input){
              name
              products{
                name,
                id,
                gallery,
                prices {
                  amount,
                  currency{
                    symbol
                  }
                }
              }
             
              
              
            }
          }
`;


    const PRODUCTS = gql`
    query eachProduct($id: String!){
      product(id:$id){
        id,
        name,
        description
        
      }
    }
    `;
          
    return (
      <div className="">
        <Routes>
        
        <Route path="/" element={<Home CATEGORIES={CATEGORIES} variables={{"input":{"title":"all"}}}/>}/>
          <Route path=":id" element={<Product PRODUCTS={PRODUCTS} variables={{"id":"id"}}  />} />
        
        
        <Route path="cloth" element={<Clothes CATEGORIES={CATEGORIES} variables={{"input":{"title":"clothes"}}}/>}/>
      
          <Route path="tech" element={<Tech CATEGORIES={CATEGORIES} variables={{"input":{"title":"tech"}}} />} />
          <Route path="cart" element={<Cart/>} />

          <Route
      path="*"
      element={
        <main style={{ padding: "5rem", color:"red", textAlign:"center" }}>
          <h1>There's nothing here!</h1>
        </main>
      }
    />
          
        
    
    </Routes>
      
                </div>
    )

  }
  
}

export default withRouter(App);
