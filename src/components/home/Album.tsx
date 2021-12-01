import Song from "../../interfaces/index";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

const AlbumList = () => {
  const [album, setAlbum] = useState<Song | undefined>(undefined);

  const { id } = useParams();

  const getAlbums = async () => {
    try {
      const { data } = await axios.get(
        `https://striveschool-api.herokuapp.com/api/deezer/track/${id}`
      );
      console.log(data);
      setAlbum(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAlbums();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row className="justify-content-center mx-auto">
      <Col md={5}>
        <h1 className="text-light">{album?.album?.title}</h1>
        <img src={album?.album?.cover_medium} alt="album cover" />
        {album && album.duration && (
          <h4 className="text-light">
            {("0" + Math.floor(album?.duration! / 60)).slice(-2)}:
            {("0" + (album?.duration % 60)).slice(-2)}
          </h4>
        )}
      </Col>
    </Row>
  );
};

export default AlbumList;
