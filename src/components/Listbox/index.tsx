import { Listbox, ListboxOption, ListboxOptions, ListboxTrigger } from './listbox';

const ListboxCompound = Object.assign(Listbox, {
  Trigger: ListboxTrigger,
  Options: ListboxOptions,
  Option: ListboxOption,
});

export { ListboxCompound as Listbox };
