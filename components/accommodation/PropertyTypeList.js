import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import Image from "next/future/image";
import Head from "next/head";
import { withRouter } from "next/router";
import {
  getProperties,
  getPropertyTypes,
} from "../../actions/propertiesActions";

// import components
import Sidebar from "../elements/Sidebar";
import Spinner from "../elements/Spinner";
import Filter from "./Filter";
import slugify from "../../util/slugify";
import axios from 'axios';
import FeaturedImage from "../../images/featured-image.jpg";

class PropertyTypeList extends Component {
  componentDidMount() {
    // this.props.getProperties();
    // const path = window.location.pathname.split('/');
    // const [building,location] = path.reverse();
    // this.setState({building,location});
    // this.loadpost(building,location);

  }

  loadpost = (building,location) =>{
    this.setState({loading:true})
    axios
		.get('/api/properties')
		.then(response => {
     
      const buildings = response?.data?.filter(item => slugify(item.location) === location)[0];
      const propertyTypes =  buildings?.buildings?.filter(buildingitem =>slugify(buildingitem.name) === building)[0].details;
      this.setState({propertyTypes,loading:false})
			
		})
		.catch(err => console.log(err.response));
  }


  // componentDidUpdate(prevProps) {
  //   if (prevProps.all == null || prevProps.all !== this.props.all) {
  //     const { location, building } = this.props.router.query;
  //     if (location && building && this.props.all.length > 0) {
  //       this.props.getPropertyTypes({ location, building });
  //     }
  //   }
  // }

  render() {
    const { location } = this.props.router.query;
   
    
    
    return (
      <React.Fragment>
        <Cheltenhamcom location={this.props.location} />
        <Filter />
        <div className="property-feed">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                {
                  this.props.building === 'caboose-town' || this.props.building === 'staylets-village'?<div className="message_show"><h6>Caboose Town is available to book from 11th – 16th March 2024</h6></div>:null
                }
                {this.props.loading ? (
                  <Spinner />
                ) : (
                  <PropertyType propertytypes={this.props.propertyTypes} location={location} building={this.props.building} />
                )}
              </div>

              <div className="col-lg-3 d-none d-lg-block">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  
}
}

const mapStateToProps = (state) => {
  return {
    all: state.properties.all,
    propertyTypes: state.properties.propertyTypes,
    loading: state.properties.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProperties: () => dispatch(getProperties()),
    getPropertyTypes: (query) => dispatch(getPropertyTypes(query)),
  };
};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withRouter(PropertyTypeList));


const Cheltenhamcom = ({ location }) => {
  if (location === "cheltenham") {
    return (
      <Head>
        <title>Book Our Serviced Apartments in Cheltenham</title>
        <meta
          name="description"
          content="View our Ideal studios and larger apartments for leisure or corporate visitors traveling to Cheltenham"
        />
      </Head>
    );
  }
  return (
    <Head>
      <title>Book Our Serviced Apartments in Egham</title>
      <meta
        name="description"
        content="View our studios and larger apartments for leisure or corporate visitors traveling to Surrey. Short trip to central London."
      />
    </Head>
  );
};
const PropertyType = ({ propertytypes,building, location }) => {

  return (
    <Fragment>
      {propertytypes?.map((propertyType, index) => (
        <div key={index} className="property-card single-image">
          <Link
            href={`/property/${location}/${building}/${slugify(
              propertyType.type
            )}`}
          >
            <a>
              <div className="header">
                <h2 className="heading">{`${propertyType.type}`}</h2>
              </div>

              <div className="row no-gutters">
                <div className="col-md-8">
                  <div className="left-content">
                    <div className="featured-images" >
                      <Image
                        src={
                          propertyType.featuredImage.url
                            ? 'https:'+propertyType.featuredImage.url
                            : FeaturedImage
                        }
                        alt={
                          propertyType.featuredImage.name
                            ? propertyType.featuredImage.name
                            : "Placeholder"
                        }
						layout="responsive"
						width={1000}
						height={500}
						/>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="property-info extra-padding">
                    <div className="description">
                      <p>{propertyType.description}</p>
                    </div>
                    <ul className="meta-info">
                      <li>
                        <i className="fas fa-user fa-fw" />{" "}
                        {`Sleeps 1 - ${propertyType.maxOccupancy}`}
                      </li>
                    </ul>
                    <a
                      href={`/property/${location}/${building}/${slugify(
                        propertyType.type
                      )}`}
                      className="btn btn-secondary"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </Fragment>
  );
};


export default withRouter(PropertyTypeList);