import React, { Component } from 'react';
import { withRouter } from 'next/router';
// import InputRange from 'react-input-range';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import moment from 'moment';

import isEmpty from '../../validation/is-empty';
import addDays from '../../util/addDays';

class Filter extends Component {
	constructor() {
		super();

		this.state = {
			location: '',
			guests: '',
			fromDate: new Date(),
			toDate: addDays(new Date(), 3),
			promoCode: '',
			submit: false,
		};

		this.onChange = this.onChange.bind(this);
		this.generateSearchString = this.generateSearchString.bind(this);
	}

	onChange(e) {
		e.preventDefault();

		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	componentDidMount() {
		// console.log(this.testRef);
	}

	generateSearchString() {
		const { location, guests, promoCode, fromDate, toDate } = this.state;

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
	}

	fromDateChange = (date) => {
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

	toDateChange = (date) => {
		this.setState({ toDate: date });
	};

	handleSubmit = () => {
		const { fromDate, toDate } = this.state;
		if (
			moment(fromDate).format('YYYY-MM-DD') >=
			moment(toDate).format('YYYY-MM-DD')
		) {
			return;
		} else {
			this.props.router.push({
				pathname: '/accommodation',
				search: this.generateSearchString(),
			});
		}
	};

	render() {
		return (
			<div className='accommodation-filter'>
				<div className='container'>
					<div className='filter'>
						<div className='header'>
							<h1 className='heading'>
								Find your home away from home
							</h1>
							<h2 className='subheading'>
								Search for accommodation to rent nearby
							</h2>
						</div>

						<div className='filter-bar'>
							<div className='row no-gutters'>
								<div className='col-md field'>
									<label>Location</label>
									<select
										name='location'
										value={this.state.location}
										onChange={this.onChange}
									>
										<option value=''>Any</option>
										<option value='2'>Cheltenham</option>
										<option value='3'>Egham</option>
									</select>
								</div>

								<div className='col-md field'>
									<label>Guests</label>
									<select
										name='guests'
										value={this.state.guests}
										onChange={this.onChange}
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

								<div className='col-md field' aria-labelledby="fromDateLabel">
									<label htmlFor="fromDateInput">From</label>
									<div className='date-picker'>
										{/* <InputRange
											minValue={this.state.minPrice}
											maxValue={this.state.maxPrice}
											step={1}
											formatLabel={value => `£${value}`}
											value={this.state.price}
											onChange={price =>
												this.setState({ price })
											}
										/> */}
										<MuiPickersUtilsProvider
											utils={MomentUtils}
										>
											<DatePicker
												id="fromDateInput"
												variant='inline'
												format='DD/MM/YYYY'
												minDate={new Date()}
												value={this.state.fromDate}
												onChange={this.fromDateChange}
											/>
										</MuiPickersUtilsProvider>
									</div>
								</div>

								<div className='col-md field' aria-labelledby="toDateLabel">
									<label htmlFor="toDateInput">To</label>
									<div className='date-picker'>
										{/* <InputRange
											minValue={this.state.minPrice}
											maxValue={this.state.maxPrice}
											step={1}
											formatLabel={value => `£${value}`}
											value={this.state.price}
											onChange={price =>
												this.setState({ price })
											}
										/> */}
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
										Book Now <i className='fas fa-search' />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Filter);
