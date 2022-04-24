import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { SLayout, SMain } from './styles';

const Layout = ({ children }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	return (
		<SLayout>
			<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
			<div>
				<p onClick={() => setSidebarOpen(!sidebarOpen)}>hkjhkjhkhk</p>
				<SMain>{children}</SMain>
			</div>
		</SLayout>
	);
};

export default Layout;
