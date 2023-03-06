export type content = {
	id: number;
	isActive: boolean;
	creatorId: number;
	modifierId: number;
	creationDate: string;
	modificationDate: string;
	creationTime: string;
	modificationTime: string;
	creator: string;
	modifier: string;
	title: string;
	description: string;
	contentTypeId: number;
	text: string;
	thumbnailUrl: string;
	isFeatured: boolean;
	videoUrl: string;
	imageList: [
		{
			id: number;
			isActive: boolean;
			creatorId: number;
			modifierId: number;
			creationDate: string;
			modificationDate: string;
			creationTime: string;
			modificationTime: string;
			creator: string;
			modifier: string;
			contentId: number;
			title: string;
			imageUrl: string;
		}
	];
};

export interface backendResponse<T> {
	data: T;
	isSuccess: boolean;
	message: string;
	pageCount: number;
	pageNumber: number;
	pageSize: number;
	statusCode: number;
	totalItemCount: number;
}

export type contentType = { title: string; id: number };
