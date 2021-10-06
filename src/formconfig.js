export const GROUP_FORM_CONFIG = [{
  name: 'name',
  component: "dyn-input",
  label: "název",
  rules: "required",
  fieldcomponent: true
}, {
  name: "owner",
  component: "dyn-select",
  options: [{ value: 'admins', text: 'adminove' }],
  label: "vlastník",
  fieldcomponent: true
}]

export const OPTION_FORM_CONFIG = [{
  name: 'value',
  component: "dyn-input",
  label: "hodnota",
  rules: "required",
  fieldcomponent: true
}, {
  name: 'label',
  component: "dyn-input",
  label: "název",
  rules: "required",
  fieldcomponent: true
}, {
  name: 'note',
  component: "dyn-input",
  label: "poznámka",
  fieldcomponent: true
}]