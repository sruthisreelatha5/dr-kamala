export interface Tribute {
	author: string;
	relation: string;
	title: string;
	text: string;
}

export interface GalleryItem {
	caption: string;
	gradient: string;
}

export interface WallMessage {
	id: string;
	name: string;
	relation: string | null;
	text: string;
	created_at: string;
}
