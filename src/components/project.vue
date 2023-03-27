<template>
	<div class="project">
		<h1>{{ project.name }}</h1>
		<div class="info">
			<p>{{ project.desc }}</p>
			<video>
				<source :src="project.video" type="video/mp4" />
			</video>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import type { Project } from '@/assets/ts/project';
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
			width: '80vw',
			height: '80vh',
		};
	},
	watch: {
		fullscreen: function (val) {
			if (val) {
				this.width = '100vw';
				this.height = '100vh';
			} else {
				this.width = '80vw';
				this.height = '80vh';
			}
		},
	},
});

</script>

<style scoped>
.project {
	width: v-bind(width);
	height: v-bind(height);
	background-color: v-bind(color);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	transition: width 0.75s, height 0.75s;
}

h1 {
	color: black;
	font-size: 2.5em;
}

p {
	color: black;
	font-size: 1.5em;
}

video {
	width: 100%;
	height: 100%;
}

.info {
	width: 50%;
	font-family: montserrat_regular;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
}

.info p {
	background-color: gray;
	padding: 25px;
	border-radius: 15px;
	margin-right: -35px;
}
</style>