<script>
  import { Bar } from '$lib';
  import { mp } from '$lib/stores';
</script>

<Bar>
  <div
    class="h-6 bg-gradient-to-b from-sky-600 to-cyan-500 shadow-glow-b rounded-md"
    style="width:{$mp}%"
  />
</Bar>
