<template>


	<div>
		<h1>User {{ route.params.userid }}</h1>
		<NuxtPage />
	</div>

</template>
<script setup lang="ts">
const route = useRoute()
</script>
