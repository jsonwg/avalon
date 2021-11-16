<script>
  import Button from './Button.svelte';
  import { string } from '$lib/stores';
  import { goto } from '$app/navigation';

  const text = 'LOGIN';

  function navigate(event) {
    const key = event.key;
    if (key === 'Enter' && $string.trim().toLowerCase() === 'login') {
      string.set('');
      goto('/login');
    }
  }
</script>

<svelte:window on:keydown={navigate} />

<Button {text} callback={console.log('here')} />
