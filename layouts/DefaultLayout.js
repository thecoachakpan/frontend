import React, { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({children}) => {

	return (
		<div className="main-content">
			{children}
		</div>
	);
};

export default DefaultLayout;
