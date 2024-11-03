import type { Handle } from '@sveltejs/kit';

console.log('I print only in npm run preview')

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	return response;
};