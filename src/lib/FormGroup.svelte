<script>
  export let classes = "";
  export let label;
  export let isGroup
</script>

<div class="grid-el {classes} text-sm flex flex-col items-stretch">
  {#if label}
    <span class="p-2 pb-1 block {isGroup ? "font-bold mb-2" : ""}">{label}</span>
  {/if}
  <slot/>
</div>
