import { defineNuxtModule, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
	setup(options, nuxt) {
		const { resolve } = createResolver(import.meta.url);

		nuxt.hook('pages:extend', (pages) => {
			pages.push({
				name: 'user.userid',
				path: '/user/:userid()',
				file: resolve(__dirname, '../pages/user/[userid]/index.vue'),
				children: [
					{
						name: 'user.userid.tasks',
						path: '/user/:userid()/tasks',
						file: resolve(__dirname, '../pages/tasks/index.vue'),
						children: [
							{
								name: 'user.userid.tasks.taskid',
								path: '/user/:userid()/tasks/:taskid()',
								file: resolve(__dirname, '../pages/tasks/[taskid]/index.vue'),
							}
						]
					}
				]
			})
			console.log(pages)
		});
	}
})
