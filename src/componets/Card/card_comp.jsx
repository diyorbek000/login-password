import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function card_comp() {

  const [card, setCard] = useState  ([])

  const getAllData = () => {
    axios.get("https://login-pass.onrender.com/data").then(res => {
      setCard(res.data);
    })
  }

  useEffect(() => {
    getAllData()
  }, [])
  // 

  // const [card_del, setDelete] = useState()


  // let obj = {
  //   delete: card_del
  // }

  // const deleteData = (e) => {
  //   axios.delete('https://login-pass.onrender.com/data', obj)
  //     .then(response => {
  //       alert(response.status);
  //     })
  //     .catch(error => {
  //       console.error("Error sending data: ", error);
  //     })
  // }

  return (
    <>
      <Container>
        <Row className='justify-content-center mt-5'>
          {card.map((user) => {
            return (
              <Col  lg={3} className='mt-5' >
                <Card onChange={(e) => setDelete(e.target.value)} style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={user.image} style={{ height: "170px" }} />
                  <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                      {user.description}
                    </Card.Text>
                    <Button>Button</Button>
                    {/* <Button onClick={() => deleteData()}>Delete</Button> */}
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}
