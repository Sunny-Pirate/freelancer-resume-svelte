import { GraphQLClient } from "graphql-request"
import { STRAPI_API_KEY } from "$env/static/private"
import { PUBLIC_STRAPI_API_URL } from "$env/static/public"

export const graphQLClient = new GraphQLClient(`${PUBLIC_STRAPI_API_URL}/graphql`, {
  headers: {
    authorization: `Bearer ${STRAPI_API_KEY}`
  }
})