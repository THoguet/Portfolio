<template>
	<a id="skills" />
	<div class="bg">
		<h1 class="title"> What are my skills ?</h1>
		<div class="tab" v-if="!mobile">
			<div class="categories">
				<div class="category" v-for="cat in allskills.map((e) => e.category)">
					<a @click="selectedCat = cat" :class="{ active: selectedCat === cat }">
						<span>{{ cat }}</span>
					</a>
				</div>
			</div>
			<skillCat :skills="getSkillsByCat(selectedCat)" />
		</div>
		<div v-else class="allSkills">
			<div class="skillsCat" v-for="cat in allCat">
				<h1 class="titleCat"> {{ cat }} </h1>
				<skillCat :skills="getSkillsByCat(cat)" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import type { skillsByCat } from '@/assets/ts/skills';
import skillCat from './skillCat.vue';
</script>
<script lang="ts">

export default defineComponent({
	name: 'skills',
	created() {
		window.addEventListener("resize", this.isMobileView);
		this.isMobileView();
		fetch("/ressources/json/skills.json")
			.then(response => response.json())
			.then((data: skillsByCat[]) => {
				this.allskills = data;
				this.selectedCat = this.allskills[0].category;
				this.allCat = this.allskills.map((e) => e.category);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	},
	beforeUnmount() {
		window.removeEventListener("resize", this.isMobileView);
	},
	data() {
		return {
			allskills: [] as skillsByCat[],
			selectedCat: "",
			allCat: [] as string[],
			mobile: true
		};
	},
	methods: {
		getSkillsByCat(cat: string) {
			const ret = this.allskills.find((e) => e.category === cat);
			if (ret === undefined) {
				return [];
			}
			return ret.skills;
		},
		isMobileView() {
			this.mobile = window.innerWidth < 930;
		},
	}
});

</script>
<style scoped>
.bg {
	min-height: 100vh;
	padding-bottom: 2vh;
	background-color: var(--white);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

.title {
	text-align: center;
	font-size: 2.5em;
	font-weight: 600;
	color: var(--black);
	margin-bottom: 1em;
}

.allSkills {
	text-align: center;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 2em;
	padding: 2vh;
}

.titleCat {
	font-size: 2em;
	font-weight: 600;
	color: var(--lightblue);
	margin: 0;
}

.skillsCat {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

.tab {
	width: 80vw;
	min-height: 80vh;
	display: flex;
	align-items: stretch;
	justify-content: flex-start;
	border-radius: 15px;
	filter: drop-shadow(0px 0px 10px rgba(28, 28, 51, 0.15));
}

.categories {
	width: 20vw;
	min-height: 100%;
	display: flex;
	align-content: center;
	justify-content: center;
	flex-direction: column;
	font-family: montserrat_semi_bold;
}

.category {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}

.category a {
	width: 100%;
	min-height: 100%;
	display: flex;
	padding: 1vw;
	align-items: center;
	justify-content: center;
	border-radius: 15px 0 0 15px;
	font-size: 1vw;
	margin-right: -20px;
}

a span {
	font-size: large;
}

a:hover span {
	font-weight: bold;
}

.category a.active {
	background-color: white;
}
</style>