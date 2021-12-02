import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState, useEffect } from 'react'
import './styles.css'
import Songs from './Songs'
import axios from 'axios'
import Song from '../../interfaces'




const Search = () => {

    const [songs, setSongs] = useState<Song[]>([])
    const [input, setInput] = useState('')

    const getSongs = async (input: string) => {
        try {
            const  { data: { data } }  = await axios.get<{data: Song[]}>(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${input} `)
            console.log(data)
            setSongs(data)
        } catch (error) {
            console.log(error)
        }
    }

    console.log('we are the songs',songs)

    useEffect(() => {
        getSongs(input)
    }, [input])

    

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
          <Row id='favorite' className='mx-auto'>{input ? songs && songs.map(song => (<Songs key={song.id} song={song}/> )) : null}</Row>
      </Row>
    )
}

export default Search