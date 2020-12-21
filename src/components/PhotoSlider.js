import React from "react";
import PropTypes from "prop-types"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default class PhotoSlider extends React.Component {
	render() {
		const photos = this.props.data.allCloudinaryMedia.nodes
	  	const settings = {
		dots: false,
		infinite: true,
		fade: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	  };

	  return (
		<div className="container product-image-array m-auto">
		<Slider {...settings}>
		{photos.map(image => (
			<div key={image.secure_url}>
				<figure className="image centered product-feature-image">
				<img
					src={image.secure_url}
					className="cover"
					alt={image.secure_url}
					height="559"
					width="566"
				/>
				</figure>
			</div>
		))}
		</Slider>
	</div>
	  );
	}
  }

  PhotoSlider.propTypes = {
  data: PropTypes.object,
}