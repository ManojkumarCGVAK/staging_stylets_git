import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	savePropertyToLocalStorage,
	deleteSavedProperty,
} from '../../actions/propertiesActions';
import isEmpty from '../../validation/is-empty';

class SaveButton extends Component {
	state = {
		saved: false,
	};

	componentDidMount() {
		const storedProperties = JSON.parse(
			localStorage.getItem('savedProperties')
		);
		if (
			!isEmpty(storedProperties) &&
			storedProperties.includes(this.props.property.id)
		) {
			this.setState({ saved: true });
		} else {
			this.setState({ saved: false });
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.savedCount !== this.props.savedCount) {
			const storedProperties = JSON.parse(
				localStorage.getItem('savedProperties')
			);
			if (
				!isEmpty(storedProperties) &&
				storedProperties.includes(this.props.property.id)
			) {
				this.setState({ saved: true });
			} else {
				this.setState({ saved: false });
			}
		}
	}

	saveProperty = e => {
		e.preventDefault();

		this.props.savePropertyToLocalStorage(this.props.property.id);
		this.setState({ saved: true });
	};

	deleteProperty = e => {
		e.preventDefault();

		this.props.deleteSavedProperty(this.props.property.id);
		this.setState({ saved: false });
	};

	render() {
		return (
			<div className='save-wrapper'>
				{!this.state.saved ? (
					<button onClick={this.saveProperty}>
						<i className='far fa-heart' />
					</button>
				) : (
					<button onClick={this.deleteProperty}>
						<i className='fas fa-heart' />
					</button>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		savedCount: state.properties.savedCount,
	};
};

export default connect(
	mapStateToProps,
	{ savePropertyToLocalStorage, deleteSavedProperty }
)(SaveButton);
