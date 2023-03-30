<script setup lang="ts">
import type { Engine } from "tsparticles-engine";
import { defineComponent } from 'vue';
import { loadFull } from "tsparticles";
import transi from "./components/transi.vue";
import about from "@/components/about.vue";
import timeline from "@/components/timeline.vue";
import skills from "@/components/skills.vue";
import contact from "./components/contact.vue";
const particlesInit = async (engine: Engine) => {
	await loadFull(engine);
};
</script>
<script lang="ts">

export default defineComponent({
	name: "App",
});

</script>

<template>
	<header>
		<Particles id="tsparticles" :particlesInit="particlesInit" url="/ressources/json/particles.json" />
		<nav>
			<img alt="Logo" src="/ressources/images/avatarTO.svg" class="logo" />
			<div class="links">
				<ol>
					<li><a href="#about">About</a></li>
					<li><a href="#projects">Projects</a></li>
					<li><a href="#skills">Skills</a></li>
					<li><a href="#contact">Contact</a></li>
				</ol>
			</div>
		</nav>
	</header>
	<main>
		<about />
		<transi color="var(--black)" spacer-before-color="#2c3260" spacer-after-color="var(--black)" />
		<timeline />
		<transi color="var(--black)" spacer-before-color="var(--black)" spacer-after-color="var(--white)" />
		<skills />
		<transi color="var(--white)" spacer-before-color="var(--white)" spacer-after-color="var(--black)" />
		<contact />
		<transi color="var(--black)" spacer-before-color="var(--black)" spacer-after-color="var(--white)" />
	</main>
	<footer>
		<div class="CCSource">
			<div class="CC">
				<p>© 2023 Théophyl Hoguet</p>
				<img class="littleIcon blackSvg" src="/ressources/logos/license.svg">
				<p> MIT License</p>
			</div>
			<div class="source">
				<a href="https://github.com/THoguet/Portfolio">
					<p>All the code is available on Github</p>
					<img src="/ressources/logos/github.svg" class="littleIcon" />
				</a>
			</div>
		</div>
		<div class="text">
			<p>Made by Théophyl Hoguet using Vue.js and TypeScript.<br> Hope you liked it !</p>
		</div>
	</footer>
</template>

<style scoped>
* {
	font-family: montserrat_semi_bold;

}

main {
	display: grid;
}

footer {
	background-color: var(--white);
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	padding: 1em;
	height: 30vh;
}

.CCSource {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	min-width: 75%;
}

.text {
	text-align: center;
}

.source a {
	flex-wrap: wrap;
	display: flex;
	align-items: center;
	flex-direction: row;
	color: var(--black);
	text-decoration: none;
}

.source a:hover p {
	font-weight: bold;
}

.CC {
	flex-wrap: wrap;
	display: flex;
	align-items: center;
	flex-direction: row;
}

.blackSvg {
	filter: invert(100%);
}

.littleIcon {
	margin: 0 0.5em 0 0.5em;
	width: 1.5em;
	height: 1.5em;
}

.links ol {
	list-style: none;
	display: flex;
	display: row;
	gap: 3vw;
	padding: 0;
}

.links a {
	color: var(--white);
	text-decoration: none;
	font-family: raleway_semi_bold;
	font-size: large;
}

.button {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background: rgb(110, 161, 255);
	border-radius: 10px;
}

nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 20vh;
	width: 100vw;
	padding: 0 3vw 0 3vw;
}

nav .logo {
	width: min(calc(100vw / 5), calc(50vh/5));
}


header {
	height: 100vh;
	width: 100vw;
	background: radial-gradient(ellipse at bottom, var(--black) 0%, #000000 100%)
}


main {
	width: 100vw;
	background: var(--black);
}
</style>
