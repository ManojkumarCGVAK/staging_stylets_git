import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	savePropertyToLocalStorage,
	deleteSavedProperty,
} from '../../actions/propertiesActions';
import Spinner from '../elements/Spinner';
import isEmpty from '../../validation/is-empty';

class SaveProperty extends Component {
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

	saveProperty = () => {
		// save property to local storage
		const { property } = this.props;

		// get properties
		this.props.savePropertyToLocalStorage(property.id);

		this.setState({ saved: true });
	};

	deleteSavedProperty = () => {
		// save property to local storage
		const { property } = this.props;

		this.props.deleteSavedProperty(property.id);

		this.setState({ saved: false });
	};

	render() {
		const { property } = this.props;
		let buttonContent;

		if (!property.name) {
			buttonContent = <Spinner />;
		} else {
			if (!this.state.saved) {
				buttonContent = (
					<button className='full' onClick={this.saveProperty}>
						Save Property
					</button>
				);
			} else {
				buttonContent = (
					<button className='full' onClick={this.deleteSavedProperty}>
						Delete Saved Property
					</button>
				);
			}
		}

		return buttonContent;
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
)(SaveProperty);
