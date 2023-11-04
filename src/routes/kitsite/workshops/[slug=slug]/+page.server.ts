import type { PageServerLoad } from "./$types"
import type { Workshop, IdFilterInput } from "$lib/graphql/types"
import { GetWorkshopByIdDocument, GetWorkshopIdBySlugDocument } from "$lib/graphql/types"
import { graphQLClient } from "$lib/graphql/graphql-client"
import { error } from "@sveltejs/kit"

export const load: PageServerLoad = async ({ params }) => {

  const getWorkshopIdBySlugQuery = await graphQLClient.request(GetWorkshopIdBySlugDocument, {
    slug: params.slug
  });

  const workshopID = getWorkshopIdBySlugQuery.workshops?.data.at(0)?.id as string

  const getWorkshopByIdQuery = await graphQLClient.request(GetWorkshopByIdDocument,{
    id: workshopID
  })

  const workshop = getWorkshopByIdQuery.workshop?.data?.attributes as Workshop

  if (workshopID !== null && workshopID !== undefined) {
    return {
      workshopID,
      workshop
    }
  }

  throw error(404, "The page was not found or moved.")
}