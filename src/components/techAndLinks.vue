<template>
	<div class="techLinks">
		<div class="techs" v-if="onlyTechsData">
			<a v-for="tech in project.tech" :href="getTechLink(tech)">{{ tech }}</a>
		</div>
		<div class="images" v-if="onlyImageData">
			<a class="tooltip" v-if="'github' in project.links" :href="project.links['github']" target="_blank"
				title="See the code">
				<img src="/ressources/logos/github.svg" alt="GitHub" class="icon" />
			</a>
			<a class="tooltip" v-if="'release' in project.links" :href="project.links['release']" target="_blank"
				title="Test the program">
				<img src="/ressources/images/check.svg" alt="Release" class="icon" />
			</a>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import type { Project } from '@/assets/ts/project';
import { getTechLink } from '@/assets/ts/links';
</script>
<script lang="ts">
export default defineComponent({
	name: 'techAndLinks',
	props: {
		project: {
			type: Object as () => Project,
			required: true,
		},
		onlyImage: {
			type: Boolean,
		},
		onlyTechs: {
			type: Boolean,
		},
	},
	created() {
		if (this.onlyImage) {
			this.onlyTechsData = true;
		}
		if (this.onlyTechs) {
			this.onlyImageData = true;
		}
	},
	data() {
		return {
			onlyImageData: false,
			onlyTechsData: false,
		};
	},
});
</script>

<style scoped>
.techLinks {
	width: calc(100% - 35px);
	display: flex;
	align-items: center;
	justify-content: space-between;
	align-self: flex-end;
	margin-right: 35px;
	padding: 0 1vw 0 1vw;
	flex-wrap: wrap;
	flex-direction: row;
}

.images {
	gap: 1vw;
	display: flex;
	align-items: center;
	justify-content: center;
}

.images img {
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
	border-radius: 50%;
	border: 1px solid var(--black);
}

.techs {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1vw;
	flex-wrap: wrap;
}

.techs a {
	color: var(--black);
	font-weight: bold;
	z-index: 10;
}

.tooltip {
	position: relative;
	display: inline-block;
	z-index: 10;
}

.tooltip:hover::before {
	content: attr(title);
	position: absolute;
	top: 100%;
	left: 50%;
	transform: translateX(-50%);
	padding: 5px;
	background-color: #333;
	color: #fff;
	font-size: 14px;
	white-space: nowrap;
	z-index: 10;
	border-radius: 15px;
}

@media (orientation: portrait) {
	.techLinks {
		flex-direction: column;
		margin-right: 0;
		gap: 1vh;
		width: 100%;
	}
}

@media (max-width: 1000px) {
	.techLinks {
		flex-direction: column;
		gap: 1vh;
	}
}

@media (max-height: 400px) {
	.techLinks {
		font-size: 0.8em;
	}
}
</style>