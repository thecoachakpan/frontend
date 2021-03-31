import React from 'react';
import AppNavBar from '../components/AppNavBar';
import Footer from '../components/Footer';

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({children}) => {

	return (
		<div className="main-content">
			<AppNavBar/>
			{children}
			<Footer/>
		</div>
	);
};

export default DefaultLayout;
