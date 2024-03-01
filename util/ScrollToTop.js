import { useEffect } from 'react';
import { withRouter } from 'next/router'

const ScrollToTop = (props) => {
	const {router:{pathname}} = props;
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return props.children || null;
};

export default withRouter(ScrollToTop);
