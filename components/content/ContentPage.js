import React from 'react';
import Image from 'next/future/image'
// Images
import HeroImage from '../../images/hero-image.png';

const ContentPage = props => {
	const { images, heading, children } = props;

	return (
		<main className='content-page'>
			<section className='hero'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-10 mx-auto'>
							<Image src={HeroImage} alt='Bedroom' />
						</div>
					</div>
				</div>
			</section>

			<section className='main-content'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-8 mx-auto'>
							{heading ? (
								<div className='header'>
									<h1 className='heading'>{heading}</h1>
								</div>
							) : null}

							{children}
						</div>

						{images && (
							<div className='col-md-4'>
								<div className='images-container'>
									{images
										? images.map((image, index) => (
												<Image
													src={image.src}
													alt={image.alt}
													key={index}
												/>
										  ))
										: null}
								</div>
							</div>
						)}
					</div>
				</div>
			</section>
		</main>
	);
};

export default ContentPage;
