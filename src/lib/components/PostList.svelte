<script lang="ts">
	import type { Post } from '$lib/types';

	export let posts: Post[] = [];
	const dateFormatter = (date: string | Date) => {
		if (new Date(date).toString() == 'Invalid Date') return '';
		return new Date(date).toDateString();
	};
</script>

<section class="mt-4 w-full max-w-3xl mx-auto">
	{#each posts as post}
		<ul class="dark:text-white">
			<li class="dark:bg-gray-800 bg-gray-100 drop-shadow-md rounded-md my-4">
				<a href={post.slug}>
					<div class="flex flex-col lg:flex-row">
						<img
							src={post.thumbnail || '/logo.png'}
							alt=""
							class="m-2 rounded-md lg:max-h-48 self-center object-cover w-1/2 lg:w-1/5"
						/>
						<div class="flex flex-col justify-center my-2 mx-2 lg:w-4/5">
							<div class="flex flex-row items-center">
								<p class="text-3xl text-center lg:text-left mr-4">{post.title}</p>
								{#each post.categories as tag}
									<span class="mx-1 rounded-md border border-gray px-2">{tag}</span>
								{/each}
							</div>
							<p class="text-sm text-gray-500">{dateFormatter(post.date)}</p>
							<p class="mt-2 drop-shadow-md dark:text-gray-400 text-gray-500">
								{post.description}
							</p>
						</div>
					</div>
				</a>
			</li>
		</ul>
	{/each}
</section>
