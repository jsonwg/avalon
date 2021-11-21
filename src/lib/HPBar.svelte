<script>
  import { Bar } from '$lib';
  import { hp } from '$lib/stores';
  $: flatHp = Math.floor($hp);
</script>

<Bar src="heart.svg" alt="Hitpoints icon">
  <div
    class="h-4 bg-gradient-to-b from-rose-700 to-pink-600 shadow-glow-r rounded-md"
    style="width:{$hp}%"
    slot="bar"
  />
  <p class="relative text-4xl text-pink-600 text-shadow-r" slot="stats">
    {#if flatHp < 10}&nbsp&nbsp{flatHp} / 100
    {:else if flatHp < 100}&nbsp{flatHp} / 100
    {:else}{flatHp} / 100{/if}
  </p>
</Bar>
