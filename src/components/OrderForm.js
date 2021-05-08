
import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';


export const CreateOrderForm = () => {
  const [birthday, setBirthday] = useState("");

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Create Order</h5>
        <Form>
          <Row>
            <Col md={12} className="mb-3">
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select>
                  <option defaultValue>Select category</option>
                  <option>Instagram</option>
                  <option>Twitter</option>
                  <option>Facebook</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={12} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Social Media Username</Form.Label>
                <Form.Control required type="text" placeholder="Username" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Social Media Social Link</Form.Label>
                <Form.Control required type="text" placeholder="https://instagram.com/" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="mb-3">
              <Form.Group id="address">
                <Form.Label>Quantity</Form.Label>
                <Form.Control required type="text" placeholder="Quantity" />
              </Form.Group>
            </Col>
          </Row>
          
          <div className="mt-3">
            <Button variant="primary" type="submit">Continue</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
