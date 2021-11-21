<script>
  export let src;
  export let alt;
</script>

<div class="flex gap-6 items-center justify-center">
  <img {src} {alt} class="w-10" />
  <div class="block w-1/5 min-w-[300px] h-8 p-2 rounded-lg bg-black shadow-box">
    <slot name="bar" />
  </div>
  <slot name="stats" />
</div>
