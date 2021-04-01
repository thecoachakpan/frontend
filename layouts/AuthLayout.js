import React from 'react';

// eslint-disable-next-line react/prop-types
const AuthLayout = ({children}) => {

	return (
		<div className="main-content">
			{children}
		</div>
	);
};

export default AuthLayout;
