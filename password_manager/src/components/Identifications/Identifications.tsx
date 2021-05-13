import { Container } from '@material-ui/core';
import { useSelector } from 'react-redux';

import useStyles from './styles';
import Identification from '../../models/identifications';

interface RootState {
    identifications: Identification
  }

const Identifications = () => {
    const classes = useStyles();
    const identifications = useSelector((state: RootState)=> state.identifications);
	return (
		<Container >
			
            
        </Container>
	);
}

export default Identifications;