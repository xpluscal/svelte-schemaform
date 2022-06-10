# Svelte SchemaForm
A simple Svelte component that automatically builds a Form UI from a JSON schema.
Rewrite / Svelte port of [react-jsonschema-form](https://github.com/rjsf-team/react-jsonschema-form)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Why](#why)
- [Demo](#demo)
- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Advanced Usage](#advanced-usage)
- [Supported Field Types (schema slug)](#supported-field-types-schema-slug)
- [Options](#options)
- [Additional Features](#additional-features)
- [ToDo](#todo)
- [Contribution](#contribution)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

![Preview of Svelte SchemaForm](https://raw.githubusercontent.com/xpluscal/svelte-schemaform/gh-pages/images/preview.jpg)

## Why
Building and maintaining tons of forms is a mess and error-prone. Having a schema/json based approach to generating forms speeds up that process tremendously.

**Sponsor Svelte SchemaForm**

If you rely on Svelte SchemaForm, please consider supporting it.

<a href="https://www.buymeacoffee.com/xpluscal" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>


## Demo
[Visit Demo](https://xpluscal.github.io/svelte-schemaform/)

## Installation

```
npm add svelte-schemaform
```

## Basic Usage

```svelte
<script>
  import {SchemaForm} from 'svelte-schemaform'

  let schema = {
    "title": {
      "label" : "Title",
      "type": "text"
    },
    "description": {
      "label" : "Description",
      "type": "textarea"
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
| `layout`  | Display fields top to bottom (parameter not present) or as a 3 column grid.  | `undefined` or `grid`


## Additional Features

- [x] Dark Mode

## ToDo

- [ ] Form Validation
- [ ] Custom Styling
- [ ] Image Upload via IPFS

## Contribution
Feel free to suggest / PR. This grows best together.
