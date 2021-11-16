<script>
  export let text;
  export let callback = function () {};
</script>

<button
  class="text-8xl text-white shadow-lg p-5 rounded-lg bg-black outline-none"
  on:click={callback}
>
  {#each text as char}
    <span>{char}</span>
  {/each}
</button>
