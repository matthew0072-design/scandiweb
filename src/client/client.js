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
    uri: 'http://localhost:4000',
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

  
  