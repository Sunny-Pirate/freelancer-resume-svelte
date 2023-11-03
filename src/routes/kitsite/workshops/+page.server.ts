import { graphQLClient } from "$lib/graphql/graphql-client"
import { GetAllWorkshopsDocument } from "$lib/graphql/types"
import type { Workshop, WorkshopEntity } from "$lib/graphql/types"
import { invalidate } from "$app/navigation"

export async function load() {

  const workshopsRes = await graphQLClient.request(GetAllWorkshopsDocument)

  const wsTotal: number = workshopsRes.workshops?.meta.pagination.total || 0

  const workshops = workshopsRes.workshops?.data.map((value: WorkshopEntity, index: number) => {
    return {
      title: value.attributes?.title || "A title",
      slug: value.attributes?.slug || "",
      date: value.attributes?.date || "",
      agenda: value.attributes?.agenda || "",
      availableSlots: value.attributes?.availableSlots || 0,
      participants: value.attributes?.participants || 0,
      coverImage: value.attributes?.coverImage || ""
    } as Workshop
  }) as Workshop[]

  return {
    wsTotal,
    workshops
  }
}