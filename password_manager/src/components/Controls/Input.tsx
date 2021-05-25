import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

//all.props.requires.ts
export type AllPropsRequired<Object> = {
  [Property in keyof Object]-?: Object[Property];
};

// my.ts.component.tsx
interface IInputProps {
  id: string;
  name: string;
  label: string;
  error: string;
  onChange?: (e: any) => void;
  type?: string;
  value?: string;
  autoComplete?: string;
  required?: boolean;
  fullWidth?: boolean;
  autofocus?: boolean;
}

const setDefaultInputValue = (props: IInputProps) => {
  return {
    ...props,
    onChange: props.onChange !== undefined ? props.onChange : (e: any) => {},
    type: props.type !== undefined ? props.type : "text",
    value: props.value !== undefined ? props.value : "",
    autoComplete: props.autoComplete !== undefined ? props.autoComplete : "",
    required: props.required !== undefined ? props.required : false,
    fullWidth: props.fullWidth !== undefined ? props.fullWidth : false,
    autofocus: props.autofocus !== undefined ? props.autofocus : false,
  };
};

export const Input = (props: IInputProps) => {
  const args: AllPropsRequired<IInputProps> = setDefaultInputValue(props);

  return (
    <TextField
      id={args.id}
      name={args.name}
      label={args.label}
      type={args.type}
      value={args.value}
      autoComplete={args.autoComplete}
      margin="normal"
      variant="outlined"
      required={args.required}
      fullWidth={args.fullWidth}
      autoFocus={args.autofocus}
      onChange={args.onChange}
      {...(args.error && { error: true, helperText: args.error })}
    />
  );
};

interface IInputAutocompleteProps extends IInputProps {
  selectItems: Array<any>;
  onSelectTag: (e: any, value: any) => void;
  onInputChange: (e: any, value: any) => void;
}

const setDefaultInputAutocompleteValue = (props: IInputAutocompleteProps) => {
  return {
    ...props,
    ...setDefaultInputValue(props),
  };
};

export const InputAutocomplete = (props: IInputAutocompleteProps) => {
  const args: AllPropsRequired<IInputAutocompleteProps> = setDefaultInputAutocompleteValue(props);

  const options = args.selectItems.map((option: any) => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      id={args.id}
      freeSolo
      disableClearable
      options={options.sort((a: any, b: any) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option: any) => option.firstLetter}
      getOptionLabel={(option: any) => option.name || args.name}
      inputValue={args.value}
      onInputChange={args.onInputChange}
      onChange={args.onSelectTag}
      renderInput={(params: any) => (
        <TextField
          {...params}
          name={args.name}
          label={args.label}
          type={args.type}
          autoComplete={args.autoComplete}
          margin="normal"
          variant="outlined"
          required={args.required}
          fullWidth={args.fullWidth}
          autoFocus={args.autofocus}
          {...(args.error && { error: true, helperText: args.error })}
        />
      )}
    />
  );
};
