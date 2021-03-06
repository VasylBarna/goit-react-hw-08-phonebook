import { Form, Button, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Section } from '../Section/Section';
export default function SingPage() {
  return (
    <Section>
      <Form>
        <>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              size="lg"
              type="email"
              placeholder="name@example.com"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control size="lg" type="password" placeholder="Password" />
          </FloatingLabel>
        </>
        <Button type="submit">
          Submit
        </Button>
      </Form>
   </Section>
  );
}