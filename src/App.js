import React, {useEffect, useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import axios from "axios";
import styled from 'styled-components';


const Container = styled.div`
  padding:  30px 20px; 
  margin-bottom: 40px;
  margin-left: 30px;
`

const Title = styled.h1`
  font-size: 30;
  font-weight: 600;
`

const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 25px;
`





const App = () => {

  const [videos, setVideos] = useState([])
    const [movies, setMovies] = useState([])
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

const getDates = async () => {
      return (
          await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1')
              // .then(aaa => console.log(aaa.data.results))
              .then(aaa => {
                  setMovies(aaa.data.results)
                  setLoading(false)
              })
              .catch(err => console.log(err))
      )
}



  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
      getDates()
  },[])


    return (
        <Container>

            {loading ?
                <div>
                    <h1>
                        loading ...
                    </h1>
                </div>
            :    (
                    <>
                        <div>
                            <Title>트랜드 </Title>
                            <Grid>
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
                                                    {video.overview.substring(0, 180)}...
                                                </Card.Text>
                                                <Button variant="success">Success</Button>
                                            </Card.Body>
                                        </Card>
                                    </>
                                )}
                            </Grid>
                        </div>
                        <div>
                            <Title>업커밍</Title>
                            <Grid>
                                {movies.map(movie =>
                                    <>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Body>
                                                <Card.Title>{movie.title}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">{movie.release_date}</Card.Subtitle>
                                                <Card.Text>
                                                    {movie.overview.substring(0, 120)}...
                                                </Card.Text>
                                                <Card.Link href="#">Card Link</Card.Link>
                                                <Card.Link href="#">Another Link</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    </>
                                )}
                            </Grid>
                        </div>
                    </>
                )
        }
        {/*<Grid>*/}
        {/*    <div>*/}
        {/*        <Title>업커밍</Title>*/}
        {/*        {movies.map(movie =>*/}
        {/*            <>*/}
        {/*                <Card style={{ width: '18rem' }}>*/}
        {/*                    <Card.Body>*/}
        {/*                        <Card.Title>{movie.title}</Card.Title>*/}
        {/*                        <Card.Text>*/}
        {/*                            {movie.overview}*/}
        {/*                        </Card.Text>*/}
        {/*                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />*/}
        {/*                    </Card.Body>*/}
        {/*                </Card>*/}


        {/*            </>*/}
        {/*        )}*/}


        {/*    </div>*/}
        {/*</Grid>*/}

        </Container>



    );
};

export default App;
