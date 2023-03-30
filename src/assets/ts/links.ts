export const links: { [key: string]: string } = {
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
	"bash": 'https://www.gnu.org/software/bash/',
	"powershell": 'https://docs.microsoft.com/en-us/powershell/',
	"zsh": 'https://www.zsh.org/',
	"vim": 'https://www.vim.org/',
	"emacs": 'https://www.gnu.org/software/emacs/',
	"neovim": 'https://neovim.io/',
	"vscode": 'https://code.visualstudio.com/',
	"atom": 'https://atom.io/',
	"sublime": 'https://www.sublimetext.com/',
	"intellij": 'https://www.jetbrains.com/idea/',
	"eclipse": 'https://www.eclipse.org/',
	"pycharm": 'https://www.jetbrains.com/pycharm/',
	"clion": 'https://www.jetbrains.com/clion/',
	"androidstudio": 'https://developer.android.com/studio',
	"xcode": 'https://developer.apple.com/xcode/',
	"visualstudio": 'https://visualstudio.microsoft.com/',
	"qt": 'https://www.qt.io/',
	"blender": 'https://www.blender.org/',
	"maya": 'https://www.autodesk.com/products/maya/overview',
	"3dsmax": 'https://www.autodesk.com/products/3ds-max/overview',
	"photoshop": 'https://www.adobe.com/products/photoshop.html',
	"illustrator": 'https://www.adobe.com/products/illustrator.html',
	"aftereffects": 'https://www.adobe.com/products/aftereffects.html',
	"premiere": 'https://www.adobe.com/products/premiere.html',
	"audition": 'https://www.adobe.com/products/audition.html',
	"audacity": 'https://www.audacityteam.org/',
	"flstudio": 'https://www.image-line.com/flstudio/',
	"ableton": 'https://www.ableton.com/en/',
	"logic": 'https://www.apple.com/logic-pro/',
	"garageband": 'https://www.apple.com/garageband/',
	"coq": 'https://coq.inria.fr/',
	"cmake": 'https://cmake.org/',
	"make": 'https://www.gnu.org/software/make/',
	"github": 'https://github.com',
	"gitlab": 'https://gitlab.com/',
	"sql": 'https://en.wikipedia.org/wiki/SQL',
	"vite": 'https://vitejs.dev/',
	"gradle": 'https://gradle.org/',
	"maven": 'https://maven.apache.org/',
	"webassembly": 'https://webassembly.org/',
}

export function getTechLink(tech: string): string {
	for (const key in links) {
		if (tech.toLowerCase() === key) {
			return links[key]
		}
	}
	return ''
}