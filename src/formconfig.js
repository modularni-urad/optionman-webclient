export const GROUP_FORM_CONFIG = [{
  name: 'slug',
  component: "dyn-input",
  label: "slug",
  rules: "required",
  fieldcomponent: true, sortable: true
}, {
  name: 'name',
  component: "dyn-input",
  label: "název",
  rules: "required",
  fieldcomponent: true, sortable: true
}, {
  name: "owner",
  component: "dyn-select",
  options: null,
  attrmap: { text: 'name', value: 'slug' },
  label: "vlastník",
  fieldcomponent: true, sortable: true
}]

export const OPTION_FORM_CONFIG = [{
  name: 'value',
  component: "dyn-input",
  label: "hodnota",
  rules: "required",
  fieldcomponent: true, sortable: true
}, {
  name: 'text',
  component: "dyn-input",
  label: "text",
  rules: "required",
  fieldcomponent: true, sortable: true
}, {
  name: 'note',
  component: "dyn-input",
  label: "poznámka",
  fieldcomponent: true
}]