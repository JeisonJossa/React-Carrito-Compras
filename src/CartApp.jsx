import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";

export const CartApp = () => {
  return (
    <Container className="m-3">
      <Card>
        <Card.Body>
          <Card.Title>PRODUCTOS</Card.Title>
          <Card.Text>Productos a la venta</Card.Text>
          <Row>
            <Col className="m-2">
              <Card>
                <Card.Body>
                  <Card.Title>Producto 1</Card.Title>
                  <Card.Text>Descripción del producto 1</Card.Text>
                  <Card.Text>$100</Card.Text>
                  <Button>Agregar al carrito</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="m-2">
              <Card>
                <Card.Body>
                  <Card.Title>Producto 2</Card.Title>
                  <Card.Text>Descripción del producto 2</Card.Text>
                  <Card.Text>$200</Card.Text>
                  <Button>Agregar al carrito</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="m-2">
              <Card>
                <Card.Body>
                  <Card.Title>Producto 3</Card.Title>
                  <Card.Text>Descripción del producto 3</Card.Text>
                  <Card.Text>$300</Card.Text>
                  <Button>Agregar al carrito</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="m-2">
              <Card>
                <Card.Body>
                  <Card.Title>Producto 4</Card.Title>
                  <Card.Text>Descripción del producto 4</Card.Text>
                  <Card.Text>$400</Card.Text>
                  <Button>Agregar al carrito</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="m-2">
              <Card>
                <Card.Body>
                  <Card.Title>Producto 5</Card.Title>
                  <Card.Text>Descripción del producto 5</Card.Text>
                  <Card.Text>$500</Card.Text>
                  <Button>Agregar al carrito</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="m-2">
              <Card>
                <Card.Body>
                  <Card.Title>Producto 6</Card.Title>
                  <Card.Text>Descripción del producto 6</Card.Text>
                  <Card.Text>$600</Card.Text>
                  <Button>Agregar al carrito</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>

        <Card className="m-3">
          <Card.Body>
            <Card.Title>CARRITO DE COMPRAS</Card.Title>
            <Card.Text>Productos seleccionados</Card.Text>
            <Table striped bordered hover className="m-3">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th>
                    <Button>Eliminar</Button>
                  </th>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3">Total</td>
                  <td>$0</td>
                  <td>
                    <Button>Comprar</Button>
                  </td>
                </tr>
              </tfoot>
            </Table>
          </Card.Body>
        </Card>
      </Card>
    </Container>
  );
};
