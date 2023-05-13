<script lang="ts">
	import Card from '$lib/components/Card.svelte';
</script>

<Card direction="col" wipeSizes padding="p-4" gap="gap-6">
	<div class="rounded-lg sm:mx-8 lg:mx-28 lg:bg-white lg:p-8 xl:mx-48">
		<div class="mb-6 flex flex-col gap-y-2">
			<h1 class="text-2xl font-bold lg:text-3xl">
				<slot name="title">Essay Title</slot>
			</h1>
			<subtitle class="text-md italic text-gray-700 lg:text-lg xl:text-xl"
				><slot name="subtitle" /></subtitle
			>
		</div>
		<slot name="content" />
	</div>
</Card>
