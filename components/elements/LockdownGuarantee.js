import React from 'react';

const LockdownGuarantee = ({ className }) => {
	return (
		<div className={`lockdown-guarantee ${className ? className : ''}`}>
			<div className='container'>
				<div>
					<div className='header'>
						<h3 className='heading'>The StayLets Lockdown Guarantee</h3>
						<hr />
					</div>
					<div className='content'>
						<p>
							The Government Plans for the easing of lockdown restrictions has a potential date of 12th
							April from which date UK domestic holidays away from home are permitted, with self-contained
							accommodation able to reopen for use by members of the same household. Book your stay with
							StayLets prior to 1st April 2021 and any nights you book that you are unable to stay because
							of a change in the date of these restrictions, you can cancel free of charge.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LockdownGuarantee;
