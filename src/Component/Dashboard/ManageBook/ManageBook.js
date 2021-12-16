import React from "react";
import {Container,Row,Col, Card} from 'react-bootstrap'
import useAllBooks from "../../hooks/useAllBook";

function ManageBook(props) {
  const { allBooks, setAllBooks } = useAllBooks();
  // const { myOrders, setMyOrders } = useMyOrders();

  const handleDeleteBook = (id) => {
    const confirmation = window.confirm(
      "Delete this product from list permanently???"
    );

    if (confirmation) {
      const url = `https://enigmatic-cliffs-56694.herokuapp.com/allBooks/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((jsonData) => {
          if (jsonData.deletedCount) {
            alert("This product is removed!");
            const remainingBooks = allBooks.filter((book) => book._id !== id);
            setAllBooks(remainingBooks);
          }
        });
    }
  };
  return (
      <section>
          <Container>
              <Row>
                  <Col xs={6}>
                      <Card>
                          
                      </Card>

                  
                  </Col>
              </Row>

          </Container>
      </section>
  )
}

export default ManageBook;
