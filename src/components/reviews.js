import React from "react";
import PropTypes from "prop-types"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default class Reviews extends React.Component {
	render() {
		const reviews = this.props.data.allContentfulReviewCarousel.edges[0].node.review
		
	  	const settings = {
		dots: true,
		dotsClass: 'slick-dots slick-thumb',
		infinite: true,
		fade: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	  };

	  return (
      		<div className="container text-center m-auto">
				<Slider {...settings}>
				{reviews.map(review => (
					<div key={review.contact} className="w-20 text-center">
						<h3 className="italic"> {review.review.review}</h3>
						<p> - {review.contact}</p>
					</div>
				))}
				</Slider>
			</div>
	  );
	}
  }

Reviews.propTypes = {
  data: PropTypes.object,
}