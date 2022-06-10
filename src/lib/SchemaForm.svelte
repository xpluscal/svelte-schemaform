<script>
  import SchemaField from '$lib/components/form/SchemaField.svelte';
  import Button from '$lib/components/Button.svelte';
  export let schema;
  export let data;
  export let submit;
  export let section = false;
  export let layout;

  export let config;

  const update = (key,value) => {
    data[key] = value;
    submit(data);
  }

  $: filteredData = (section) ? data.filter((a) => a["section"] === section) : data

</script>

<div class="{layout === "grid" ? "grid" : ""}">
  {#each Object.entries(filteredData) as [key,value]}
    <SchemaField {update} {key} {value} {config}/>
  {:else}
    No Data
  {/each}
</div>

<style media="screen">
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px 32px;
  grid-auto-flow: row;
}
</style>
