import { graphQLClient } from "$lib/graphql/graphql-client"
import { GetWebsiteHomepageDocument } from "$lib/graphql/types"

export async function load() {

  const homepageRes = await graphQLClient.request(GetWebsiteHomepageDocument)

  const homepageEntity = homepageRes.webpages?.data.at(0) || null

  const title = homepageEntity?.attributes?.title || "DreamLab"
  const content = homepageEntity?.attributes?.content || "There is no content"

  return { title, content }
}