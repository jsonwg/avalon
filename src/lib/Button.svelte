<script>
  export let string;
</script>

<button class="text-white">
  {#each string as char}
    {char}
  {/each}
</button>
