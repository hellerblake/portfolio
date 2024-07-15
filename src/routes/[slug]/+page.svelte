<script lang="ts">
	export let data
  let formatedDate: string
  if(data.meta.date != void 0) formatedDate = (new Date(data.meta.date)).toDateString() 
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="all-prose mx-auto">
	<hgroup>
		<h1 class="text-5xl font-bold text-center">{data.meta.title}</h1>
		<span>Published @ {formatedDate}</span>
	</hgroup>

	<div class="tags mb-10">
		{#each data.meta.categories as category}
			<span class="rounded-full border-2 border-slate-600 py-1 px-2 mx-1 hover:text-primary hover:border-primary cursor-pointer">&num;{category}</span>
		{/each}
	</div>

	<div >
		<svelte:component this={data.content} />
	</div>
</article>
