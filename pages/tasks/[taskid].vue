<template>
	<h1>Task {{ $route.params.taskid }}</h1>
	<NuxtPage />
</template>
<script setup lang="ts">
const route = useRoute()
</script>
