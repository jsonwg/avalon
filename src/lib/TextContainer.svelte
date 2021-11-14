<script>
  import { fade } from 'svelte/transition';
  export let string;
</script>

<div class="fixed bottom-[2vh] flex justify-center w-screen">
  <p
    class="text-2xl md:text-2xl lg:text-3xl text-white text-center overflow-ellipsis w-4/5 p-3 
           rounded-2xl bg-black after:filler"
  >
    {#each string as char}
      <span transition:fade={{ duration: 500 }}>{char}</span>
    {/each}
  </p>
</div>
