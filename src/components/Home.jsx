
import React from 'react';
import useFetch from '../hooks/useFetch';
import { Col, Row, Card, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';

function Home() {
  const [data] = useFetch('https://fakestoreapi.com/products');
  const dispatch = useDispatch();

  // Get the search query from the Redux store
  const searchQuery = useSelector((state) => state.search.query);

  // Check if data is null before applying filter
  const filteredData = data
    ? data.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <>
      <div className='mt-5 pt-3 mx-4 ms-5 '>
        <Row className='pt-5 mt-5 mb-5 ms-3 me-3 justify-content-center'>
          {filteredData.length > 0 ? (
            filteredData.map((product, index) => (
              <Col key={index} className='mb-4' sm={12} md={6} lg={4} xl={3}>
                <Card style={{ width: '18rem', height: '32rem' }}>
                  <Card.Img height={'220px'} variant='top' src={product.image} />
                  <Card.Body>
                    <Card.Title className='text-warning fw-bolder'>{product?.title.slice(0, 70)}</Card.Title>
                    <Card.Text>
                      <p>{product?.description.slice(0, 50)}...</p>
                      <p className='fw-bolder'>$ {product?.price}</p>
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                      <Button onClick={() => dispatch(addToWishlist(product))} className='btn btn-light'>
                        <i className='fa-solid fa-heart text-danger fa-2x'></i>
                      </Button>
                      <Button onClick={() => dispatch(addToCart(product))} className='btn btn-light'>
                        <i className='fa-solid fa-cart-plus fa-2x text-success'></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p style={{ fontSize: '2rem' }} className='text-danger fw-bolder'>
              Nothing to Display!!!
            </p>
          )}
        </Row>
      </div>
    </>
  );
}

export default Home;