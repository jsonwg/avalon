<script>
  import '../app.css';
  import { TextDisplay } from '$lib';
</script>

<svelte:head>
  <title>Machae</title>
  <meta name="description" content="Type like there's no tomorrow" />
</svelte:head>

<slot />
<TextDisplay />
