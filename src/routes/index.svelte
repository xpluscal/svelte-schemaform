<script type="text/javascript">
  import SchemaForm from '$lib/SchemaForm.svelte'

  let schema = {
    "title": {
      "label" : "Title",
      "type": "text",
      "section": [0]
    },
    "description": {
      "label" : "description",
      "type": "textarea",
      "section": [0]
    }
  }

  let formData = {
    title: "",
    description: ""
  }

</script>

<section class="bg-slate-100 dark:bg-slate-800 min-h-screen">
  <div class="pt-20 max-w-lg mx-auto">
    <h1 class="text-2xl font-bold">Svelte-SchemaForm Demo</h1>

    <div class="mt-8">
      <SchemaForm
        {schema}
        {formData}
        onSubmit={(data) => alert(JSON.stringify(data))}
      />
    </div>

  </div>
</section>
