import { graphQLClient } from "$lib/graphql/graphql-client"
import { GetWebsiteHomepageDocument } from "$lib/graphql/types"
import type { PageServerLoadEvent } from "./$types"

export async function load(event: PageServerLoadEvent) {

  const homepageRes = await graphQLClient.request(GetWebsiteHomepageDocument)

  const homepageEntity = homepageRes.webpages?.data.at(0) || null

  const title: string = homepageEntity?.attributes?.title || "DreamLab"
  const content: string = homepageEntity?.attributes?.content || "There is no content"

  return { title, content }
}