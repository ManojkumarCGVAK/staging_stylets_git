import React, { Component } from 'react';

// import components
import ContentPage from './ContentPage';

export default class PrivacyPolicy extends Component {
	render() {
		return (
			<ContentPage heading='Cookie Policy'>
				<div className='text-content'>
					<p>
						This is the Cookie Policy for StayLets, accessible from{' '}
						<a href='https://www.staylets.co.uk/'>
							https://www.staylets.co.uk/
						</a>
					</p>
					<h3>What are cookies?</h3>
					<p>
						As is common practice with almost all professional
						websites this site uses cookies, which are tiny files
						that are downloaded to your computer, to improve your
						experience. This page describes what information they
						gather, how we use it and why we sometimes need to store
						these cookies. We will also share how you can prevent
						these cookies from being stored however this may
						downgrade or ‘break’ certain elements of the sites
						functionality.
					</p>
					<p>
						For more general information on cookies see the
						Wikipedia article on HTTP Cookies.
					</p>
					<h3>How we use cookies</h3>
					<p>
						We use cookies for a variety of reasons detailed below.
						Unfortunately in most cases there are no industry
						standard options for disabling cookies without
						completely disabling the functionality and features they
						add to this site. It is recommended that you leave on
						all cookies if you are not sure whether you need them or
						not in case they are used to provide a service that you
						use.
					</p>
					<h3>Disabling cookies</h3>
					<p>
						You can prevent the setting of cookies by adjusting the
						settings on your browser (see your browser Help for how
						to do this). Be aware that disabling cookies will affect
						the functionality of this and many other websites that
						you visit. Disabling cookies will usually result in also
						disabling certain functionality and features of the this
						site. Therefore it is recommended that you do not
						disable cookies.
					</p>
					<h3>The cookies we set</h3>
					<ul>
						<li>
							Forms related cookies &#8211; When you submit data
							to through a form such as those found on contact
							pages or comment forms cookies may be set to
							remember your user details for future
							correspondence.
						</li>
					</ul>
					<h3>Third party cookies</h3>
					<p>
						In some special cases we also use cookies provided by
						trusted third parties. The following section details
						which third party cookies you might encounter through
						this site.
					</p>
					<ul>
						<li>
							This site uses Google Analytics which is one of the
							most widespread and trusted analytics solution on
							the web for helping us to understand how you use the
							site and ways that we can improve your experience.
							These cookies may track things such as how long you
							spend on the site and the pages that you visit so we
							can continue to produce engaging content.For more
							information on Google Analytics cookies, see the
							official Google Analytics page.
						</li>
					</ul>
					<h3>More information</h3>
					<p>
						Hopefully that has clarified things for you and as was
						previously mentioned if there is something that you
						aren’t sure whether you need or not it’s usually safer
						to leave cookies enabled in case it does interact with
						one of the features you use on our site. This Cookies
						Policy was created with the help of the{' '}
						<a href='https://cookiepolicygenerator.com/'>
							GDPR Cookies Policy Generator
						</a>
					</p>
					<p>
						However if you are still looking for more information
						then you can contact us through one of our preferred
						contact methods:
					</p>
					<ul>
						<li>
							Mail: <br />
							<strong>
								StayLets <br />
								1E Worcester Street <br />
								Gloucester <br />
								GL1 3AJ
							</strong>
						</li>
						<li>
							Phone: <a href='tel:+443301075622'>03301 075622</a>
						</li>
					</ul>
				</div>
			</ContentPage>
		);
	}
}
