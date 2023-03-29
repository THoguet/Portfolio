<template>
	<div class="social">
		<a :href="social.link" target="_blank" rel="noopener noreferrer">
			<img :src="social.icon" :alt="social.platform" />
			<div class="hidden">
				<h3>{{ social.name }}</h3>
			</div>
		</a>
	</div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import type { Social } from '@/assets/ts/social';
</script>
<script lang="ts">
export default defineComponent({
	name: 'social',
	props: {
		social: {
			type: Object as () => Social,
			required: true,
		},
	},
});
</script>

<style scoped>
* {
	text-decoration: none;
	font-family: montserrat_semi_bold;
	color: var(--black);
	white-space: nowrap;
	transition: all 0.5s;
}

.social {
	border-radius: 15px;
	filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.15));
	overflow: hidden;
	background-color: var(--white);
}



.social img {
	width: max(5vw, 7vh);
	height: max(5vw, 7vh);
	object-fit: contain;
	padding: 15px;
}

.social .hidden {
	width: 0px;
	min-height: 100%;
	overflow: hidden;
}

.social a {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: row;
}

.social a:hover .hidden {
	width: 100%;
	min-height: 100%;
	border-radius: 15px;
	padding-right: 15px;
	transition: all 0.5s ease-in-out;
}
</style>