import { Combobox, ComboboxOption, ComboboxOptions, ComboboxTrigger } from './combobox';

const ComboboxCompound = Object.assign(Combobox, {
  //   label: ComboboxLabel,
  Trigger: ComboboxTrigger,
  Options: ComboboxOptions,
  Option: ComboboxOption,
});

export { ComboboxCompound as Combobox };
