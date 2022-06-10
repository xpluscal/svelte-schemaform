<script>
  import Button from '$lib/Button.svelte';
  import {convertArrayToObject} from '$lib/helpers';
  export let fields,schema, update;

  $: console.log(fields);
  $: availableFields = Object.entries(schema).filter(([k, v]) => (fields!==undefined) ? Object.keys(fields).indexOf(k) === -1 : true);
  $: schemaObject = convertArrayToObject(availableFields,0)

  let form = {};

  const addField = () => {
    console.log(form.elements['field'].value);
    if (form.elements['field'].value === -1) return;
    let key = form.elements['field'].value;
    fields[key] = schemaObject[key];
    update(fields);
  }
</script>

<div class="rounded-xl mt-4 mb-10">
  <h2 class="mb-4 font-bold text-md">Add Field</h2>
  <form bind:this={form} class="flex" on:submit|preventDefault={addField}>
    {#if availableFields.length > 0}
    <select name="field" class="p-2 w-full rounded-md bg-slate-50 dark:bg-slate-700">
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
