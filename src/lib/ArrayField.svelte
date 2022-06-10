<script>
  import SchemaField from '$lib/SchemaField.svelte';
  import IoIosRemoveCircle from 'svelte-icons/io/IoIosRemoveCircle.svelte'
  import Button from '$lib/Button.svelte';

  export let value;
  export let key;
  export let update;

  const add = () => {
    temp_value = [...temp_value,""];
  }

  const remove = (index) => {
    temp_value.splice(index,1);
    update(key,temp_value);
  }

  const update_array = (k,v,index) => {
    temp_value[index] = v;
    console.log(temp_value);
    update(key,temp_value);
  }

  $: temp_value = value;

</script>

<div class="array">
  {#each temp_value as value, index}
  <div class="flex items-center">
    <div class="grow">
      <SchemaField update={(k,v) => update_array(k,v,index)} {value}/>
    </div>
    <button on:click={() => remove(index)}><span class="ml-2 w-6 h-6 text-red-400 block -mt-4"><IoIosRemoveCircle/></span></button>
  </div>
  {:else}
    No Values
  {/each}
  <Button on:click={add}>Add</Button>
</div>
