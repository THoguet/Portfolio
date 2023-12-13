<template>
	<div class="project">
		<div class="other" v-for="(p, id) in projects" :style="'background-color:' + colors[id % colors.length] + ';'">
			<techAndLinks :project="p" class="icons" :only-image="true" />
			<img :src="p.logo" alt="icon" class="logo icons" />
			<div class="infos">
				<a class="title" :href="p.links['title']">
					<h1>{{ p.name }}</h1>
				</a>
				<h2>{{ p.type }}</h2>
				<techAndLinks :project="p" class="links" :only-techs="true" />
			</div>
			<p>{{ p.desc }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import type { Project } from '@/assets/ts/project';
import techAndLinks from './techAndLinks.vue';
</script>
<script lang="ts">
export default defineComponent({
	name: 'otherProjects',
	props: {
		projects: {
			type: Array as () => Project[],
			required: true,
		},
		fullscreen: {
			type: Boolean,
			required: true,
		},
		colors: {
			type: Array as () => String[],
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
					return '/ressources/images/school.svg';
				case 'Personal Project':
					return '/ressources/images/perso.svg';
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
	background-color: gray;
	padding: 1vw 1vh 1vw 1vh;
	display: flex;
	align-items: stretch;
	justify-content: center;
	align-content: center;
	flex-direction: row;
	flex-wrap: wrap;
	transition: width 0.75s, height 0.75s;
	gap: max(1vw, 1vh);
}

.other {
	max-width: 40vw;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	flex-wrap: wrap;
	color: var(--black);
	border-radius: 10px;
	padding: min(1vh, 1vw);
	text-align: center;
}

.icons {
	position: absolute;
	top: 0;
	right: 0;
	padding-top: 0.2em;
	margin: 0;
	width: 100%;
}

.infos {
	max-width: 75%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	flex-wrap: wrap;
}

.title {
	text-decoration: none;
	text-align: start;
	line-height: 3rem;
	margin-top: 1em;
}

.title h1 {
	transition: color 0.5s;
	color: var(--black);
	font-size: 2.5em;
	display: flex;
	gap: 20px;
}

.links {
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0;
	width: 100%;
}

.logo {
	height: 50%;
	max-width: 25%;
	padding: min(1vh, 1vw);
}

@media (orientation: landscape) {
	@media (max-height: 600px) {
		.other {
			max-width: 23vw;
		}
	}

	@media (max-height: 900px) and (min-height: 600px) {
		.other {
			min-width: 27vw;
		}
	}

	@media (min-height: 900px) {
		.other {
			min-width: 20vw;
		}
	}
}
</style>