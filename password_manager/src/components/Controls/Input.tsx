import { TextField } from "@material-ui/core";

//all.props.requires.ts
export type AllPropsRequired<Object> = {
  [Property in keyof Object]-?: Object[Property];
};

// my.ts.component.tsx
interface Props {
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

const Input = (props: Props) => {
  const args: AllPropsRequired<Props> = {
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

export default Input;
