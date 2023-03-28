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

const linksTech: { [key: string]: string } = {
	"angular": 'https://angular.io/',
	"react": 'https://reactjs.org/',
	"vue": 'https://vuejs.org/',
	"node": 'https://nodejs.org/',
	"express": 'https://expressjs.com/',
	"mongodb": 'https://www.mongodb.com/',
	"mysql": 'https://www.mysql.com/',
	"postgresql": 'https://www.postgresql.org/',
	"python": 'https://www.python.org/',
	"django": 'https://www.djangoproject.com/',
	"flask": 'https://flask.palletsprojects.com/',
	"java": 'https://www.java.com/',
	"spring": 'https://spring.io/',
	"springboot": 'https://spring.io/projects/spring-boot',
	"html": 'https://developer.mozilla.org/en-US/docs/Web/HTML',
	"css": 'https://developer.mozilla.org/en-US/docs/Web/CSS',
	"javascript": 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
	"typescript": 'https://www.typescriptlang.org/',
	"jquery": 'https://jquery.com/',
	"bootstrap": 'https://getbootstrap.com/',
	"materialize": 'https://materializecss.com/',
	"tailwind": 'https://tailwindcss.com/',
	"firebase": 'https://firebase.google.com/',
	"aws": 'https://aws.amazon.com/',
	"docker": 'https://www.docker.com/',
	"git": 'https://git-scm.com/',
	"linux": 'https://www.linux.org/',
	"windows": 'https://www.microsoft.com/en-us/windows',
	"macos": 'https://www.apple.com/macos/',
	"c": 'https://en.wikipedia.org/wiki/C_(programming_language)',
	"c++": 'https://en.wikipedia.org/wiki/C%2B%2B',
	"c#": 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)',
	"php": 'https://www.php.net/',
	"rust": 'https://www.rust-lang.org/',
	"swift": 'https://developer.apple.com/swift/',
	"objective-c": 'https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html',
	"dart": 'https://dart.dev/',
	"flutter": 'https://flutter.dev/',
	"unity": 'https://unity.com/',
	"unreal": 'https://www.unrealengine.com/',
	"ocaml": 'https://ocaml.org/',
	"sdl2": 'https://www.libsdl.org/',
	"opengl": 'https://www.opengl.org/',
	"vulkan": 'https://www.khronos.org/vulkan/',
	"directx": 'https://www.microsoft.com/en-us/directx',
	"opencl": 'https://www.khronos.org/opencl/',
	"nodejs": 'https://nodejs.org/',
	"javafx": 'https://openjfx.io/',
	"smfl": 'https://www.sfml-dev.org/',
	"unix": 'https://en.wikipedia.org/wiki/Unix',
}

export function getTechLink(tech: string): string {
	for (const key in linksTech) {
		if (tech.toLowerCase() === key) {
			return linksTech[key]
		}
	}
	return ''
}