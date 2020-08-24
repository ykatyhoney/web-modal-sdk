
import ApolloClient from 'apollo-boost';
import { isDevEnvironment } from './constants';

const uri = isDevEnvironment() ? `http://localhost:777/gql` : "https://api.luckylabs.io/gql";

export const createApolloClient = (apiKey: string | undefined) => new ApolloClient({
  uri,
  request: async operation => {
    if (isDevEnvironment()) {
      console.log("API key: ", apiKey);
    }
    operation.setContext({
      headers: {
        authorization: apiKey ? `Bearer ${apiKey}` : '',
      }
    });
  },
});
