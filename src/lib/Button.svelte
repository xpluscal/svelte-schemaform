<script>
  export let variant;
  export let disabled = false;

  let baseStyle = `flex justify-between items-center px-4 py-2 rounded-lg ${disabled ? 'disabled opacity-10 grayscale ' : ''}`
</script>

{#if variant === undefined}
<button {disabled} on:click class={baseStyle+"bg-primary border-primary border-2 text-white"}><slot/></button>
{:else if variant === 'outlined'}
<button {disabled} on:click class={baseStyle+"border-primary border-2 text-primary dark:text-slate-100 hover:bg-primary hover:text-white"}><slot/></button>
{:else if variant === 'confirm'}
<button {disabled} on:click class={baseStyle+"bg-success border-success border-2 text-white hover:bg-success"}><slot/></button>
{:else if variant === 'danger'}
<button {disabled} on:click class={baseStyle+"bg-error border-error border-2 text-white hover:bg-error"}><slot/></button>
{:else}
{/if}
