import type { ParamMatcher } from '@sveltejs/kit';
export const match: ParamMatcher = (param) => {	return /^[a-z](-?[a-z])*$/.test(param);};