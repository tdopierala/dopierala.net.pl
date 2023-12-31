<script setup lang="ts">
import { RouterView } from 'vue-router';
import MainHeader from '@/components/MainHeader.vue';
</script>

<template>
	<MainHeader />
	<main>
		<RouterView />
	</main>
</template>

<style lang="scss">
header {
	line-height: 1.5;
	max-height: 100vh;
	padding: 50px 0;
	display: flex;
	flex-direction: column;

	.maintitle {
		color: var(--color-heading);
		font-size: 3rem;
		font-weight: 700;
		letter-spacing: -0.03em;

		.lastname {
			color: var(--color-green);
		}
	}

	.subtitle {
		color: var(--color-heading);
		font-size: 1rem;
		font-weight: 700;
	}

	.icon-green {
		color: var(--color-green);
	}
}

main {
	padding: 50px 0;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

nav {
	width: 100%;
	font-size: 12px;
	text-align: center;
	margin-top: 2rem;
}

nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
	border: 0;
}

@media (min-width: 1024px) {
	header {
		display: flex;
		/* place-items: center; */
		padding-right: calc(var(--section-gap) / 2);
	}

	.logo {
		margin: 0 2rem 0 0;
	}

	header .wrapper {
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
	}

	nav {
		text-align: left;
		margin-left: -1rem;
		font-size: 1rem;

		padding: 1rem 0;
		margin-top: 1rem;
	}
}
</style>
