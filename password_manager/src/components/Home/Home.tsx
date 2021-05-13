import Header from '../../Header';
import { Container } from '@material-ui/core';

import {useDispatch } from 'react-redux';

import {getIdentifications} from '../../actions/identifications';
import { useEffect } from 'react';

import Identifications from '../Identifications/Identifications';



const Home = () => {
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem('profile') || "");

	console.log("user")
	console.log(user?.result);
	
	useEffect(()=> {
		dispatch(getIdentifications(user?.result?._id));
	},[dispatch])
	

	return (
		<Container component="main" >
			<Header/>
			<Identifications/>
        </Container>
	);
}

export default Home;