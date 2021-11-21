<script>
  import { Bar } from '$lib';
  import { hp } from '$lib/stores';
  import colors from 'tailwindcss/colors.js';
</script>

<div class="flex gap-5 items-center">
  <svg
    aria-hidden="true"
    focusable="false"
    class="h-16"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    ><path
      fill={colors.rose[700]}
      d="M472.1 270.5l-193.1 199.7c-12.64 13.07-33.27 13.08-45.91 .0107l-193.2-199.7C-16.21 212.5-13.1 116.7 49.04 62.86C103.3 15.88 186.4 24.42 236.3 75.98l19.7 20.27l19.7-20.27c49.95-51.56 132.1-60.1 187.3-13.12C525.1 116.6 528.2 212.5 472.1 270.5z"
    />
  </svg>
  <Bar>
    <div
      class="h-6 bg-gradient-to-b from-rose-700 to-pink-600 shadow-glow-r rounded-md"
      style="width:{$hp}%"
    />
  </Bar>
</div>
