# Sveltekit Basic Schemaform
Automatically create and update a form for arbitrary form data from a specified schema.
A simple Svelte variant of (react-jsonschema-form)[https://github.com/rjsf-team/react-jsonschema-form]

## Installation

```
npm install --
```

## Basic Example

```
<script>
  import SchemaForm from 'svelte-schemaform'

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
| `onSubmit`  | Callback function to be called when form data changes.  | `onChange={(data) => handleChange(data)}`

## ToDo

- [ ] Form Validation
