import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { ModalPop } from "./Modal";

export const Add = () => {
  const [inputs, setInputs] = useState({});
  const [title, setTitle] = useState("");
  const [submit, setSubmit] = useState(false);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    setSubmit(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTitle(inputs.title);
    addNewProduct();
  }

  function addNewProduct() {
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify(inputs),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
    setSubmit(true);
    setInputs({});
  }
  return (
    <div className="main add-form">
      {submit ? (
        <>
          <ModalPop showModal={true} title={title} />
        </>
      ) : (
        <>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Title
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  name="title"
                  value={inputs.title || ""}
                  onChange={handleChange}
                  required
                  placeholder="Enter title"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Price
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="number"
                  name="price"
                  value={inputs.price || ""}
                  onChange={handleChange}
                  required
                  placeholder="Enter Price"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Description
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  name="description"
                  as="textarea"
                  value={inputs.description || ""}
                  onChange={handleChange}
                  required
                  placeholder="Enter description"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Image
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="file"
                  name="image"
                  value={inputs.image || ""}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Category
              </Form.Label>
              <Col sm={10}>
                <Form.Select
                  name="category"
                  value={inputs.category || ""}
                  onChange={handleChange}
                >
                  <option>Choose...</option>
                  <option value="electronic">electronic</option>
                  <option value="jewelery">jewelery</option>
                  <option value="women's clothing">women's clothing</option>
                  <option value="men's clothing">men's clothing</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <section className="add-button">
              <Button type="submit" variant="dark">
                Submit
              </Button>
            </section>
          </Form>
        </>
      )}
    </div>
  );
};