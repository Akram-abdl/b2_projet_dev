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
  onChange: (e: any) => void;
  error: string;
  type?: string;
  value?: string;
  autoComplete?: string;
  required?: boolean;
  fullWidth?: boolean;
  autofocus?: boolean;
}

const Input = (props: IInputProps) => {
  const args: AllPropsRequired<IInputProps> = {
    ...props,
    type: props.type !== undefined ? props.type : "text",
    value: props.value !== undefined ? props.value : "",
    autoComplete: props.autoComplete !== undefined ? props.autoComplete : "",
    required: props.required !== undefined ? props.required : false,
    fullWidth: props.fullWidth !== undefined ? props.fullWidth : false,
    autofocus: props.autofocus !== undefined ? props.autofocus : false,
  };

  return (
    <TextField
      id={props.id}
      name={props.name}
      label={props.label}
      type={props.type}
      value={props.value}
      autoComplete={props.autoComplete}
      margin="normal"
      variant="outlined"
      required={props.required}
      fullWidth={props.fullWidth}
      autoFocus={props.autofocus}
      onChange={props.onChange}
      {...(props.error && { error: true, helperText: props.error })}
    />
  );
};

interface IInputSelectGroupedProps extends IInputProps {
  selectItems: Array<any>;
}

export const InputSelectGrouped = (props: IInputSelectGroupedProps) => {
  const args: AllPropsRequired<IInputSelectGroupedProps> = {
    ...props,
    type: props.type !== undefined ? props.type : "text",
    value: props.value !== undefined ? props.value : "",
    autoComplete: props.autoComplete !== undefined ? props.autoComplete : "",
    required: props.required !== undefined ? props.required : false,
    fullWidth: props.fullWidth !== undefined ? props.fullWidth : false,
    autofocus: props.autofocus !== undefined ? props.autofocus : false,
    selectItems: props.selectItems !== undefined ? props.selectItems : [],
  };

  const options = props.selectItems.map((option: any) => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      id={`grouped-${props.id}`}
      freeSolo
      disableClearable
      options={options.sort((a: any, b: any) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option: any) => option.firstLetter}
      getOptionLabel={(option: any) => option.name}
      renderInput={(params: any) => (
        <TextField
          {...params}
          id={props.id}
          name={props.name}
          label={props.label}
          type={props.type}
          value={props.value}
          autoComplete={props.autoComplete}
          margin="normal"
          variant="outlined"
          required={props.required}
          fullWidth={props.fullWidth}
          autoFocus={props.autofocus}
          onChange={props.onChange}
          {...(props.error && { error: true, helperText: props.error })}
        />
      )}
    />
  );
};

export default Input;
