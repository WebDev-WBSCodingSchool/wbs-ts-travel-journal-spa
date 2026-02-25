import type { Post, PostInput } from '@/types';

const API_URL: string | undefined = import.meta.env
	.VITE_APP_TRAVEL_JOURNAL_API_URL;
if (!API_URL)
	throw new Error('API URL is required, are you missing a .env file?');
const baseURL = `${API_URL}/posts`;

export const getPosts = async (): Promise<Post[]> => {
	const res = await fetch(baseURL);
	if (!res.ok) {
		const errorData = await res.json();
		throw new Error(
			errorData?.error ?? 'An error occurred while fetching the posts'
		);
	}
	const data: Post[] = await res.json();
	return data;
};

export const getSinglePost = async (id: string): Promise<Post> => {
	const res = await fetch(`${baseURL}/${id}`);
	if (!res.ok) {
		const errorData = await res.json();
		throw new Error(
			errorData?.error ?? 'An error occurred while fetching the post'
		);
	}
	const data: Post = await res.json();
	return data;
};

export const createPost = async (formData: PostInput): Promise<Post> => {
	const res = await fetch(baseURL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(formData)
	});
	if (!res.ok) {
		const errorData = await res.json();
		throw new Error(errorData?.error ?? 'An error occurred creating the post');
	}
	const data: Post = await res.json();
	return data;
};
