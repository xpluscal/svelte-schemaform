<script type="text/javascript">
  import SvelteSeo from "svelte-seo";
  import SchemaForm from '$lib/SchemaForm.svelte'
  import { page } from '$app/stores';

  let schema = {
    "title": {
      "label" : "Title",
      "type": "text",
      "section": [0]
    },
    "description": {
      "label" : "Description",
      "type": "textarea",
      "section": [0]
    },
    "checkbox": {
      "label" : "Checkbox",
      "type" : "checkbox"
    },
    "list": {
      "label" : "List",
      "type": "array",
      "section": [0]
    },
    "object": {
      "label" : "Cat",
      "type" : "object",
      "layout": "grid",
    },
    "age": {
      "label" : "Age",
      "type" : "number"
    },
    "name": {
      "label" : "Name",
      "type" : "text"
    },
    "color": {
      "label" : "Color",
      "type" : "text"
    },
  }

  let formData = {
    title: "",
    description: "",
    checkbox: false,
    list: ["Item A", "Item B"],
    object: {
      age: 0,
      name: "Lewn",
      color: "Brown"
    }
  }

</script>

<svelte:head>
	<title>Svelte SchemaForm - Automatic Form Builder from JSON Schema</title>
</svelte:head>

<SvelteSeo
  openGraph={{
    title: "Svelte SchemaForm - Automatic Form Builder for Svelte",
    description: "Build forms in svelte directly from JSON schema using a simple Svelte component.",
    url: $page.url.href,
    type: 'website',
    images: [
      {
        url: $page.url.origin+"/images/seo-image.jpg",
        width: 1200,
        height: 630,
        alt: "Svelte SchemaForm - Automatic Form Builder for Svelte"
      }
     ]
  }}
/>

<section class="bg-slate-100 dark:bg-slate-800 min-h-screen pb-20">
  <div class="pt-20 max-w-lg mx-auto">
    <h1 class="text-2xl font-bold dark:text-white text-black">Svelte-SchemaForm Demo</h1>
    <p>
      A simple, automatic form builder for svelte using arbitrary form data from a specified schema.
    </p>

    <div class="mt-8">
      <SchemaForm
        {schema}
        {formData}
        onSubmit={(data) => alert(JSON.stringify(data))}
        onChange={(data) => console.log("changed")}
      />
    </div>

  </div>
</section>
