<script>
  import {onMount, getContext} from 'svelte';
  import schema from '$lib/data/schema';
  import {userTimezone} from '$lib/stores'
  import ArrayField from '$lib/components/form/ArrayField.svelte';
  import ObjectArrayField from '$lib/components/form/ObjectArrayField.svelte';
  import ObjectField from '$lib/components/form/ObjectField.svelte';
  import TokenItemInput from '$lib/components/TokenItemInput.svelte';
  import IPFSImageField from '$lib/components/form/IPFSImageField.svelte';
  import Toggle from "svelte-toggle";
  import {HsvPicker} from 'svelte-color-picker';
  import {convertISODateToInputTZ} from '$lib/helpers'
  import {ethers} from 'ethers';
  import dayjs from 'dayjs';
  import utc from 'dayjs/plugin/utc.js'
  import timezone from 'dayjs/plugin/timezone.js'

  const pdk = getContext('pdk')

  // import DatePicker from "@beyonk/svelte-datepicker/src/components/DatePicker.svelte";
  // import { CalendarStyle } from '@beyonk/svelte-datepicker/src/calendar-style.js'

  // let calendarStyling = {buttonWidth: "222px"}

  // https://webreflection.medium.com/using-the-input-datetime-local-9503e7efdce
  Date.prototype.toDatetimeLocal =
    function toDatetimeLocal() {
      var
        date = this,
        ten = function (i) {
          return (i < 10 ? '0' : '') + i;
        },
        YYYY = date.getFullYear(),
        MM = ten(date.getMonth() + 1),
        DD = ten(date.getDate()),
        HH = ten(date.getHours()),
        II = ten(date.getMinutes()),
        SS = ten(date.getSeconds())
      ;
      return YYYY + '-' + MM + '-' + DD + 'T' +
               HH + ':' + II + ':' + SS;
    };

  Date.prototype.fromDatetimeLocal = (function (BST) {
    // BST should not be present as UTC time
    return new Date(BST).toISOString().slice(0, 16) === BST ?
      // if it is, it needs to be removed
      function () {
        return new Date(
          this.getTime() +
          (this.getTimezoneOffset() * 60000)
        ).toISOString();
      } :
      // otherwise can just be equivalent of toISOString
      Date.prototype.toISOString;
  }('2006-06-06T06:06'));

  onMount(()=>{
    dayjs.extend(utc)
    dayjs.extend(timezone)
  })

  export let key;
  export let value;
  export let update;
  export let config = {};

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
    {:else if type === "price"}
      <input step="0.01" min="0" on:input={e => update(key,ethers.utils.parseEther(e.target.value))}  class={inputStyle} type="number" value={value !== undefined ? ethers.utils.formatEther(String(value)) : undefined}>
    {:else if type === "color"}
      <HsvPicker on:colorChange={(rgba) => update(key, $pdk.utils.rgbToHex(rgba.detail.r,rgba.detail.g,rgba.detail.b))} startColor={(value === "") ? '#FFFFFF' : value}/>
    {:else if type === "checkbox"}
      <Toggle on:toggle={(e) => update(key,e.detail)} hideLabel bind:toggled={value} switchColor="#eee" toggledColor="#00ce00" untoggledColor="#ccc" />
    {:else if type === "date"}
      <input class={inputStyle} on:input={(e) => update(key,dayjs(e.target.value).tz($userTimezone).unix())} type="datetime-local" id="meeting-time"
         name="meeting-time" value={convertISODateToInputTZ(dayjs.unix(parseInt(value)))}>
    {:else if type === "ipfs_upload"}
      <IPFSImageField {update} {key} {value} {config}/>
    {:else if type === "array"}
      <ArrayField {update} {key} value={value}/>
    {:else if type === "object_array"}
      <ObjectArrayField {update} {key} value={value}/>
    {:else if type === "object"}
      <ObjectField {update} {key} {layout} value={value}/>
    {/if}
  </TokenItemInput>
</div>
