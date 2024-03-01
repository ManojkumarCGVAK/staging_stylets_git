import React,{useState} from 'react';

const PropertyInfo = props => {
	const [accordianState, setAccordianState] = useState(0);
	const features =
		props.property.features &&
		props.property.features.map((feature, index) => (
			<div key={index} className="col-md-6 feature">
				<div className="diamond-icon"></div>
				<p>{feature.name}</p>
			</div>
		));
	const accordianStateFn = (event) =>{
		
		event.preventDefault();

		if(isNaN(parseInt(event.target.getAttribute('data-count')))) return;


		setAccordianState(parseInt(event.target.getAttribute('data-count')))

	}

	return (
		<div className="property-info">
			<ul className="nav nav-tabs" id="myTab" role="tablist">
				<li className="nav-item">
					<a
						className={`nav-link ${accordianState === 0 ? 'active':''}`}
						id="description-tab"
						data-toggle="tab"
						data-count="0"
						href="#description"
						role="tab"
						aria-controls="description"
						aria-selected="true"
						onClick={accordianStateFn}
					>
						Description
					</a>
				</li>
				<li className="nav-item">
					<a
					
						className={`nav-link ${accordianState? 'active':''}`}
						id="map-tab"
						data-toggle="tab"
						data-count="1"
						href="#map"
						role="tab"
						aria-controls="map"
						aria-selected="false"
						onClick={accordianStateFn}
					>
						Map
					</a>
				</li>
			</ul>
			<div className="tab-content" id="myTabContent">
				<div
					className={`tab-pane fade ${accordianState === 0? 'show active':''}`}
					id="description"
					role="tabpanel"
					aria-labelledby="description-tab"
				>
					<div className="key-features">
						<h3 className="heading">Key Features</h3>
						<div className="row no-gutters">{features}</div>
					</div>
					<h3 className="heading">Description</h3>
					<p>{props.property.description}</p>
				</div>
				<div
					className={`tab-pane fade ${accordianState? 'show active':''}`}
					id="map"
					role="tabpanel"
					aria-labelledby="map-tab"
				>
					<iframe
						src={`https://maps.google.com/maps?q=${props.property
							.propertyAddress &&
							props.property.propertyAddress.postCode.replace(
								/\s/g,
								'+'
							)}&z=16&output=embed`}
						width="100%"
						height="450"
						frameBorder="0"
						allowFullScreen
						title={`${props.property.name} Location`}
					/>
				</div>
			</div>
		</div>
	);
};

export default PropertyInfo;
