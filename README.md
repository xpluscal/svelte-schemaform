# Svelte Schemaform
A simple, automatic form builder for svelte using arbitrary form data from a specified schema.
Svelte port of (react-jsonschema-form)[https://github.com/rjsf-team/react-jsonschema-form]

## Why
Building and maintaining tons of forms is a mess and error-prone. Having a schema/json based approach to generating forms speeds up that process tremendously.

**Sponsor Svelte SEO**

If you rely on Svelte SchemaForm, please consider supporting it.

<a href="https://www.buymeacoffee.com/xpluscal" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## Installation

```
npm i svelte-schemaform
```

## Basic Example

```svelte
<script>
  import SchemaForm from 'svelte-schemaform'

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
    }
  }

  let formData = {
    title: "",
    description: ""
  }

  const handleSubmit = (data) => {
    // Handle Submit here.
  }

  const handleChange = (data) => {
    // Handle Change here.
  }
</script>

<SchemaForm
  {schema}
  {formData}
  onSubmit={handleSubmit}
  onChange={handleChange}
/>
```

For more complex examples check the `/routes/index.svelte` file.

## Supported Field Types (schema slug)

- [x] Text (text)
- [x] TextArea (textarea)
- [x] Number (number)
- [x] Array (array)
- [x] Object (object)
- [x] ObjectArray (object_array)

## Options

| Parameter  | Description | Example |
| ------------- | ------------- | -------------- |
| `schema`  | The Schema to apply to the formData  | `{title: {}}`
| `formData`  | Data Object to be handled  | `{title: ""}`
| `onSubmit`  | Callback function to be called when form is submitted.  | `onSubmit={(data) => doData(data)}`
| `onChange`  | Callback function to be called when form data changes.  | `onChange={(data) => handleChange(data)}`

## Additional Features

- [x] Dark Mode

## ToDo

- [ ] Form Validation
- [ ] Custom Styling

## Contribution
Feel free to suggest / PR. This grows best together.
