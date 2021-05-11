import React from 'react';
import { TextField, Grid, InputAdornment, IconButton, FormControl, InputLabel, OutlinedInput } from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

// class Input extends React.Component {
//     render() {
//       return (
//         <Grid item xs={12} sm={half ? 6 : 12}> 
//             <TextField
//             name={this.props.name}
//             onChange={this.props.handleChange}
//             variant="outlined"
//             required
//             fullWidth
//             label={this.props.label}
//             autoFocus={this.props.autoFocus}
//             type={this.props.type}
//             InputProps={this.props.name === 'password' ? {
//                 endAdornment: (
//                 <InputAdornment position="end">
//                     <IconButton onClick={this.props.handleShowPassword}>
//                     {this.props.type === 'password' ? <Visibility /> : <VisibilityOff />}
//                     </IconButton>
//                 </InputAdornment>
//                 ),
//             }}
//             />
//       </Grid>
//       );
//     }
// }

const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
) => {
    event.preventDefault();
};

const Input = ({ name = "", handleChange = (e: any) => { }, label = "", half = false, autoFocus = false, type = "text", handleShowPassword = () => { } }) => (
    <Grid item xs={12} sm={half ? 6 : 12}>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">{name}</InputLabel>
            <OutlinedInput
                name={name}
                type={type}
                onChange={handleChange}
                autoFocus={autoFocus}
                endAdornment={name === 'password' &&
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {type === 'password' ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
                label={label}
            />
        </FormControl>
    </Grid>
);

export default Input;