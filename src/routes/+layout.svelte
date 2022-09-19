<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
</script>

<svelte:head>
	<meta
		name="description"
		content="A primitive, neobrutalist  'white noise web app' aka. poor man's white-noise app."
	/>
	<meta name="keywords" content="sound effects, hairdryer, waterboiler, watertap" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Fira+Code&display=swap"
	/>
</svelte:head>
<Header />
<main class="grid grid-rows-player-layout">
	<slot />
</main>
<Footer />
