import { graphQLClient } from "$lib/graphql/graphql-client"
import type { Workshop, UploadFileEntityResponse, UploadFileRelationResponseCollection } from "$lib/graphql/types"
import { GetAllWorkshopsDocument } from "$lib/graphql/types"

export async function load() {

  const workshopsRes = await graphQLClient.request(GetAllWorkshopsDocument)

  const wsTotal: number = workshopsRes.workshops?.meta.pagination.total || 0

  // debugger

  const workshops = workshopsRes.workshops?.data.map((value) => ({
    title: value.attributes?.title || "",
    slug: value.attributes?.slug || "",
    coverImage: value.attributes?.coverImage as UploadFileEntityResponse,
    availableSlots: value.attributes?.availableSlots || -1,
    date: value.attributes?.date || "",
    price: value.attributes?.price || 128.64,
    duration: value.attributes?.duration || -1,
    location: value.attributes?.location || "",
    state: value.attributes?.state || "",
    updatedAt: value.attributes?.updatedAt || "",
    createdAt: value.attributes?.createdAt || "",
  } as Workshop))
  // debugger

  return {
    wsTotal,
    workshops
  }
}