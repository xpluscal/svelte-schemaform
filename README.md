# Svelte Schemaform
A simple Svelte component capable of building HTML forms out of a JSON schema
Rewrite / Svelte port of (react-jsonschema-form)[https://github.com/rjsf-team/react-jsonschema-form]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Why](#why)
- [Installation](#installation)
- [Basic Example](#basic-example)
- [Supported Field Types (schema slug)](#supported-field-types-schema-slug)
- [Options](#options)
- [Additional Features](#additional-features)
- [ToDo](#todo)
- [Contribution](#contribution)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Why
Building and maintaining tons of forms is a mess and error-prone. Having a schema/json based approach to generating forms speeds up that process tremendously.

## Demo
(Visit Demo)[https://xpluscal.github.io/svelte-schemaform/]

**Sponsor Svelte SchemaForm**

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
## Advanced Usage
SchemaForm supports segmenting and a few other non-documented features.
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
- [-] Image Upload via IPFS
- [ ] Custom Styling

## Contribution
Feel free to suggest / PR. This grows best together.
