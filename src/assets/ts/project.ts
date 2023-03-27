export interface Project {
	name: string;
	year: number;
	type: string;
	desc: string;
	tech: string[];
	links: { [key: string]: string };
	logo: string;
	video: string;
}