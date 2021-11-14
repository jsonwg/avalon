<script>
  import { fade, blur } from 'svelte/transition';
  export let string;
</script>

<div class="fixed bottom-[2vh] flex justify-center w-screen" on:click={foo}>
  <p
    class="text-xl md:text-xl lg:text-3xl text-white text-center overflow-ellipsis min-w-[50ch]
            max-w-[80ch] p-3 rounded-2xl bg-black after:filler"
  >
    {#each string.slice(Math.max(0, string.length - 80)) as char}
      <span in:fade={{ duration: 350 }}>{char}</span>
    {/each}
  </p>
</div>
