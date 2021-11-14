<script>
  import { fade } from 'svelte/transition';
  import { string } from '$lib/stores';
</script>

<div class="fixed bottom-[2vh] flex justify-center w-screen">
  <p
    class="min-w-[50ch] max-w-[80ch] p-3 text-white text-center text-2xl lg:text-4xl bg-black
             rounded-2xl after:filler"
  >
    <!-- Display the entire string if there are less than 75 characters, otherwise display the-->
    <!-- last 75 characters of the string.-->
    {#each $string.slice(Math.max(0, $string.length - 75)) as char}
      <span in:fade={{ duration: 350 }}>{char}</span>
    {/each}
  </p>
</div>
