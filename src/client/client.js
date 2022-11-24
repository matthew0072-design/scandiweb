import {
    ApolloClient,
    InMemoryCache,
    makeVar,
    gql  
    
  } from "@apollo/client";


export const darkMode = makeVar(true)

export const GET_STATUS = gql`
    query statusAll {
      darkMode @client
    }

`

export  const client = new ApolloClient({
    uri:  'https://jealous-deer-suspenders.cyclic.app',
    connectToDevTools:true,
    cache: new InMemoryCache({
      typePolicies:{
        Query: {
          fields:{
            darkMode:{
              read() {
                return darkMode()
              }
            }
          }
        }
    }
  })
  });

  
  