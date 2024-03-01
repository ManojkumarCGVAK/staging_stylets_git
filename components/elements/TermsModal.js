import React from 'react';

const VirusNotice = () => {
	return (
		<React.Fragment>
			<div
				className='modal fade'
				id='termsModal'
				tabIndex='-1'
				role='dialog'
				aria-labelledby='termsModalTitle'
				aria-hidden='true'
			>
				<div className='modal-dialog' role='document'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='termsModalTitle'>
								Terms & Conditions
							</h5>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
							>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div className='modal-body'>
							<ul>
								<li>
									1 free night per organisation only –
									available at Egham or Cheltenham properties
									– maximum of 2 guests in a one bedroom unit
								</li>
								<li>Subject to availability</li>
								<li>
									All enquiries for this offer must be made
									direct to StayLets, by member of management
									responsible for accommodation arrangements,
									and not through any third party
								</li>
								<li>
									Can be used within a longer booking (ie 5
									night stay, with 1 night free)
								</li>
								<li>
									Confirmation of free night’s accommodation
									at StayLets discretion only
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default VirusNotice;
