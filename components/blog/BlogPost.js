import React, { Component } from 'react';
import Image from "next/image"

class BlogPost extends Component {
	render() {
		const { post } = this.props;
		const { source_url } = this.props.post._embedded['wp:featuredmedia'][0];

		return (
			<div className='blog-post'>
				<a href={post.link}>
					<div className='post-box'>
						<div className='thumbnail-wrapper'>
							<div className='thumbnail' style={{position:"relative"}}>
								<Image src={source_url} alt={source_url ? `${source_url}_img` : `test_img`} lazy="true" layout='fill'/>
							</div>
						</div>

						<div className='content'>
							<h3
								className='heading'
								dangerouslySetInnerHTML={{
									__html: post.title
										? post.title.rendered
										: null,
								}}
							/>
							<div
								className='description'
								dangerouslySetInnerHTML={{
									__html: post.excerpt
										? post.excerpt.rendered
										: null,
								}}
							/>
						</div>
					</div>
				</a>
			</div>
		);
	}
}

export default BlogPost;
