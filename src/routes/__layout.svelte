<script>
  import '../app.css';
  import TextContainer from '$lib/TextContainer.svelte';

  // Holds all the valid character inputs.
  const keys = new Set('abcdefghijklmnopqrstuvwxyz`1234567890-=~!@#$%^&*()_+[]\\;\',./{}|:"<>?');
  let string = '';

  function handleKeydown(event) {
    const key = event.key;
    const ctrl = event.ctrlKey;

    // If the backspace is pressed, check if CTRL is also pressed. If CTRL is also pressed then
    // then delete the entire last phrase by calling deletePhrase().
    if (key === 'Backspace') {
      string = string.slice(0, -1);
      if (ctrl) string = wordDelete();
    }

    // Only allow for one trailing space at the end of the string.
    if (key === ' ') string += string.at(-1) === ' ' ? '' : key;

    if (keys.has(key.toLowerCase())) string += key;
  }

  // Calculate the last phrase by finding the last space in the string. If there is no space
  // found, then the entire string is cleared.
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
