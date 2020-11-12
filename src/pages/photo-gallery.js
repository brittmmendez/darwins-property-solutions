import React from "react";
import { graphql } from 'gatsby'
import PropTypes from "prop-types"
import Layout from "../components/layout";
import SEO from "../components/seo";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default class PhotoGalleryPage extends React.Component {
	render() {
		const photos = this.props.data.allContentfulPhotoGallery.edges[0].node.photo
		console.log(photos)

	  	const settings = {
		customPaging: function(i) {
		  return (
			<a>
			   <img
                src={photos[i].file.url}
                className="sm-img-cover"
                alt={photos[i].file.url}
                width="120"
                height="120" />
			</a>
		  );
		},
		dots: true,
		dotsClass: 'slick-dots slick-thumb product-thumbs',
		infinite: true,
		fade: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	  };

	  return (
		<Layout>
		<SEO
		  keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
		  title="Photo Gallery"
		/>
      		<div className="container product-image-array m-auto">
				<Slider {...settings}>
				{photos.map(image => (
					<div key={image.file.url}>
						<figure className="image centered product-feature-image">
						<img
							src={image.file.url}
							className="cover"
							alt={image.file.url}
							height="559"
							width="566"
						/>
						</figure>
					</div>
				))}
				</Slider>
			</div>
		</Layout>

	  );
	}
  }

export const query = graphql`
 query {
  allContentfulPhotoGallery {
    edges {
      node {
        photo {
          file {
            url
            fileName
          }
        }
      }
    }
  }
}
`

PhotoGalleryPage.propTypes = {
  data: PropTypes.object,
}