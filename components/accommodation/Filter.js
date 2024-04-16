import React, { Component } from 'react';
import { withRouter } from 'next/router';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import moment from 'moment';
import qs from 'qs';

import isEmpty from '../../validation/is-empty';
import addDays from '../../util/addDays';

class Filter extends Component {
	state = {
		location: '',
		guests: '',
		fromDate: new Date(),
		toDate: addDays(new Date(), 3),
		promoCode: '',
		filterShow: false,
	};

	componentDidMount() {
		const query = this.props.router.query;
		if (!isEmpty(query)) {
			this.setState({ fromDate: query.dateFrom, toDate: query.dateTo });
		}
	}

	onChange = e => {
		e.preventDefault();

		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	generateSearchString = () => {
		const { location, guests, fromDate, promoCode, toDate } = this.state;

		const from = moment(fromDate).format('YYYY-MM-DD');
		const to = moment(toDate).format('YYYY-MM-DD');

		// generate search string
		let searchString = '';

		if (location) {
			if (isEmpty(searchString)) {
				searchString = `location=${location}`;
			} else {
				searchString += `&location=${location}`;
			}
		}

		if (guests) {
			if (isEmpty(searchString)) {
				searchString = `guests=${guests}`;
			} else {
				searchString += `&guests=${guests}`;
			}
		}

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
				pathname: '/accommodation',
				query:this.generateSearchString(),
			});
		}
	};

	render() {
		return (
			<React.Fragment>
				<section className='accommodation-filter page sticky-top'>
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
										<label htmlFor='location-filter'>
											Location
										</label>
										<select
											name='location'
											value={this.state.location}
											onChange={this.onChange}
											id='location-filter'
										>
											<option value=''>Any</option>
											<option value='2'>
												Cheltenham
											</option>
											<option value='3'>Egham</option>
										</select>
									</div>

									<div className='col-md field'>
										<label htmlFor='adult-filter'>
											Guests
										</label>
										<select
											name='guests'
											value={this.state.guests}
											onChange={this.onChange}
											id='adult-filter'
										>
											<option value=''>Any</option>
											<option value='1'>1</option>
											<option value='2'>2</option>
											<option value='3'>3</option>
											<option value='4'>4</option>
											<option value='5'>5</option>
											<option value='6'>6</option>
											<option value='7'>7</option>
											<option value='8'>8</option>
											<option value='9'>9</option>
											<option value='10'>10</option>
											<option value='11'>11</option>
											<option value='12'>12</option>
										</select>
									</div>

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
											Book Now{' '}
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
