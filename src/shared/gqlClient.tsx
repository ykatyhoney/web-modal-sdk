import { ApolloClient, InMemoryCache, createHttpLink, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { isDevEnvironment } from './constants';

const API_URI_DEV = 'http://localhost:777/gql';
const API_URI_PROD = 'https://api.luckylabs.io/gql';

const getApiUri = (): string => {
  return isDevEnvironment() ? API_URI_DEV : API_URI_PROD;
};

const httpLink = createHttpLink({
  uri: getApiUri(),
});

/**
 * Creates a new Apollo Client instance with authentication.
 * @param apiKey - The API key for authentication (optional)
 * @returns Configured Apollo Client instance
 */
export const createApolloClient = (apiKey: string | undefined): ApolloClient<NormalizedCacheObject> => {
  const authLink = setContext((_, { headers }) => {
    // Only log API key in development for debugging
    if (isDevEnvironment() && apiKey) {
      // eslint-disable-next-line no-console
      console.debug('Apollo Client initialized with API key');
    }
    return {
      headers: {
        ...headers,
        authorization: apiKey ? `Bearer ${apiKey}` : '',
      }
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'all',
      },
      query: {
        errorPolicy: 'all',
      },
    },
  });
};
