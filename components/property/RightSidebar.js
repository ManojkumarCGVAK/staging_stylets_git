import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Link from 'next/link';
import ReactTooltip from 'react-tooltip';
import { withRouter} from 'next/router'
// import components
import Spinner from '../elements/Spinner';
import SaveProperty from './SaveProperty';
import formatDate from '../../util/formatDate';
import formatCurrency from '../../util/formatCurrency';


class RightSidebar extends Component {
	state = {
		tooltip: '',
		domain:'',

	};
	clickHandler = () => {
		this.setState({ tooltip: 'Copied!' }, () => {
			ReactTooltip.show(this.tooltipRef);
		});
	};

	componentDidMount(){
		const port = window.location.protocol;
		const host = window.location.host;
		this.setState({domain:`${port}//${host}`})
	}

	opendialog = () =>{
		this.props.dialogOpen('booking')
	}
	opendialogEnquires = () =>{
		this.props.dialogOpen('enquiry')
	}
	
	render() {
		const { property } = this.props;
		const { rateAvailability } = this.props.availability;

		const introContent = property.name ? (
			<div className='sidebar-section description'>
				<h3 className='heading'>Brief intro to the property</h3>
				<p>{property.propertyTypeDescription}</p>
			</div>
		) : (
			<div className='sidebar-section description'>
				<Spinner />
			</div>
		);

		let bookingInfo =
			this.props.availability && rateAvailability ? (
				<React.Fragment>
					<h3 className='heading'>Dates</h3>
					<p>{`${formatDate(rateAvailability.interval.dateFrom)} - ${formatDate(
						rateAvailability.interval.dateTo
					)}`}</p>
					<h3 className='heading'>Price</h3>
					<p>{`Total: ${formatCurrency(rateAvailability.totals.gross)}`}</p>
				</React.Fragment>
			) : (
				<React.Fragment>
					<h3 className='heading'>Corporate Lettings</h3>
					<p className='mb-0'>
						We can provide solutons for corporate lettings. Get in <Link href='/contact'>contact</Link> with
						us and see what we can offer.
					</p>
				</React.Fragment>
			);

		if (
			this.props.availability &&
			rateAvailability &&
			rateAvailability.promoTotals &&
			rateAvailability.promoTotals.gross
		) {
			bookingInfo = (
				<React.Fragment>
					<h3 className='heading'>Dates</h3>
					<p>{`${formatDate(rateAvailability.interval.dateFrom)} - ${formatDate(
						rateAvailability.interval.dateTo
					)}`}</p>
					<h3 className='heading'>Price</h3>
					<p>{`Total: ${formatCurrency(rateAvailability.promoTotals.gross)}`}</p>
				</React.Fragment>
			);
		}

		const callToAction =
			this.props.availability && rateAvailability ? (
				<button
					type='button'
					className='btn btn-secondary mb-0'
					data-toggle='modal'
					onClick={this.opendialog}
					// data-target='#bookingModal'
				>
					Book Now
				</button>
			) : (
				<React.Fragment>
					<button type='button' className='btn btn-secondary' 
					onClick={this.opendialogEnquires}
					>
						Request Details
					</button>
					<h3 className='call'>
						Call us on <a href='tel:+443301075622'>03301 075622</a>
					</h3>
				</React.Fragment>
			);

		return (
			<React.Fragment>
				<div className={`right-sidebar sticky-top ${this.props.classes}`}>
					{introContent}
					<div className='sidebar-section description'>{bookingInfo}</div>

					<div className='sidebar-section cta'>{callToAction}</div>

					{rateAvailability && rateAvailability.nights > 7 && (
						<div className='sidebar-section cta'>
							<h5>Get in touch for discounts on stays over 7 days</h5>
							<button
								type='button'
								className='btn btn-secondary'
								onClick={this.opendialogEnquires}
							>
								Request Details
							</button>
						</div>
					)}

					<div className='sidebar-section button'>
						<SaveProperty property={property} />
					</div>

					<div className='sidebar-section button d-none d-md-block'>
						<button onClick={() => window.print()} className='full'>
							Print
						</button>
					</div>

					<div className='sidebar-section button'>
						<CopyToClipboard text={this.state.domain+this.props.router.asPath}>
							<button
								ref={ref => (this.tooltipRef = ref)}
								onClick={() => this.clickHandler()}
								className='full'
								data-tip={this.state.tooltip}
							>
								Copy Link
							</button>
						</CopyToClipboard>
						<ReactTooltip />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default withRouter(RightSidebar);
