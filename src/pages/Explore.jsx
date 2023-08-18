import React from 'react'
import rentCategory from '../assets/jpg/rentCategoryImage.jpg'
import sellCategory from "../assets/jpg/sellCategoryImage.jpg";
import { Link } from 'react-router-dom';
const Explore = () => {
  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader"> Explore</p>
      </header>

      <main>
        {/* slider */}

        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img src={rentCategory} alt="" className="exploreCategoryImg" />
            <p className="exploreCategoryName">Places for rent</p>
          </Link>
          <Link to="/category/sale">
            <img src={sellCategory} alt="" className="exploreCategoryImg" />
            <p className="exploreCategoryName">Places for sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Explore