<template>
	<div class="timeLineOuter bg" id="timeLineOuter">
		<div id="timelineSticky">
			<div class="timeline bg" id="timeline">
				<project v-for="(p, id) in projects" :project="p" :fullscreen="fullscreen"
					:color="COLORS[id % COLORS.length]" />
				<OtherProjects v-if="nbTotalProjects > nbMaxProjectsFullPage" v-for="(p, id) in splitOtherProjects()"
					:projects="p" :fullscreen="fullscreen" :colors="COLORS" :bg-color-id="nbMaxProjectsFullPage"
					:offset="id * nbOtherProjectsByPage" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import type { Project } from '@/assets/ts/project';
import project from './project.vue';
import OtherProjects from './otherProjects.vue';
</script>

<script lang="ts">

const enum STATUS {
	BEFOREVIEWPORT,
	INVIEWPORT,
	AFTERVIEWPORT,
}
const COLORS = ["#660708", "#a4161a", "#ba181b", "#e5383b", "#b1a7a6", "#d3d3d3", "#f5f3f4"]

const nbMaxProjectsFullPage = 5;

export default defineComponent({
	name: "timeline",
	created() {
		window.addEventListener("scroll", this.handleScroll);
		window.addEventListener("resize", this.handleResize);
		window.addEventListener("touchstart", this.handleTouchStart);
		window.addEventListener("touchend", this.handleTouchEnd);
		window.addEventListener("touchmove", this.handleTouchMove);
		this.handleResize();
		fetch("/ressources/json/projects.json")
			.then(response => response.json())
			.then((data: Project[]) => {
				this.nbTotalProjects = data.length;
				if (this.nbTotalProjects <= nbMaxProjectsFullPage) {
					this.projects = data;
					this.nbProjectPage = this.nbTotalProjects;
				}
				else {
					this.projects = data.slice(0, nbMaxProjectsFullPage);
					this.otherProjects = data.slice(nbMaxProjectsFullPage);
					this.calcNbPage();
				}
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	},
	beforeUnmount() {
		window.removeEventListener("resize", this.handleResize);
		window.removeEventListener("scroll", this.handleScroll);
		window.removeEventListener("touchstart", this.handleTouchStart);
		window.removeEventListener("touchend", this.handleTouchEnd);
		window.removeEventListener("touchmove", this.handleTouchMove);
	},
	data() {
		return {
			nbProjectPage: 0,
			nbTotalProjects: 0,
			nbOtherProjectsByPage: 0,
			projects: [] as Project[],
			otherProjects: [] as Project[],
			fullscreen: false,
			startX: 0,
			startY: 0,
		};
	},
	methods: {
		handleTouchStart(event: TouchEvent) {
			this.startX = event.touches[0].clientX;
			this.startY = event.touches[0].clientY;
		},
		handleTouchEnd(event: TouchEvent) {
			this.startX = 0;
			this.startY = 0;
		},
		handleTouchMove(event: TouchEvent) {
			const endX = event.changedTouches[0].clientX;
			const endY = event.changedTouches[0].clientY;
			const diffX = this.startX - endX;
			const diffY = this.startY - endY;
			if (Math.abs(diffX) > Math.abs(diffY)) {
				window.scrollBy({ top: -diffX, left: 0, behavior: 'smooth' });
			}
		},
		handleScroll(event: Event) {
			const timelineSticky = document.getElementById("timelineSticky");
			const timeline = document.getElementById("timeline");
			const timeLineOuter = document.getElementById("timeLineOuter");
			if (!timelineSticky || !timeline || !timeLineOuter)
				return;
			const rect = timeLineOuter.getBoundingClientRect();
			const inViewPort = this.isTimelineInViewport();
			switch (inViewPort) {
				case STATUS.BEFOREVIEWPORT:
					this.fullscreen = false;
					timelineSticky.style.position = "absolute";
					timelineSticky.style.top = "10vh";
					timelineSticky.style.bottom = "";
					timeline.style.transform = `translateX(0px)`;
					break;
				case STATUS.INVIEWPORT:
					this.fullscreen = true;
					timelineSticky.style.position = "fixed";
					timelineSticky.style.top = "10vh";
					timelineSticky.style.bottom = "10vh";
					// translate the timeline to the right by the amount of scroll
					timeline.style.transform = `translateX(${-rect.top}px)`;
					break;
				case STATUS.AFTERVIEWPORT:
					this.fullscreen = false;
					timelineSticky.style.position = "absolute";
					timelineSticky.style.top = "";
					timelineSticky.style.bottom = "10vh";
					const widthByProject = timeline.getBoundingClientRect().width / this.nbProjectPage;
					timeline.style.transform = `translateX(${widthByProject * (this.nbProjectPage - 1)}px)`;
					break;
			}
			timelineSticky.style.width = "100vw";
			timelineSticky.style.height = "80vh";
		},
		handleResize() {
			const w = window.innerWidth;
			const h = window.innerHeight;
			if (h <= 800 || w <= 800) {
				this.nbOtherProjectsByPage = 2;
			}
			else if (h <= 1100 || w <= 1100) {
				this.nbOtherProjectsByPage = 4;
			}
			else {
				this.nbOtherProjectsByPage = 6;
			}
			this.calcNbPage();
		},
		calcNbPage() {
			if (this.nbTotalProjects > nbMaxProjectsFullPage) {
				const otherProjects = this.nbTotalProjects - nbMaxProjectsFullPage;
				this.nbProjectPage = nbMaxProjectsFullPage + Math.ceil(otherProjects / this.nbOtherProjectsByPage);
			}
		},
		splitOtherProjects() {
			var result = [];
			for (var i = 0; i < this.otherProjects.length; i += this.nbOtherProjectsByPage) {
				result.push(this.otherProjects.slice(i, i + this.nbOtherProjectsByPage));
			}
			return result;
		},
		isTimelineInViewport(): STATUS {
			const timeLineOuter = document.getElementById("timeLineOuter");
			if (!timeLineOuter)
				return STATUS.BEFOREVIEWPORT;
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
.bg {
	background-color: var(--black);
}

.timeLineOuter {
	position: relative;
	width: 100vw;
	height: calc(100vw * v-bind(nbProjectPage - 1) + 100vh);
}

.timeline {
	width: calc(100vw*v-bind(nbProjectPage));
	height: 80Vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row-reverse;
	flex-wrap: nowrap;
	position: absolute;
	left: calc(-100vw*v-bind(nbProjectPage - 1));
	right: 0;
	will-change: transform;
	transition: transform 0.1s;
}

:deep(.icon) {
	max-width: 40px;
	max-height: 40px;
}
</style>