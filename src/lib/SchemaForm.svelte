<script lang="ts">
  import "./app.css";
  import {onMount} from 'svelte'
  import dayjs from 'dayjs';
  import utc from 'dayjs/plugin/utc.js'
  import timezone from 'dayjs/plugin/timezone.js'
  import SchemaField from '$lib/SchemaField.svelte';
  import Button from '$lib/Button.svelte';

  import {userTimezone} from '$lib/store'

  export let schema;
  export let formData;
  export let onSubmit;
  export let onChange;
  export let section = false;
  export let layout;

  export let config = {};

  const update = (key,value) => {
    formData[key] = value;
    if (onChange !== undefined) {
      onChange(formData);
    }
  }

  const submit = () => {
    onSubmit(formData);
  }

  onMount(() => {
    dayjs.extend(utc)
    dayjs.extend(timezone)

    $userTimezone = dayjs.tz.guess();
  });

  $: filteredData = (section) ? formData.filter((a) => a["section"] === section) : formData

</script>

<div class="{layout === "grid" ? "grid" : ""}">
  {#each Object.entries(filteredData) as [key,value]}
    <SchemaField {schema} {update} {key} {value} {config}/>
  {:else}
    No Data
  {/each}
  <div class="w-full flex items-end justify-end">
    <Button on:click={submit}>Submit</Button>
  </div>
</div>

<style media="screen">
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px 32px;
  grid-auto-flow: row;
}
</style>
