<script setup lang="ts">
import type { Engine } from "tsparticles-engine";
import { defineComponent } from 'vue';
import { loadFull } from "tsparticles";
const particlesInit = async (engine: Engine) => {
	await loadFull(engine);
};
</script>
<script lang="ts">

export default defineComponent({
	name: 'App',
	created() {
		window.addEventListener('scroll', this.handleScroll);
	},
	unmounted() {
		window.removeEventListener('scroll', this.handleScroll);
	},
	methods: {
		handleScroll(event: Event) {
			const scroll = window.scrollY;

		},
	}
});

</script>

<template>
	<header>
		<nav>
			<!-- <img alt="Logo" src="@/assets/images/logo.svg" class="logo" /> -->
		</nav>
		<Particles id="tsparticles" :particlesInit="particlesInit" url="particles.json" />
	</header>
	<main>
		<div class="about">
			<h1>Hi, I'm <span class="name">Théophyl</span></h1>
			<div class="bio">
				<div class="imagePerso">
					<img src="@/assets/images/proCircleBlur.png" alt="Photo de moi" />
				</div>
				<div class="info">
					<p>
						Hello and welcome to my portfolio! I am currently a student in Computer Science at the Université de
						Bordeaux.
						<br />
						<br />
						Ever since I was 10 years old, I have had a love for programming. The idea of being able to create
						something from scratch using code fascinated me, and I knew from a young age that I wanted to pursue
						a
						career in this field. Over the years, I have continued to develop my skills and knowledge,
						constantly
						seeking out new technologies and programming languages to learn.
						<br />
						<br />
						As a student, I have had the opportunity to work on many exciting projects. These projects have not
						only
						allowed me to put my skills into practice, but they have also given me the chance to work with other
						students and professionals in the field. (see <a href="#projects">projects</a> section of the
						website)
						<br />
						<br />
						Thank you for taking the time to learn more about me, and I hope to have the opportunity to work
						with
						you in the future.
					</p>
				</div>
			</div>
		</div>
		<div class="transi">
		</div>
		<div class="projects">
		</div>
	</main>
</template>

<style scoped>
nav {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 10vh;
	width: 100vw;
}

.projects {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: row;
	height: 50vh;
	width: 100vw;
	background: #0b1829;
}

.transi {
	height: 8vw;
	width: 120vw;
	margin: -4vw 0 -4vw 0;
	background-color: rgb(29, 29, 29);
	transform: rotate(-4deg) scale(1.2, 1);
	z-index: 1;
}

.logo {
	max-width: 100%;
	height: 400px;
}

.info {
	width: 50%;
}

header {
	height: 100vh;
	width: 100vw;
	background: radial-gradient(ellipse at bottom, #0b1829 0%, #000000 100%)
}

.about {
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 20px;
	padding: 4vw 0 4vw 0;
	margin-bottom: 4vw;
}

.bio {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: row;
	height: 50vh;
	width: 100vw;
}

.about {
	color: white;
}

.about a {
	color: rgb(110, 161, 255);
}

.imagePerso {
	width: 30%;
	border-radius: 50%;
	overflow: hidden;
}

.imagePerso img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

main {
	height: 100vh;
	width: 100vw;
	background: rgb(29, 29, 29);
}
</style>
