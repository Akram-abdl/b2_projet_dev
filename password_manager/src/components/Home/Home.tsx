import Header from '../../Header';
import { Container } from '@material-ui/core';

import {useDispatch } from 'react-redux';

import {getIdentifications} from '../../actions/identifications';
import { useEffect } from 'react';


const Home = () => {

	const dispatch = useDispatch();
	
	useEffect(()=> {
		dispatch(getIdentifications(1));
	},[dispatch])

	return (
		<Container component="main" >
			<Header/>
            
        </Container>
	);
}

export default Home;