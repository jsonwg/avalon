<script>
  import '../app.css';
  import { TextContainer } from '$lib';
  import { string } from '$lib/stores';
  import { page } from '$app/stores';

  // Holds all the valid character inputs.
  const keys = new Set('abcdefghijklmnopqrstuvwxyz`1234567890-=~!@#$%^&*()_+[]\\;\',./{}|:"<>?');

  function handleKeydown(event) {
    const key = event.key;
    const ctrl = event.ctrlKey;

    console.log(key, $string);

    // If the backspace is pressed, check if CTRL is also pressed. If CTRL is also pressed then
    // then delete the entire last phrase by calling deletePhrase().
    if (key === 'Backspace') {
      string.set($string.slice(0, -1));
      if (ctrl) string.set(deletePhrase());
    }

    // Only allow for one trailing space at the end of the string.
    if (key === ' ') string.update(s => s + (s.at(-1) === ' ' ? '' : key));

    if (keys.has(key.toLowerCase())) string.update(s => s + key);
  }

  // Calculate the last phrase by finding the last space in the string. If there is no space
  // found, then the entire string is cleared.
  function deletePhrase() {
    const index = $string.lastIndexOf(' ');
    if (index === -1) return '';
    return $string.slice(0, index);
  }
</script>

<svelte:window on:keydown={handleKeydown} />
<svelte:head>
  <title>Avalon</title>
  <meta
    name="description"
    content="Fight an endless horde of monsters with nothing but your typing skills."
  />
</svelte:head>

{#key $page}
  <div class="h-screen bg-gray-900">
    <header class="flex justify-center gap-10 p-3 bg-black">
      <h1
        class="inline-block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-6xl 
             font-bold text-transparent"
      >
        Avalon
      </h1>
    </header>
    <slot />
    <TextContainer />
  </div>
{/key}
