<script>
  import SchemaField from '$lib/SchemaField.svelte';
  import IoIosRemoveCircle from 'svelte-icons/io/IoIosRemoveCircle.svelte'
  import Button from '$lib/Button.svelte';

  export let value;
  export let key;
  export let update;

  const add = () => {
    temp_value = [...temp_value,{trait_type: "", value: ""}];
  }

  const remove = (index) => {
    temp_value.splice(index,1);
    update(key,temp_value);
  }

  const update_object = (k,v,i) => {
    temp_value[i][k] = v;
    update(key,temp_value);
  }

  $: temp_value = value;

</script>

<div class="object_array">
  {#each temp_value as value, index}
  <div class="flex">
    <div class="grow flex justify-stretch items-center">
      {#each Object.entries(value) as [k,v]}
      <div class="grow mr-2">
        <SchemaField update={(k,v) => update_object(k,v,index)} key={k} value={v}/>
      </div>
      {/each}
    </div>
    <button on:click={() => remove(index)}><span class="ml-1 w-6 h-6 text-red-400 block mt-2"><IoIosRemoveCircle/></span></button>
  </div>
  {:else}
    No Values
  {/each}
  <Button on:click={add}>Add</Button>
</div>
