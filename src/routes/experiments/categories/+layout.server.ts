import type { LayoutServerLoad } from './$types';
import { STRAPI_API_URL } from '$env/static/private';
export const load = (async () => {

    const API_URL = STRAPI_API_URL + '/api/categories'
    const getCategories = async () => {
        const res = await fetch(API_URL)
        return res.json()
    }

    return {
        getCategories
    };
}) satisfies LayoutServerLoad;