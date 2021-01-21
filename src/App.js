import React, {useEffect, useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import axios from "axios";

const App = () => {

  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    return (
        await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=8597e491ed6e80f0de12e349eb60ea6e')
            // .then(res => console.log(res.data.results))
            .then(res => {
              setVideos(res.data.results)
              setLoading(false)
            })
            .catch(err => console.log(err))

    )
  }



  useEffect(() => {
    getData()
  }, [])

    return (
        <>
            {loading ?
                <div>
                    <h1>
                        loading ...
                    </h1>
                </div>
            :    (
                    <div>
                        {videos.map(video =>
                            <>
                                {/*<h1>Title : {video.original_name ? video.original_name : video.original_title}</h1>*/}
                                {/*<h2>{video.first_air_date ? video.first_air_date : video.release_date}</h2>*/}
                                {/*/!*<h2>Fisrt Releas Dat : {video.first_air_date || video.release_date}</h2>*!/*/}
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${video.poster_path}`} />
                                    <Card.Body>
                                        <Card.Title>{video.original_name ? video.original_name : video.original_title}</Card.Title>
                                        <Card.Text>
                                            {video.overview}
                                        </Card.Text>
                                        <Button variant="primary">Go detail</Button>
                                    </Card.Body>
                                </Card>


                            </>
                        )}

                    </div>

                )
        }
        </>

    );
};

export default App;
