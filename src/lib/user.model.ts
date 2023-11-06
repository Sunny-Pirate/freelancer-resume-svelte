import { graphQLClient } from "$lib/graphql/graphql-client"
import { LoginDocument } from "$lib/graphql/types"
import jwt from "jsonwebtoken"
import {STRAPI_JWT_SECRET} from "$env/static/private"

const loginUser = async (email: string, password: string) => {
  // Check if user exists
  const user = await graphQLClient.request(LoginDocument,{
    identifier: email,
    password: password
  });


  if (!user) {
    return {
      error: 'Invalid credentials'
    };
  }

  // Verify the password
  // const passwordIsValid = await bcrypt.compare(password, user.password);

  // if (!passwordIsValid) {
  //   return {
  //     error: 'Invalid credentials'
  //   };
  // }

  const jwtUser = {
    id: user.login.user.id,
    email: user.login.user.email as string,
    role: user.login.user.role?.name as string
  };



  const token = jwt.sign(jwtUser, STRAPI_JWT_SECRET, {
    expiresIn: '1d'
  });

  return { token };
};

export { loginUser };