<script>
  export let text;
</script>

<button class="text-8xl text-white shadow-lg p-5 rounded-lg bg-black outline-none">
  {#each text as char}
    <span>{char}</span>
  {/each}
</button>
