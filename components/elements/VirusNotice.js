import React, { useState, useEffect } from 'react';

const VirusNotice = () => {
	const [hiding, setHiding] = useState(false);
	const [hidden, setHidden] = useState(false);
	const [show, setShow] = useState(false);

	const removeNotice = () => {
		setHiding(true);

		setTimeout(() => {
			setHidden(true);
			setHiding(false);
			setShow(false);
		}, 500);
	};

	useEffect(() => {
		setTimeout(() => {
			setShow(true);
		}, 1500);
	}, []);

	return (
		<React.Fragment>
			<div
				className={`important-notice${show ? ' show' : ''}${hiding ? ' hiding' : ''}${hidden ? ' hidden' : ''}`}
			>
				<h5>IMPORTANT NOTICE</h5>
				<div className='important-notice__buttons'>
					<button type='button' className='btn btn-primary' data-toggle='modal' data-target='#virusModal'>
						Open
					</button>
					<button type='button' className='btn btn-danger' onClick={removeNotice}>
						Close
					</button>
				</div>
			</div>

			<div
				className='modal fade'
				id='virusModal'
				tabIndex='-1'
				role='dialog'
				aria-labelledby='virusModalTitle'
				aria-hidden='true'
			>
				<div className='modal-dialog' role='document'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='virusModalTitle'>
								Coronavirus (COVID-19)
							</h5>
							<button type='button' className='close' data-dismiss='modal' aria-label='Close'>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div className='modal-body'>
							<small>
								<em>Updated 29th November 2021</em>
							</small>
							<br />
							<p>Dear Guests,</p>
							<p>
								Following the recent developments with the Covid variant, we feel it is necessary to remind
								our guests of our policies surrounding Covid-19 and its impact to our organisation and
								guests
							</p>
							<p>
								Our priority is to the safety and security of our guests and staff and will continue to be so. If,
								for whatever reason, we feel that this is jeopardised we will take swift and immediate action
								to amend our current procedures, but as it stands, we are continuing to function our serviced
								accommodation businesses, for those able to travel such as critical workers.
							</p>
							<p>
								We are uniquely positioned to do this, as our properties are unmanned, and all
								communication and access for guests and tenants is managed remotely. This also makes us
								a vital service at this time where so many are restricted or challenged with their work and
								movements, including key workers. Obviously, the only exception to the above is our visiting
								housekeeping staff, but PPE and policies are in place to protect them, and our guests, to
								minimise risk of exposure or infection.

							</p>
							<p>
								As a business we have a responsibility to our guests and staff, but our guests also have a
								responsibility all those around them.{' '}
								<strong>
									As such, we reserve the right to enforce any restrictions,
									amendments, or cancellations we see fit on a case-by-case basis, and inform the necessary
									authorities as required.

								</strong>
							</p>
							<p>
								Following on from our previous policies and procedures, Markey Student Property Ltd –
								trading as StayLets, have updated these in-light-of further government and medical guidance,
								as well as incidents that we have witnessed within the marketplace of serviced
								accommodation:
							</p>
							<ul>
								<li>
									Minimised contact between employees and guests or tenants – our business model allows us to work remotely in a significant number of cases
								</li>
								<li>Providing hand gel, PPE, and specific guidance on how to act in work situations</li>
								<li>
									All bookings subject to two-night minimum stay – to mitigate against the impact of individuals who are ignoring government and police guidance and seeking to gather in serviced accommodation businesses for social events
								</li>
								<li>
									Heightened appraisals of guest requests to stay to ensure validity of their need to travel and their reasons for visiting
								</li>
								<li>
									Communication throughout our organisation on the threats of the virus and the practices and communication standards that should always be maintained with regular updates across all our businesses and properties
								</li>
								<li>
									Contact made with all current tenants/residents as to safest practice and notification of any concerns to us as the operator
								</li>
								<li>
									Extra sanitisation and cleaning measures put in place across all properties – including public areas and surfaces
								</li>
							</ul>
							<p>Advice from The World Health Organisation is:</p>
							<ul>
								<li>
									<strong>
										Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.
									</strong>{' '}
									- Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands
								</li>
								<li>
									<strong>Always wear a face covering when indoors</strong>
								</li>
								<li>
									<strong>
										Maintain at least 2 metres (6 feet) distance between yourself and anyone who is
										coughing or sneezing.
									</strong>{' '}
									- Why? When someone coughs or sneezes, they spray small liquid droplets from their
									nose or mouth which may contain virus. If you are too close, you can breathe in the
									droplets, including the COVID-19 virus if the person coughing has the disease.
								</li>
								<li>
									<strong>Avoid touching eyes, nose, and mouth.</strong> - Why? Hands touch many
									surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to
									your eyes, nose, or mouth. From there, the virus can enter your body and can make
									you sick.
								</li>
								<li>
									<strong>
										Make sure you, and the people around you, follow good respiratory hygiene. This
										means covering your mouth and nose with your bent elbow or tissue when you cough
										or sneeze. Then dispose of the used tissue immediately.
									</strong>{' '}
									- Why? Droplets spread virus. By following good respiratory hygiene, you protect the
									people around you from viruses such as cold, flu and COVID-19.
								</li>
								<li>
									<strong>Stay home if you feel unwell</strong> - use the NHS 111 online service (
									<a
										href='https://111.nhs.uk/service/COVID-19/'
										target='_blank'
										rel='noopener noreferrer'
									>
										https://111.nhs.uk/service/COVID-19/
									</a>
									) to get advice and let your employer know your symptoms and the advice given. If
									you have a fever, cough and difficulty breathing, seek medical attention and call in
									advance. NHS 111 will have the most up to date information on the situation in your
									area. Calling in advance will allow your health care provider to quickly direct you
									to the right health facility. This will also protect you and help prevent spread of
									viruses and other infections.
								</li>
								<li>
									<strong>
										Keep up to date on the latest COVID-19 hotspots (cities or local areas where
										COVID-19 is spreading widely). If possible, avoid traveling to places –
										especially if you are an older person or have diabetes, heart, or lung disease.
									</strong>{' '}
									- Why? You have a higher chance of catching COVID-19 in one of these areas.
								</li>
							</ul>
							<p>
								Current information on the coronavirus situation can be found at:{' '}
								<a
									href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports'
									target='_blank'
									rel='noopener noreferrer'
								>
									https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports
								</a>
							</p>
							<p>
								<em>
									If you feel that any of the below conditions apply to you, or{' '}
									<strong>you are entering self-isolation</strong>, please let us know immediately.
								</em>
							</p>
							<p>
								<em>
									Our team are taking all necessary precautionary measures keeping our residents’ and
									staff health and safety at the forefront of our operation.
								</em>
							</p>
							<h5>
								<strong>Returning Travellers</strong>
							</h5>
							<p>
								If people have travelled to the UK from overseas, then they <strong>MUST</strong> follow
								the advice as provided below, outlining who is required to quarantine for 14 days
								depending on their most recent country of departure:
							</p>
							<p>
								<a
									href='https://www.gov.uk/guidance/coronavirus-covid-19-travel-corridors'
									target='_blank'
									rel='noopener noreferrer'
								>
									https://www.gov.uk/guidance/coronavirus-covid-19-travel-corridors
								</a>
							</p>
							<p>Use the 111 online coronavirus service to find out what to do next.</p>
							<p>Do not go to a GP surgery, pharmacy, or hospital.</p>
							<p>Be safe, and our best wishes to all</p>
							<p>
								Oliver Williams
								<br />
								Property Director
								<br />
								StayLets
							</p>
							<h5>
								<strong>Our Contact Details:</strong>
							</h5>
							<p>
								<a href='mailto:ask@staylets.co.uk'>ask@staylets.co.uk</a>
							</p>
							<p>
								<a href='mailto:bookings@staylets.co.uk?subject=Website Enquiry'>bookings@staylets.co.uk</a>
							</p>
							<p>
								<a href='tel:+443301075622'>0330 107 5622</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default VirusNotice;