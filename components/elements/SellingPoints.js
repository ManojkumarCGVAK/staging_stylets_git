import React from 'react';

const SellingPoints = (props) => {
	const sellingPoints =
		props.items &&
		props.items.map((item, index) => (
			<div
				key={index}
				className='selling-points__card'
				style={{
					backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${item.image.src})`,
				}}
			>
				<h4>{item.text}</h4>
			</div>
		));

	return <div className='selling-points'>{sellingPoints}</div>;
};

export default SellingPoints;
