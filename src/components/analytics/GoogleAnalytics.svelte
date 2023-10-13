<script>
	import { inject } from '@vercel/analytics';

	inject({ mode: import.meta.env.MODE == 'development' ? 'development' : 'production' });
</script>

{#if import.meta.env.MODE != 'development'}
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-YB2VVTMFKW"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-YB2VVTMFKW');
	</script>
{:else}
<div>
	<script>
		console.log('Google Analytics is disabled in development mode.');
	</script>
</div>
{/if}