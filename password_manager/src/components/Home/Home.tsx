import React from 'react';
import Header from '../../Header';
import { Link, HashRouter, Switch, Route} from 'react-router-dom'
import { Button, Typography, Avatar } from '@material-ui/core';



const Home: React.FC = () => {
	const user = null;
	return (
		<HashRouter>
			<div className="App">
				<Header/>
				<div className="App-header">
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
					{/* {user ?(
						<div>
                            <Avatar alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                            <Typography variant="h6">{user?.result.name}</Typography>
                            <Button variant="contained" color="secondary" onClick={logout}>Logout</Button>
                        </div>
					):(
						<Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
					)} */}

					<Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>

				</div>
			</div>
		</HashRouter>
	);
}

export default Home;