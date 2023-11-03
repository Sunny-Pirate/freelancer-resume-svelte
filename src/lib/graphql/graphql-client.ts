import { GraphQLClient } from "graphql-request"
import { STRAPI_API_KEY, STRAPI_API_URL } from "$env/static/private"

export const graphQLClient = new GraphQLClient(`${STRAPI_API_URL}/graphql`,{
  headers:{
    authorization: `Bearer ${STRAPI_API_KEY}`
  }
})