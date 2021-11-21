<script>
  import { Bar } from '$lib';
  import { rp } from '$lib/stores';
  $: flatRp = Math.floor($rp);
</script>

<Bar src="flask.svg" alt="Recovery points icon">
  <div
    class="h-4 bg-gradient-to-b from-sky-600 to-cyan-500 shadow-glow-b rounded-md"
    style="width:{$rp}%"
    slot="bar"
  />
  <p class="relative text-4xl text-cyan-500 text-shadow-b" slot="stats">
    {#if flatRp < 10}&nbsp&nbsp{flatRp} / 100
    {:else if flatRp < 100}&nbsp{flatRp} / 100
    {:else}{flatRp} / 100{/if}
  </p>
</Bar>
