<script setup lang="ts">
import type { Engine } from "tsparticles-engine";
import { defineComponent } from 'vue';
import { loadFull } from "tsparticles";
import transi from "./components/transi.vue";
import about from "@/components/about.vue";
import timeline from "@/components/timeline.vue";
import skills from "@/components/skills.vue";
const particlesInit = async (engine: Engine) => {
	await loadFull(engine);
};
</script>
<script lang="ts">

export default defineComponent({
	name: 'App',
});

</script>

<template>
	<header>
		<Particles id="tsparticles" :particlesInit="particlesInit" url="particles.json" />
		<nav>
			<img alt="Logo" src="@/assets/images/avatarTO.svg" class="logo" />
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
	</main>
</template>

<style scoped>
main {
	display: grid;
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
