<script>
  import { goto } from '$app/navigation';
  import { string } from '$lib/stores';

  function navigate(event) {
    const key = event.key;
    if (key === 'Enter' && $string.trim().toLowerCase() === 'home') {
      string.set('');
      goto('/');
    }
  }
</script>

<svelte:window on:keydown={navigate} />
