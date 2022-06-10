<script>
  import {onMount, getContext} from 'svelte';
  import ArrayField from '$lib/ArrayField.svelte';
  import ObjectArrayField from '$lib/ObjectArrayField.svelte';
  import ObjectField from '$lib/ObjectField.svelte';
  import TokenItemInput from '$lib/TokenItemInput.svelte';
  // import IPFSImageField from '$lib/IPFSImageField.svelte'; --TODO
  import Toggle from "svelte-toggle";
  // import {HsvPicker} from 'svelte-color-picker'; --TODO
  import {convertISODateToInputTZ, rgbToHex} from '$lib/helpers'
  import dayjs from 'dayjs';
  import utc from 'dayjs/plugin/utc.js'
  import timezone from 'dayjs/plugin/timezone.js'

  import {userTimezone} from '$lib/store'

  onMount(()=>{
    dayjs.extend(utc)
    dayjs.extend(timezone)
  })

  export let key;
  export let value;
  export let update;
  export let config = {};
  export let schema;

  $: type = (schema[key]) ? schema[key]["type"] : undefined;
  $: label = (schema[key] && schema[key]["label"]) ? schema[key]["label"] : key;
  $: layout = (schema[key] && schema[key]["layout"]) ? schema[key]["layout"] : "";
  $: isGroup = (type === 'object' || type === 'array' || type === 'object_array')

  let inputStyle = "w-full px-6 py-3 border-2 border-slate-200 dark:border-slate-500 text-slate-600 dark:text-white bg-white dark:bg-slate-600 rounded-lg"

</script>

<div class="mb-4">
  <TokenItemInput {label} {isGroup}>
    {#if type === undefined}
      <input on:input={(e) => update(key,e.target.value)} class={inputStyle} type="text" value={value}/>
    {:else if type === "text"}
      <input on:input={(e) => update(key,e.target.value)} class={inputStyle} type="text" value={value}/>
    {:else if type === "textarea"}
      <textarea rows="10" on:input={(e) => update(key,e.target.value)} class={inputStyle} type="text" value={value}/>
    {:else if type === "number"}
      <input on:input={(e) => update(key,parseInt(e.target.value))} class={inputStyle} type="number" value={parseInt(value)}/>
    <!-- {:else if type === "price"}
      <input step="0.01" min="0" on:input={e => update(key,ethers.utils.parseEther(e.target.value))}  class={inputStyle} type="number" value={value !== undefined ? ethers.utils.formatEther(String(value)) : undefined}> -->
    <!-- {:else if type === "color"}
      <HsvPicker on:colorChange={(rgba) => update(key, $pdk.utils.rgbToHex(rgba.detail.r,rgba.detail.g,rgba.detail.b))} startColor={(value === "") ? '#FFFFFF' : value}/> -->
    {:else if type === "checkbox"}
      <Toggle on:toggle={(e) => update(key,e.detail)} hideLabel bind:toggled={value} switchColor="#eee" toggledColor="#00ce00" untoggledColor="#ccc" />
    {:else if type === "date"}
      <input class={inputStyle} on:input={(e) => update(key,dayjs(e.target.value).tz($userTimezone).unix())} type="datetime-local" id="meeting-time"
         name="meeting-time" value={convertISODateToInputTZ(dayjs.unix(parseInt(value)))}>
    <!-- {:else if type === "ipfs_upload"}
      <IPFSImageField {update} {key} {value} {config}/> -->
    {:else if type === "array"}
      <ArrayField {update} {key} value={value}/>
    {:else if type === "object_array"}
      <ObjectArrayField {update} {key} value={value}/>
    {:else if type === "object"}
      <ObjectField {update} {key} {layout} value={value}/>
    {/if}
  </TokenItemInput>
</div>
