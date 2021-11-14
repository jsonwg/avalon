<script>
  import { fade } from 'svelte/transition';
  export let string;
</script>

<div class="fixed bottom-[2vh] flex justify-center w-screen">
  <p
    class="text-xl lg:text-3xl text-white text-center min-w-[50ch] max-w-[80ch] p-3 rounded-2xl 
         bg-black after:filler"
  >
    <!-- Display the entire string if there are less than 75 characters, otherwise display the-->
    <!-- last 75 characters of the string.-->
    {#each string.slice(Math.max(0, string.length - 75)) as char}
      <span in:fade={{ duration: 350 }}>{char}</span>
    {/each}
  </p>
</div>
