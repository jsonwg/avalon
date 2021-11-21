<script>
  import { Bar } from '$lib';
  import { hp } from '$lib/stores';
</script>

<Bar width={25}>
  <div
    class="h-6 bg-gradient-to-b from-rose-700 to-pink-700 shadow-glow-r rounded-md"
    style="width:{$hp}%"
  />
</Bar>
