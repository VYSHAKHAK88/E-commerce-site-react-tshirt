
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setSearchQuery } from '../redux/searchProductSlice';

function HeaderComponent() {
  const wishlist = useSelector((state) => state.WishlistReducer.wishlist);
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    // Dispatch the action to update the search query
    dispatch(setSearchQuery(searchInput));
  };

  return (
    <>
      {/* nav  */}
      <nav style={{ zIndex: '1', top: '0' }} className='navbar navbar-expand-lg navbar-light bg-light position-fixed w-100'>
        <div className='container px-2 px-lg-2'>
          <Link to={'/'} className='navbar-brand'>
            <i className='fa-brands fa-shopify fa-beat me-1'></i>TEEREX T-SHIRTS
          </Link>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <div className='input-group w-50 me-2'>
              <input
                type='text'
                className='form-control'
                placeholder='Search'
                aria-label='Search'
                aria-describedby='button-addon2'
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}
              />
              <div className='input-group-append'>
                <button className='btn btn-outline-secondary ms-2' type='button' id='button-addon2' onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
            <form className='d-flex ms-auto'>
              <Link to={'/cart'} className='btn btn-outline-dark me-2 mt-2' type='submit'>
                <i className='bi-cart-fill me-1'></i>
                Cart
                <span className='badge bg-dark text-white ms-1 rounded-pill'>{cart.length}</span>
              </Link>
              <Link to={'/wishlist'} className='btn btn-outline-dark ms-2 mt-2' type='submit'>
                <i className='bi-cart-fill me-1'></i>
                Wishlist
                <span className='badge bg-dark text-white ms-1 rounded-pill'>{wishlist.length}</span>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeaderComponent;