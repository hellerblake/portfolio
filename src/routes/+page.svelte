<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import PostList from '$lib/components/PostList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="flex flex-col md:w-2/3 w-full mx-auto">
	<Hero />
	<PostList posts={data.posts} />
</main>
