import React from 'react';
import spinner from '../../images/spinner.gif';
import Image from 'next/future/image'

const Contanctmissing = () => {
	return (
		<div className="w-100">
			<Image
				src={spinner}
				style={{
					width: '180px',
					margin: 'auto',
					padding: '50px',
					display: 'block',
				}}
				alt="Loading..."
				/>
		</div>
	);
};
export default Contanctmissing;
