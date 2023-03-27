<template>
	<div class="project">
		<h1>{{ project.name }}</h1>
		<div class="info">
			<p>{{ project.desc }}</p>
			<a :href="project.links['title']" target="_blank">
				<!-- autoplay  -->
				<video autoplay loop muted>
					<source :src="project.video" type="video/mp4" />
				</video>
			</a>
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
});

</script>

<style scoped>
.project {
	width: 100vw;
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
	z-index: 10;
}

video {
	width: 100%;
	height: 100%;
}

a {
	width: 100%;
	height: 100%;
	border-radius: 15px;
	overflow: hidden;
	z-index: 1;
}

.info {
	width: 90%;
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
}

/* if the screen is wider than tall */
@media screen and (orientation: landscape) {
	.info p {
		margin-right: -35px;
		height: 90%;
	}

	.info {
		flex-direction: row;
	}
}

/* if the screen is taller than wide */
@media screen and (orientation: portrait) {
	.info p {
		margin-bottom: -35px;
		width: 90%;
	}

	.info {
		flex-direction: column;
	}
}
</style>