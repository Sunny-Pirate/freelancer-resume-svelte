import { graphQLClient } from "$lib/graphql/graphql-client"
import { GetAllWorkshopsDocument } from "$lib/graphql/types"
import type { Workshop, WorkshopEntity } from "$lib/graphql/types"

export async function load() {

  const workshopsRes = await graphQLClient.request(GetAllWorkshopsDocument)

  const wsTotal: number = workshopsRes.workshops?.meta.pagination.total || 0
  const workshops = workshopsRes.workshops?.data
    .map((value: WorkshopEntity, index) => {
      return {
        title: value.attributes?.title || "A title",
        slug: value.attributes?.slug || "",
      } as Workshop
    }) as Workshop[]

  return {
    wsTotal,
    workshops
  }
}