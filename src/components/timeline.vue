<template>
	<div class="spacer bg" />
	<a id="projects" />
	<div class="timeLineOuter bg" id="timeLineOuter">
		<div id="timelineSticky">
			<div class="timeline bg" id="timeline">
				<project v-for="(p, id) in projects" :project="p" :fullscreen="fullscreen"
					:color="COLORS[id % COLORS.length]" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import type { Project } from '@/assets/ts/project';
import project from './project.vue';
</script>

<script lang="ts">

const enum STATUS {
	BEFOREVIEWPORT,
	INVIEWPORT,
	AFTERVIEWPORT,
}
const COLORS = ["#DDF9C1", "#F8DDA4", "#F9A03F", "#D45113", "#813405"]


export default defineComponent({
	name: 'timeline',
	created() {
		window.addEventListener('scroll', this.handleScroll);
		fetch("src/assets/json/projects.json")
			.then(response => response.json())
			.then((data: Project[]) => {
				this.projects = data;
				this.nbProjects = data.length;
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	},
	data() {
		return {
			nbProjects: 0,
			projects: [] as Project[],
			fullscreen: false,
			gap: "20vw"
		};
	},
	methods: {
		handleScroll(event: Event) {
			const timelineSticky = document.getElementById('timelineSticky');
			const timeline = document.getElementById('timeline');
			const timeLineOuter = document.getElementById('timeLineOuter');
			if (!timelineSticky || !timeline || !timeLineOuter) return;
			const rect = timeLineOuter.getBoundingClientRect();
			const inViewPort = this.isTimelineInViewport();
			switch (inViewPort) {
				case STATUS.BEFOREVIEWPORT:
					this.fullscreen = false
					this.gap = "20vw"
					timelineSticky.style.position = 'absolute';
					timelineSticky.style.top = '10vh';
					timelineSticky.style.bottom = '';
					timeline.style.transform = `translateX(0px)`;
					break;
				case STATUS.INVIEWPORT:
					this.fullscreen = true
					this.gap = ""
					timelineSticky.style.position = 'fixed';
					timelineSticky.style.top = '10vh';
					timelineSticky.style.bottom = '10vh';
					// translate the timeline to the right by the amount of scroll
					timeline.style.transform = `translateX(${-rect.top}px)`;
					break;
				case STATUS.AFTERVIEWPORT:
					this.fullscreen = false
					this.gap = "20vw"
					timelineSticky.style.position = 'absolute';
					timelineSticky.style.top = '';
					timelineSticky.style.bottom = '10vh';
					const widthByProject = timeline.getBoundingClientRect().width / this.nbProjects;
					timeline.style.transform = `translateX(${widthByProject * (this.nbProjects - 1)}px)`;
					break;
			}
			timelineSticky.style.width = '100vw';
			timelineSticky.style.height = '80vh';
		},
		isTimelineInViewport(): STATUS {
			const timeLineOuter = document.getElementById('timeLineOuter');
			if (!timeLineOuter) return STATUS.BEFOREVIEWPORT;
			const rect = timeLineOuter.getBoundingClientRect();
			if (rect.top < 0 && rect.bottom > window.innerHeight)
				return STATUS.INVIEWPORT;
			if (rect.top > 0)
				return STATUS.BEFOREVIEWPORT;
			return STATUS.AFTERVIEWPORT;
		},
	},
})
</script>

<style scoped>
.spacer {
	height: 20vh !important;
}

.bg {
	background-color: #292929;
}

.timeLineOuter {
	position: relative;
	width: 100vw;
	height: calc(100vw * v-bind(nbProjects - 1) + 100vh);
}

.timeline {
	width: calc(100vw*v-bind(nbProjects));
	height: 80Vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row-reverse;
	flex-wrap: nowrap;
	position: absolute;
	left: calc(-100vw*v-bind(nbProjects - 1));
	right: 0;
	will-change: transform;
	transition: transform 0.1s;
	gap: v-bind(gap)
}
</style>