<template>
	<div class="project">
		<div class="title">
			<h2 class="year">{{ project.year }}</h2>
			<a :href="project.links['title']">
				<h1>{{ project.name }} <img class="icon" v-if="icon(project.type) != ''" :src="icon(project.type)" /></h1>
			</a>
			<h2 class="type">{{ project.type }}</h2>
		</div>
		<div class="info">
			<div class="descTechLinksLandscape">
				<p class="desc">{{ project.desc }}</p>
				<techAndLinks class="landscape" :project="project" :portrait="false" />
			</div>
			<a :href="project.links['title']" target="_blank" class="videoPreview">
				<!-- autoplay  -->
				<video autoplay loop muted>
					<source :src="project.video" type="video/mp4" />
				</video>
			</a>
		</div>
		<techAndLinks class="portrait" :project="project" :portrait="true" />
	</div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import type { Project } from '@/assets/ts/project';
import techAndLinks from './techAndLinks.vue';
</script>

<script lang="ts">


export default defineComponent({
	name: 'project',
	props: {
		project: {
			type: Object as () => Project,
			required: true,
		},
		fullscreen: {
			type: Boolean,
			required: true,
		},
		color: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			height: '80vh',
		};
	},
	watch: {
		fullscreen: function (val) {
			if (val) {
				this.height = '100vh';
			} else {
				this.height = '80vh';
			}
		},
	},
	methods: {
		icon(input: string) {
			switch (input) {
				case 'School Project':
					return 'src/assets/images/school.svg';
				case 'Personal Project':
					return 'src/assets/images/perso.svg';
				default:
					return '';
			}
		}
	}
});

</script>

<style scoped>
.project {
	width: 100vw;
	height: v-bind(height);
	background-color: v-bind(color);
	padding: 1vw 1vh 1vw 1vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	transition: width 0.75s, height 0.75s;
}

.descTechLinksLandscape {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: min(2vh, 20px);
	max-width: 33%;
	max-height: 60%;
	flex-grow: 10;
}


.title {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 80%;
}

.title a {
	text-decoration: none;
}

:deep(a:hover:not(.videoPreview)) {
	filter: invert(100%);
}

.title h1 {
	transition: color 0.5s;
	color: black;
	font-size: 2.5em;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
}

.title h2 {
	color: black;
	font-size: 1.5em;
}

:deep(.icon) {
	max-width: 40px;
	max-height: 40px;
}

.desc {
	color: black;
	font-size: 1.5em;
	z-index: 10;
	background-color: gray;
	padding: max(1vw, 1vh);
	border-radius: 15px;
	text-align: center;
	overflow-y: auto;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
	-ms-overflow-style: none;
	scrollbar-width: none;
}

.desc::-webkit-scrollbar {
	display: none;
}

.videoPreview video {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.videoPreview {
	max-width: 100%;
	max-height: 100%;
	border-radius: 15px;
	overflow: hidden;
	z-index: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 10;
}

.info {
	padding: 2vw;
	max-width: 100%;
	max-height: 65%;
	font-family: montserrat_regular;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
}


/* if the screen is wider than tall */
@media screen and (orientation: landscape) {
	.info {
		flex-direction: row;
	}

	.descTechLinksLandscape {
		min-height: 90%;
		flex-basis: 50%;
		margin-right: -35px;
		flex-shrink: 3;
	}

	.desc {
		width: 100%;
	}

	.portrait {
		display: none;
	}
}

/* if the screen is taller than wide */
@media screen and (orientation: portrait) {
	.info {
		flex-direction: column;
	}

	.descTechLinksLandscape {
		min-width: 90%;
		margin-bottom: max(-2vh, -35px);
	}

	.title {
		flex-direction: column;
		align-items: center;
	}

	.title .type {
		order: -1;
	}

	.title .year {
		order: -2;
	}

	.landscape {
		display: none;
	}


	.desc {
		max-width: 90%;
	}
}

@media screen and (max-height: 600px) {
	.desc {
		font-size: 1em;
	}
}

@media screen and (max-height: 400px) {
	:deep(.icon) {
		max-width: 15px;
		max-height: 15px;
	}
}
</style>