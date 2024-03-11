import React from 'react'
import './mycss.css'
import { Container, Row, Col, Carousel, Card, Button, Accordion } from 'react-bootstrap'

function Home() {
  return (
    <div className='container '>
      <div className='flex-container-column-center'>
      <h1>Best Natural & Ayurvedic Hair Oils for Hair Growth</h1>
      </div>

      <Container>
        <Row className='d-flex justify-content-center'>
          <Col sm={8} ms={6} lg={5}>
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./images/products_images/product_1/1.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./images/products_images/product_2/1.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./images/products_images/product_3/1.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./images/products_images/product_4/1.jpg"
                  alt="Fourth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./images/products_images/product_5/1.jpg"
                  alt="Fifth slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      <p>
        Using natural and ayurvedic hair oil is the best remedy for all your hair concerns and promotes hair growth.
        Ayurvedic hair oils are gentle on the scalp and give softer, shinier, healthier-looking hair.
        Our Ayurvedic hair care products are also made using natural ingredients that help in the nourishment of
        hair.
        Our oils are mainly made from natural ingredients like Amla, Hibiscus, coconut oil, and Aloe vera following
        the traditional
        Ayurvedic processes.
      </p>

      <h2>Benefits of Natural Hair Oils</h2>

      <p>Natural hair oil has a great impact on your hair as they help to offer the best benefits to your hair more
        effectively than any other oils
        on the market and they are free from harmful chemicals. Our Ayurvedic hair oils promote your hair growth and
        make your hair soft and shiny.
      </p>

      <h2>Our Best Ayurvedic Hair Oil for Hair Growth</h2>

      Dhathri has combined Ayurveda with modern science to formulate the best ayurvedic oils for hair.
      Focusing on various hair concerns like dandruff, hair loss, and hair growth, Dhathri has a set of different
      natural hair oils for various
      concerns.
      <br />
      <br />

      <container>
        <Row className='d-flex flex-wrap gap-4 justify-content-center'>
          <Col lg={3} md={5} sm={10}>
            <Card className='height500'>
              <Card.Img variant="top" src="./images/products_images/product_1/1.jpg" alt="Product1 image" />
              <Card.Body>
                <Card.Title><h5>Hair Care Herbal Oil</h5></Card.Title>
                <Card.Text>
                  <p>Promotes hair growth | Strengthens hair | Reduces hair fall</p>
                </Card.Text>
                <Button variant="primary">Know More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={5} sm={10}>
            <Card className='height500'>
              <Card.Img variant="top" src="./images/products_images/product_2/1.jpg" alt="Product2 image" />
              <Card.Body>
                <Card.Title><h5>Hair Care Plus Herbal Oil</h5></Card.Title>
                <Card.Text>
                  <p>Reduces hair fall & dandruff | Promotes hair growth</p>
                </Card.Text>
                <Button variant="primary">Know More</Button>
              </Card.Body>
            </Card>
          </Col>


          <Col lg={3} md={5} sm={10}>
            <Card className='height500'>
              <Card.Img variant="top" src="./images/products_images/product_3/1.jpg" alt="Product3 image" />
              <Card.Body>
                <Card.Title><h5>Anti-Dandruff Oil</h5></Card.Title>
                <Card.Text>
                  <p>Reduces dandruff & scalp itching | Moisturizes scalp & hair</p>
                </Card.Text>
                <Button variant="primary">Know More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={5} sm={10}>
            <Card className='height500'>
              <Card.Img variant="top" src="./images/products_images/product_4/1.jpg" alt="Product4 image" />
              <Card.Body>
                <Card.Title><h5>Neelibhringadi Keram</h5></Card.Title>
                <Card.Text>
                  <p>Repair & Rejuvenates hair | Controls hair fall</p>
                </Card.Text>
                <Button variant="primary">Know More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={5} sm={10}>
            <Card className='height500'>
              <Card.Img variant="top" src="./images/products_images/product_5/1.jpg" alt="Product5 image" />
              <Card.Body>
                <Card.Title><h5>Natural Daily Oil</h5></Card.Title>
                <Card.Text>
                  <p>Reduces hair fall | Moisturizes hair & scalp</p>
                </Card.Text>
                <Button variant="primary">Know More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row >
      </container >

      <Container>
        <h3>Hair Care Herbal oil</h3>
        <p>Our Hair Care Herbal oil for hair fall is prepared from 15 restorative herbs to prevent hair fall and nourish
          hair follicles to promote healthy growth. Made through the Ayurvedic process of Sooryapaka vidhi
          (sunlight-infused extraction), this ayurvedic hair oil is the best natural hair oil for dandruff concerns
          and helps to retain the moisture of the scalp and hair.</p>
        <h3>Hair Care Plus Herbal oil </h3>
        <p>Hairfall control oils by Dhathri include Hair Care Plus Herbal Oil made from 21 restorative herbs and
          clinically proven to reduce hair fall within 21 days of usage. This is prepared following the Ayurvedic
          process of Snnehapaka Vidhi- ksheera Avarthy and is the best herbal oil for hair fall.</p>
        <h3>Anti-Dandruff oil</h3>
        <p>Our Anti-Dandruff oil is prepared using sooryapaka vidhi (sunlight-infused extraction method) for effective
          control of dandruff on hair and itching on the scalp. In addition, this natural hair oil made with herbal
          ingredients including lemon, coconut oil, musk root, pala indigo, and other natural ingredients also helps
          to retain the moisture on the scalp and hair.</p>
        <h3>Neelibhringadi oil</h3>
        <p>Made with coconut milk, coconut oil, Amla, and other herbal ingredients, our Neelibhringadi oil is the best
          ayurvedic hair oil for hair fall control and natural hair growth. It also helps in conditioning the hair and
          repairing the damaged hair, providing essential nourishment. </p>
        <h3>Daily Hair oil</h3>
        <p>Enriched with 15 natural herbs, Daily use hair oil is the best natural hair oil for the nourishment of the
          scalp and hair fall control. It can be also used as post-bath serum and can be used daily.</p>

        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Why Use Dhathri Hair Oils?</Accordion.Header>
            <Accordion.Body>
              <strong>Dhathri hair oil</strong> is the best natural hair oil in the market that is curated
              completely from natural ingredients which helps in the complete nourishment and healthy growth
              of your hair. Prepared through different traditional ayurvedic processes, these ayurvedic hair
              oils are more effective than any other hair oil and are free from harmful chemicals that cause
              side effects.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How to Use Herbal Hair Oils?</Accordion.Header>
            <Accordion.Body>
              Our hair oil can be used for all hair types. Take 5-7 ml of hair oil and apply it to the scalp
              and massage gently from root to tip. Leave on for some time and wash off your hair after 15-30
              minutes. After this, you can use our <strong>herbal shampoos</strong> made of natural
              ingredients for providing better care for your hair.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </Container>
      <br />
      <br />
    </div >
  )
}

export default Home