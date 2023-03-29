<template>
	<a id="contact" />
	<div class="bg">
		<h1>How to contact me?</h1>
		<div class="contact">
			<social v-for="s in socials" :social="s" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import social from './social.vue';
import type { Social } from '@/assets/ts/social';
</script>
<script lang="ts">

export default defineComponent({
	name: 'contact',
	data() {
		return {
			socials: [] as Social[]
		}
	},
	created() {
		fetch("src/assets/json/socials.json")
			.then(response => response.json())
			.then((data: Social[]) => {
				this.socials = data;
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
});

</script>

<style scoped>
.bg {
	height: 40vh;
	width: 100%;
	background-color: var(--black);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

.contact {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	gap: 5vw;
}

h1 {
	color: var(--white);
	margin-bottom: 1em;
	font-family: raleway_semi_bold;
}
</style>