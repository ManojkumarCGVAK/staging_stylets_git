import React, { Component } from 'react';
import axios from 'axios';

import Spinner from '../elements/Spinner';
import BlogPost from './BlogPost';
import slugify from '../../util/slugify';

class BlogPosts extends Component {
	state = {
		posts: [],
		loading: false,
	};


	componentDidMount() {
		// this.setState({ loading: true });

		// const params = {};

		// if (this.props.location) {
		// 	params.location = slugify(this.props.location);
		// 	console.log(params.location);
		// }
		// if (this.props.tag) {
		// 	params.tag = slugify(this.props.tag);
		// }

		// axios
		// 	.get('/api/blog', {
		// 		params,
		// 	})
		// 	.then(response => {
		// 		this.setState({ posts: response.data, loading: false });
		// 	})
		// 	.catch(err => {
		// 		this.setState({ posts: [], loading: false });
		// 	});
	}

	render() {
		const { loading } = this.state;
	
		return (
			<div className='blog-feed'>
				<div className='container'>
					<div className='header'>
						{this.props.tag ? (
							<h3 className='heading'>
								{this.props.tag} around {this.props.location}
							</h3>
						) : (
							<h3 className='heading'>
								{this.props.location
									? `What's on in ${this.props.location}`
									: 'Blog'}
							</h3>
						)}
						<hr />
					</div>

					<div className='row'>
						{!loading ? (
							this.props?.posts?.map(post => (
								<div
									className='col-lg-3 col-sm-6'
									key={post.id}
								>
									<BlogPost post={post} key={post.id}/>
								</div>
							))
						) : (
							<Spinner />
						)}
					</div>
				</div>
			</div>
		);
	}
}





export default BlogPosts;
