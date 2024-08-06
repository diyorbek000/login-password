import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from './componets/Card/card_comp.jsx';
import axios from 'axios';


export default function App() {

  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [img, setImg] = useState()

  let obj = {
    name: name,
    description: description,
    image: img
  }
  const postData = (e) => {
    axios.post('https://login-pass.onrender.com/data', obj)
      .then(response => {
        alert(response.status);
      })
      .catch(error => {
        console.error("Error sending data: ", error);
      })
  }
  return (
    <>
      <Container>
        <Row className='justify-content-center mt-5'>
          <Col lg={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Img URL</Form.Label>
                <Form.Control className='input_btn' onChange={(e) => setImg(e.target.value)} type="text" placeholder="Link" />
                <Form.Text className="text-muted">
                   Rasmni Linkini qo`ying
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Card Name</Form.Label>
                <Form.Control className='input_btn' onChange={(e) => setName(e.target.value)} type="text" placeholder="Card Name" />
                <Form.Text className="text-muted">
                  Nomini yozing
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Card Info</Form.Label>
                <Form.Control className='input_btn' onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Card Info" />
                <Form.Text className="text-muted">
                  Ma`lumotni to`liq bering
                </Form.Text>
              </Form.Group>

              {/* if (input_btn == "") { */}
                <Button onClick={() => postData()} >
                  --- Enter ---
                </Button>
              {/* } */}
            </Form>
          </Col>
        </Row>
      </Container>
      <Card />
    </>
  )
}
