<template>
	<div class="spacerBefore" />
	<div class="transi" />
	<div class="spacerAfter" />
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
</script>
<script lang="ts">
export default defineComponent({
	name: 'transi',
	props: {
		color: {
			type: String,
			required: true,
		},
		spacerBeforeColor: {
			type: String,
			required: true,
		},
		spacerAfterColor: {
			type: String,
			required: true,
		},
	},
});
</script>

<style scoped>
.transi {
	height: 8vw;
	width: 100%;
	margin: -4vw 0 -4vw 0;
	background-color: v-bind(color);
	transform: rotate(-4deg) scale(1.2, 1);
	z-index: 1;
}

.spacerBefore {
	height: 8vw;
	background-color: v-bind(spacerBeforeColor);
}

.spacerAfter {
	height: 8vw;
	background-color: v-bind(spacerAfterColor);
}
</style>