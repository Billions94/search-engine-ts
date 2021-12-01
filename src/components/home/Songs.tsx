import Song from "../../interfaces"
import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

interface SongsProp {
    song: Song 
}

const Songs = ({ song }: SongsProp) => {

    return (
        <Col className='d-flex ml-3 mt-3 mx-auto' md={3}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={song.album.cover_medium} />
                <Card.Body>
                    <Link to={`/album/${song.id}`}>
                        <Card.Title>{song.title}</Card.Title>
                    </Link>
                    <h1>{song.artist.name}</h1>
                    <h4>{("0" + Math.floor(song.duration / 60)).slice(-2)}:{("0" + song.duration % 60).slice(-2)}</h4>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Songs