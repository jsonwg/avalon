<script>
  import '../app.css';
  import { TextDisplay } from '$lib';
  import { blur } from 'svelte/transition';
</script>

<svelte:head>
  <title>Machae</title>
  <meta name="description" content="Type like there's no tomorrow" />
</svelte:head>

<div in:blur intro:true>
  <slot />
  <TextDisplay />
</div>
