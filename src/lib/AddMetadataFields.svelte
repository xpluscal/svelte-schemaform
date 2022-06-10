<script>
  import Button from '$lib/components/Button.svelte';
  import {convertArrayToObject} from '$lib/helpers';
  export let ipfsMetadata,schema, update;

  $: availableFields = Object.entries(schema).filter(([k, v]) => Object.keys(ipfsMetadata).indexOf(k) === -1);
  $: schemaObject = convertArrayToObject(availableFields,0)

  let form;

  const addField = () => {
    console.log(form.elements['field'].value);
    let key = form.elements['field'].value
    ipfsMetadata[key] = schemaObject[key];
    update(ipfsMetadata);
  }
</script>

<div class="rounded-xl p-6 bg-white dark:bg-slate-500 mt-4 mb-10">
  <h2 class="mb-4 font-bold text-2xl">Add Field</h2>
  <form bind:this={form} class="flex" on:submit|preventDefault={addField}>
    {#if availableFields.length > 0}
    <select name="field" class="p-2 rounded-md bg-slate-50 dark:bg-slate-700">
      <option value={-1}>
        Select Field To Add
      </option>
      {#each availableFields as [key,field], index}
        <option value={key}>
          {key}
        </option>
      {/each}
    </select>
    <div class="grow ml-2">
      <Button>Add</Button>
    </div>
    {:else}
      No Fields To Add
    {/if}
  </form>
</div>
