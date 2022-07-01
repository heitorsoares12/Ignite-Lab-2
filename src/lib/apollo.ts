import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oqa7fj0w3d01xlb1zm5896/master',
    cache: new InMemoryCache()
})