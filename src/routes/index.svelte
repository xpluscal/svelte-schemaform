<script type="text/javascript">
  import SchemaForm from '$lib/SchemaForm.svelte'

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
    list: ["Item A", "Item B"],
    object: {
      age: 0,
      name: "Lewn",
      color: "Brown"
    }
  }

</script>

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
      />
    </div>

  </div>
</section>
