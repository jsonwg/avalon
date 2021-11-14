<script>
  import '../app.css';
  import TextContainer from '$lib/TextContainer.svelte';

  const keys = new Set('abcdefghijklmnopqrstuvwxyz`1234567890-=~!@#$%^&*()_+[]\\;\',./{}|:"<>?');
  let string = '';

  function handleKeydown(event) {
    const key = event.key;
    const ctrl = event.ctrlKey;

    if (key === 'Backspace') {
      string = string.slice(0, -1);
      if (ctrl) string = wordDelete();
    }
    if (key === ' ') string += string.at(-1) === ' ' ? '' : key;
    if (keys.has(key.toLowerCase())) string += key;
  }

  function deletePhrase() {
    const index = string.lastIndexOf(' ');
    if (index === -1) return '';
    return string.slice(0, index);
  }
</script>

<svelte:window on:keydown={handleKeydown} />
<svelte:head>
  <title>Avalon</title>
</svelte:head>

<div class="h-screen bg-gray-900">
  <header class="flex justify-center p-3 bg-black">
    <h1
      class="inline-block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-6xl 
             font-bold text-transparent"
    >
      Avalon
    </h1>
  </header>
  <slot />
  <TextContainer {string} />
</div>
