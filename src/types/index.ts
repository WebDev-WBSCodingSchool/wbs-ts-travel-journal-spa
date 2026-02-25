export type DbEntry = {
	_id: string;
	createdAt: string;
	updatedAt?: string;
	__v: number;
};

export type PostInput = {
	title: string;
	author: string;
	image: string;
	content: string;
};

export type Post = DbEntry & PostInput;
