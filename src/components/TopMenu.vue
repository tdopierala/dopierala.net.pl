<template>
	<nav id="top-menu">
		<ul>
			<li v-for="item in menuItems" :key="item.id">
				<a :href="item.direction">{{ item.name }}</a>
			</li>
		</ul>
	</nav>
</template>

<script setup>
const menuItems = [
	{
		id: 1,
		name: 'Home',
		type: 'link',
		direction: '/',
	},
];
</script>