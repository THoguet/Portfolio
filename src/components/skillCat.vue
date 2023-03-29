<template>
	<div class="skills">
		<div class="skill" v-for="s in skills">
			<a :href="getTechLink(s.name)" target="_blank">
				<img class="logo" :src="s.logo" :alt="s.name + ' logo'" />
				<span>{{ s.name }}</span>
			</a>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import type { skill } from '@/assets/ts/skills';
import { getTechLink } from '@/assets/ts/links';
</script>
<script lang="ts">

export default defineComponent({
	name: 'skillCat',
	props: {
		skills: {
			type: Array as () => skill[],
			required: true,
		},
	},
});

</script>

<style scoped>
.skills {
	padding: max(2vw, 2vh);
	width: 60vw;
	height: 100%;
	background-color: white;
	display: flex;
	align-content: flex-start;
	justify-content: space-evenly;
	flex-wrap: wrap;
	border-radius: 15px;
}

.skill {
	padding: 1vw;
	width: max(150px, 33%);
	/* max-height: 20%; */
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
}

.skill a span {
	font-size: 16px;
}

.skill a {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
	text-decoration: none;
	color: var(--black);
	font-size: max(1vw, 1vh);
	border-radius: 15px;
}

.skill a:hover {
	transform: scale(1.1);
}

.logo {
	width: 50%;
}
</style>