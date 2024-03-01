import React, { Component } from 'react';
import { withRouter } from 'next/router';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import moment from 'moment';
import qs from 'qs';

// Utils
import isEmpty from '../../validation/is-empty';
import addDays from '../../util/addDays';
import slugify from '../../util/slugify';

class Filter extends Component {
	state = {
		location: '',
		guests: '',
		fromDate: new Date(),
		toDate: addDays(new Date(), 3),
		filterShow: true,
		promoCode: '',
		submit: false,
	};

	componentDidMount() {
		const query = this.props.router.query;
		//  qs.parse(this.props.location.search, {
		// 	ignoreQueryPrefix: true,
		// });
		if (!isEmpty(query)) {
			this.setState({
				promoCode: query.promoCode,
				fromDate: query.dateFrom,
				toDate: query.dateTo,
			});
		}

		if (this.props.router.query.hasOwnProperty('promoCode')) {
			const { dateFrom, dateTo, promoCode } = this.props.router.query;
			if (dateFrom && dateTo) {
				this.setState({
					promoCode,
					fromDate: dateFrom,
					toDate: dateTo,
				});
			}
		}
	}

	onChange = e => {
		e.preventDefault();

		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	generateSearchString = () => {
		const { fromDate, toDate, promoCode } = this.state;

		const from = moment(fromDate).format('YYYY-MM-DD');
		const to = moment(toDate).format('YYYY-MM-DD');

		// generate search string
		let searchString = '';

		if (promoCode) {
			if (isEmpty(searchString)) {
				searchString = `promoCode=${promoCode}`;
			} else {
				searchString += `&promoCode=${promoCode}`;
			}
		}

		if (isEmpty(searchString)) {
			searchString = `&dateFrom=${from}&dateTo=${to}`;
		} else {
			searchString += `&dateFrom=${from}&dateTo=${to}`;
		}

		return searchString;
	};

	fromDateChange = date => {
		const toDateField = document.querySelector('#toDateField');

		const { toDate } = this.state;
		this.setState({ fromDate: date });

		if (
			moment(date).format('YYYY-MM-DD') >=
			moment(toDate).format('YYYY-MM-DD')
		) {
			this.setState({
				toDate: addDays(moment(date).toDate(), 1),
			});
		}

		document.elementFromPoint(200, 100).click();
		toDateField.click();
	};

	toDateChange = date => {
		this.setState({ toDate: date });
	};

	displayToggle = e => {
		this.setState({ filterShow: !this.state.filterShow });
	};

	handleSubmit = () => {
		window.scrollTo(0, 0);
		const { fromDate, toDate } = this.state;
		if (
			moment(fromDate).format('YYYY-MM-DD') >=
			moment(toDate).format('YYYY-MM-DD')
		) {
			return;
		} else {
			this.props.router.push({
				pathname: `/property/${slugify(
					this.props.property.areaName
				)}/${slugify(this.props.property.buildingName)}/${slugify(
					this.props.property.propertyTypeName
				)}`,
				query: this.generateSearchString(),
			});
		}
	};

	render() {
		return (
			<React.Fragment>
				<section className='accommodation-filter page'>
					<div className='container'>
						<div className='toggle-wrapper text-right d-md-none'>
							<button onClick={this.displayToggle}>
								Filters <i className='fas fa-filter'></i>
							</button>
						</div>

						<div
							className={
								this.state.filterShow
									? 'filter show'
									: 'filter hide'
							}
						>
							<div className='criteria'>
								<div className='row no-gutters'>
									<div className='col-md field'>
										<label htmlFor='from-filter'>
											From
										</label>
										<div
											className='date-picker'
											id='from-filter'
										>
											<MuiPickersUtilsProvider
												utils={MomentUtils}
											>
												<DatePicker
													variant='inline'
													format='DD/MM/YYYY'
													minDate={new Date()}
													value={this.state.fromDate}
													onChange={
														this.fromDateChange
													}
												/>
											</MuiPickersUtilsProvider>
										</div>
									</div>

									<div className='col-md field'>
										<label htmlFor='to-filter'>To</label>
										<div
											className='date-picker'
											id='to-filter'
										>
											<MuiPickersUtilsProvider
												utils={MomentUtils}
											>
												<DatePicker
													id='toDateField'
													variant='inline'
													format='DD/MM/YYYY'
													minDate={addDays(
														moment(
															this.state.fromDate
														).toDate(),
														1
													)}
													minDateMessage='Date needs to end after the "from" date'
													value={this.state.toDate}
													onChange={this.toDateChange}
												/>
											</MuiPickersUtilsProvider>
										</div>
									</div>

									<div className='col-md field'>
										<label>Promo Code</label>
										<input
											className='promo'
											type='text'
											name='promoCode'
											value={this.state.promoCode}
											onChange={this.onChange}
											placeholder='Optional'
										/>
									</div>

									<div className='col-md field filter-submit'>
										<button
											onClick={this.handleSubmit}
											className='btn btn-secondary'
										>
											Check Availability
											<i className='fas fa-search' />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default withRouter(Filter);
