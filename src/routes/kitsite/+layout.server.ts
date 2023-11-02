import { STRAPI_API_URL, STRAPI_API_KEY } from "$env/static/private"

export const load = async () => {


  const categories: string[] = [STRAPI_API_URL, STRAPI_API_KEY]

  return {
    categories
  }

}