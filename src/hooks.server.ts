import type { Handle } from "@sveltejs/kit"
import jwt from "jsonwebtoken"
import { STRAPI_JWT_SECRET } from "$env/static/private"
import { graphQLClient } from "$lib/graphql/graphql-client"
import { GetClientUserByIdDocument } from "$lib/graphql/types"

export const handle: Handle = async ({ event, resolve }) => {
  const authCookie = event.cookies.get('AuthorizationToken');

  if (authCookie) {
    // Remove Bearer prefix
    const token = authCookie.split(' ')[1];

    try {
      const jwtUser = jwt.verify(token, STRAPI_JWT_SECRET);
      if (typeof jwtUser === 'string') {
        throw new Error('Something went wrong');
      }

      const user = await graphQLClient.request(GetClientUserByIdDocument,{
        id: jwtUser.id
      })

      if (!user) {
        throw new Error('User not found');
      }

      const sessionUser = {
        id: user.usersPermissionsUser?.data?.id as string,
        email: user.usersPermissionsUser?.data?.attributes?.email as string,
        role: user.usersPermissionsUser?.data?.attributes?.role?.data?.attributes?.name as string
      };

      event.locals.user = sessionUser;
    } catch (error) {
      console.error(error);
    }
  }

  return await resolve(event);

}