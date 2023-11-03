import type { PageServerLoad } from "./$types"
import type { Workshop } from "$lib/graphql/types"
import { GetWorkshopIdBySlugDocument } from "$lib/graphql/types"
import { graphQLClient } from "$lib/graphql/graphql-client"
import { error } from "@sveltejs/kit"

export const load: PageServerLoad = async ({ params }) => {

  const getWorkshopIdBySlugQuery = await graphQLClient.request(GetWorkshopIdBySlugDocument, {
    slug: params.slug
  })

  const workshopID = getWorkshopIdBySlugQuery.workshops?.data.at(0)?.id

  if (workshopID !== null && workshopID !== undefined) {
    return {
      workshopID,
      workshop: {
        title: "Workshop",
        slug: params.slug,
        duration: 30
      } as Workshop
    }
  }

  throw error(404, "The page was not found or moved.")
}