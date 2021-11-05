export const GROUP_FORM_CONFIG = [{
  name: 'id',
  fieldcomponent: true,
  sortable: true
}, {
  name: 'name',
  component: "dyn-input",
  label: "název",
  rules: "required",
  fieldcomponent: true, sortable: true
}, {
  name: "owner",
  component: "dyn-select",
  options: [{ value: 'admins', label: 'adminove' }],
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
  name: 'label',
  component: "dyn-input",
  label: "název",
  rules: "required",
  fieldcomponent: true, sortable: true
}, {
  name: 'note',
  component: "dyn-input",
  label: "poznámka",
  fieldcomponent: true
}]