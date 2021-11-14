<script>
  import Button from './Button.svelte';
  import { string } from '$lib/stores';
  import { goto } from '$app/navigation';

  const text = 'PLAY';

  function navigate(event) {
    const key = event.key;
    if (key === 'Enter' && $string.trim().toLowerCase() === 'play') {
      string.set('');
      goto('/game');
    }
  }
</script>

<svelte:window on:keydown={navigate} />

<Button {text} />
