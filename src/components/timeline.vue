<template>
	<div class="spacer timeline" />
	<div class="timeline" id="timeline">
		<a id="projects" />
		<div id="animStart" />
		<div class="transform" id="transform">
			<div class="circle" />
			<div class="connector" />
			<div class="project">
				<div class="infos">
					<h1>titre</h1>
					<p>descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
					</p>
					<div class="button">
						<a href="test">test</a>
					</div>
				</div>
				<video>
					<source src="@/assets/videos/test.mp4" type="video/mp4" />
				</video>
			</div>
		</div>
	</div>
	<div id="animStop" />
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
</script>

<script lang="ts">
export default defineComponent({
	name: 'timeline',
	created() {
		window.addEventListener('scroll', this.handleScroll);
	},
	data() {
		return {
		};
	},
	methods: {
		handleScroll(event: Event) {
			if (this.activateAnimation()) {
				const timeline = document.getElementById('timeline')!.getBoundingClientRect();
				if (!timeline) return;
				const position = timeline.top;
				document.getElementById('transform')?.setAttribute('style', `transform: translateY(calc(-50vh + ${-position}px)) rotate(${-position}deg);`);
			}
			// else {
			// 	document.getElementById('transform')?.setAttribute('style', `transform: translateY(-50vh) rotate(0deg);`);
			// }
		},
		activateAnimation() {
			let start = document.getElementById('animStart')?.getBoundingClientRect();
			let stop = document.getElementById('animStop')?.getBoundingClientRect();
			if (!start || !stop) return false;
			if (stop.top >= 0 && stop.bottom <= (window.innerHeight || document.documentElement.clientHeight))
				return false;
			else {
				if (start.top >= 0)
					return false;
				else
					return true;
			}
		},
	},
})
</script>

<style scoped>
.spacer {
	height: 20vh !important;
}

.timeline {
	background: linear-gradient(to right, #000000, #292929, #000000);
	height: 1000vh;
}

.transform {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	height: 200vh;
	width: 200vw;
	margin-left: -100vw;
	transform: translateY(-50vh);
	margin-bottom: -100vh;
}

.circle {
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background-color: transparent;
	position: absolute;
	z-index: 1;
	border: 5vw groove white;
}

.project {
	padding: 15px;
	display: flex;
	align-items: center;
	justify-content: left;
	flex-direction: column;
	border: 5px solid white;
	border-radius: 25px;
	width: 70vw;
	/* margin: 10vh 5vw 0 15vw; */
	filter: drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.5));
}

.connector {
	margin-left: 110vw;
	height: 5px;
	width: 10vw;
	background-color: rgb(255, 255, 255);
	z-index: 3;
}

video {
	width: 100%;
	height: 100%;
	z-index: 1;
	overflow: hidden;
	border-radius: 15px;
}

.project .infos {
	width: 80%;
	z-index: 2;
}

/* Styles for screens taller than wide */
@media screen and (orientation: portrait) {
	.circle {
		width: 30vw;
		height: 30vw;
	}

	.infos {
		background-color: rgb(29, 27, 41);
		margin-bottom: -25px;
		border-radius: 25px;
		padding: 25px;
		word-break: break-all;
	}
}

/* Styles for screens wider than tall */
@media screen and (orientation: landscape) {
	.circle {
		width: 80vh;
		height: 80vh;
	}
}
</style>