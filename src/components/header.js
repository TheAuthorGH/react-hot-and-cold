import React from 'react';

import './header.css';

export default function Header(props) {
	return (
		<header>
			<h1><span style={{color: '#F99'}}>Hot</span> and <span style={{color: '#99F'}}>Cold</span></h1>
		</header>
	);
}