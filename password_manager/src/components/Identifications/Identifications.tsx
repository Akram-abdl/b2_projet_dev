import { Box, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import useStyles from './styles';
import Identification from '../../models/identifications';

import {RootState} from '../../reducers';

// interface RootState {
//     identifications: Identification
//   }

const Identifications = () => {
    const classes = useStyles();
    const identifications = useSelector((state: RootState)=> state.identifications);

    console.log("identifications");
    console.log(identifications);

	return (
		<Box>
            <Typography variant="h1">Identifications</Typography>
            {identifications && identifications.map((identification:any) => (
                <Typography>Hello</Typography>
            ))}

			
            
        </Box>
	);
}

export default Identifications;