import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'
import './styles.css'

const Search = () => {

    const [input, setInput] = useState('')

    return (
        <Row className='d-flex px-5'>
        <Col md={5} className="mt-4 customSearchBar mx-auto">
          <div>
            <Form>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label className='text-light'>
                      <b>Search your favorite music</b>
                  </Form.Label>
                <Form.Control
                  className="customInput"
                  type="search"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Search for songs....."
                />
              </Form.Group>
            </Form>
          </div>
        </Col>
          {/* <Col md={7}>{input.text ? <Jobs /> : null}</Col> */}
      </Row>
    )
}

export default Search