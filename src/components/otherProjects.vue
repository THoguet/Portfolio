<template>
	<div class="project">
		<div class="other" v-for="(p, id) in projects"
			:style="'background-color:' + colors[(id + 1) % colors.length] + ';'">
			<div class="techInfosIcon">
				<techAndLinks :project="p" class="icons" :only-image="true"
					style="align-items: flex-start; justify-content: space-evenly;" />
				<div class="infosIcon">
					<div class="infos">
						<a class="title" :href="p.links['title']">
							<h1>{{ p.name }}</h1>
						</a>
						<h3>{{ p.type }}</h3>
						<techAndLinks :project="p" class="links" :only-techs="true" style="align-items: flex-start;" />
					</div>
					<img :src="p.logo" alt="icon" class="logo icons toBlack" />
				</div>
			</div>
			<p class="desc">{{ p.desc }}</p>
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
		bgColorId: {
			type: Number,
			required: true,
		},
	},
	data() {
		return {
			height: '80vh',
			bgColor: this.colors[this.bgColorId % this.colors.length],
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
	background-color: v-bind(bgColor);
	padding: 1vw 1vh 1vw 1vh;
	display: flex;
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
	justify-content: space-between;
	flex-direction: column;
	flex-wrap: nowrap;
	color: black;
	border-radius: 10px;
	border: 1px solid black;
	padding: min(1vh, 1vw);
	text-align: center;
	overflow-y: auto;
	height: 50%;
}

.desc {
	flex-grow: 1;
	text-align: justify;
	display: flex;
	align-items: center;
}

.infosIcon {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.icons {
	margin: 0;
	width: 100%;
}

.infos {
	max-width: 75%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

.title {
	text-decoration: none;
	text-align: start;
	line-height: 2.1rem;
}

.title h1 {
	transition: color 0.5s;
	color: black;
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