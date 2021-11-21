<script>
  import { string } from '$lib/stores';

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
    return $string.slice(0, index + 1);
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="flex justify-center fixed bottom-[2vh] w-screen">
  <p
    class="min-w-[25ch] max-w-[80ch] p-3 text-white text-center text-2xl lg:text-4xl bg-black
           rounded-2xl after:filler shadow-box"
  >
    <!-- Display the entire string if there are less than 70 characters, otherwise display the-->
    <!-- last 70 characters of the string.-->
    {#each $string.slice(Math.max(0, $string.length - 70)) as char}
      <span>{char}</span>
    {/each}
  </p>
</div>
