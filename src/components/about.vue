<template>
	<a id="about" />
	<div class="about">
		<h1>Hi, I'm <span class="name">Théophyl</span></h1>
		<div class="photoInfo">
			<div class="imagePerso">
				<img src="@/assets/images/proCircleBlur.png" alt="Photo de moi" />
			</div>
			<div class="info">
				<p>
					Welcome to my portfolio!
					<br />
					<br />
					I am currently a Computer Science student at the Université de Bordeaux, where I am gaining the
					knowledge and skills required to excel in this field.
					<br />
					<br />
					Ever since I was 10 years old, programming has been my passion. I am fascinated by the idea of
					creating
					something from scratch using code, and I knew from a young age that I wanted to pursue a career in
					this
					field. Over the years, I have continued to develop my skills and knowledge, constantly seeking out
					new
					technologies and programming languages to learn.
					<br />
					<br />
					As a student, I have had the opportunity to work on many exciting projects. These projects have not
					only
					allowed me to put my skills into practice, but they have also given me the chance to work with other
					students and professionals in the field. For more details, please check out the <a
						href="#projects">projects</a> section of my website.
					<br />
					<br />
					Thank you for taking the time to learn more about me. I hope to have the opportunity to work with
					you in
					the future.
				</p>
			</div>
		</div>
	</div>
	<div class="transi">
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.info {
	width: 50%;
	font-family: montserrat_regular;
}

.transi {
	height: 8vw;
	width: 100%;
	margin: -4vw 0 -4vw 0;
	background-color: rgb(29, 29, 29);
	transform: rotate(-4deg) scale(1.2, 1);
	z-index: 1;
}

.about {
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 20px;
	padding: 4vw 0 4vw 0;
	margin-bottom: 4vw;
	font-family: montserrat_semi_bold;
}

.photoInfo {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: row;
	width: 100vw;
}

.about {
	color: white;
}

.about a {
	color: rgb(110, 161, 255);
	text-decoration: none;
}

.imagePerso {
	width: 30%;
	border-radius: 50%;
	overflow: hidden;
}

.imagePerso img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

@media screen and (max-width: 1000px) {
	.about {
		padding: 4vw 0 4vw 0;
		height: auto;
	}

	.photoInfo {
		flex-direction: column;
	}

	.imagePerso {
		width: 30%;
	}

	.info {
		width: 80%;
	}

}
</style>