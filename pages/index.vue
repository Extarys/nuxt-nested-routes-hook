<template>
	<div>
		<NuxtLink to="/user">Go to main users</NuxtLink>
		<NuxtLink to="/user/123">Go to specific user</NuxtLink>
		<NuxtLink to="/tasks">Go to all tasks</NuxtLink>
		<NuxtLink to="/tasks/456">Go to a specific task</NuxtLink>
		<hr />
		<NuxtLink to="/user/123/tasks/456">Go to a specific task for a specific user</NuxtLink>
		<p>Should display <code>[taskid]/index.vue</code> inside <code>/user/[userid].vue</code> or something</p>
	</div>
</template>
<style scoped>
div {
	display: flex;
	flex-direction: column;
	max-width: 300px;
}
a {
	border: 1px solid gray;
	padding: 5px;
	
}
a:hover {
	color: red;
}
</style>
