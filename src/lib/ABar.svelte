<script>
  import { Bar } from '$lib';
  import { ap } from '$lib/stores';
  $: flatAp = Math.floor($ap);
</script>

<Bar src="fist.svg" alt="Attack points icon">
  <div
    class="h-4 bg-gradient-to-b from-orange-500 to-amber-500 shadow-glow-y rounded-md"
    style="width:{$ap}%"
    slot="bar"
  />
  <p class="relative text-4xl text-amber-500 text-shadow-y" slot="stats">
    {#if flatAp < 10}&nbsp&nbsp{flatAp} / 100
    {:else if flatAp < 100}&nbsp{flatAp} / 100
    {:else}{flatAp} / 100{/if}
  </p>
</Bar>
