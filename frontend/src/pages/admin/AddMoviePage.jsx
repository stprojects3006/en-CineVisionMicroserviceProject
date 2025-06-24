import React, { useState } from 'react'
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { ActorService } from '../../services/actorService';
import { useEffect } from 'react';
import { CityService } from '../../services/cityService';
import KaanKaplanSelect from '../../utils/customFormItems/KaanKaplanSelect';
import { CategoryService } from '../../services/categoryService';
import { DirectorService } from '../../services/directorService';
import KaanKaplanTextInput from '../../utils/customFormItems/KaanKaplanTextInput';
import KaanKaplanTextArea from '../../utils/customFormItems/KaanKaplanTextArea';
import { MovieService } from '../../services/movieService';
import { useNavigate } from 'react-router-dom';
import KaanKaplanCheckBox from '../../utils/customFormItems/KaanKaplanCheckBox';
import { useSelector } from 'react-redux';

export default function AddMoviePage() {

    const userFromRedux = useSelector(state => state.user.payload)

    const navigate = useNavigate()

    const actorService = new ActorService();
    const cityService = new CityService();
    const categoryService = new CategoryService();
    const directorService = new DirectorService();
    const movieService = new MovieService();

    const [actors, setActors] = useState([])
    const [cities, setCities] = useState([])
    const [categories, setCategories] = useState([])
    const [directors, setDirectors] = useState([])

    useEffect(() => {
      actorService.getall().then(result => setActors(result.data))
      cityService.getall().then(result => setCities(result.data))
      categoryService.getall().then(result => setCategories(result.data))
      directorService.getall().then(result => setDirectors(result.data))
    }, [])
    
    const initValues = {
     
    }

    const validationSchema = yup.object({

   
    })


  return (
    <div>
        <div className='mt-5 p-5 container' style={{height: "100vh"}}>
            <h2 className='mt-4'>Add Movie</h2>
            <hr />

            <h5 className='my-4'>
                Fill in the movie information completely and proceed to select the actors for the movie.
            </h5>

            <Formik 
                initialValues={initValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    values.userAccessToken = userFromRedux.token; // Change here

                    if(values.directorId === undefined){
                        let director={
                            directorName: values.directorName,
                            token: userFromRedux.token
                        }
                        directorService.add(director).then(result => {
                            values.directorId = result.data.directorId
                            movieService.addMovie(values).then(result => 
                                {
                                    if(result.data != ""){
                                        navigate("/addMovie/" + result.data.movieId)
                                    }
                                });
                        })
                    } else {
                        movieService.addMovie(values).then(result => 
                            { 
                                if(result.data !== ""){
                                    navigate("/addMovie/" + result.data.movieId)
                                }
                            });
                    }
                }}>

                <Form>
                <div class="form-floating mb-3">
                    <KaanKaplanTextInput  type="text" name='movieName' class="form-control" id="floatingInput" placeholder="Movie Name" />
                    <label for="floatingInput">Movie Name</label>
                </div>
                <div class="form-floating mb-3">
                    <KaanKaplanTextArea name='description' class="form-control" id="floatingPassword" placeholder="Summary" />
                    <label for="floatingPassword">Movie Summary</label>
                </div>
                <div class="form-floating mb-3">
                    <KaanKaplanTextInput  name='duration' type="number" class="form-control" id="duration" placeholder="Duration" />
                    <label for="duration">Movie Duration</label>
                </div>
                <div class="form-floating mb-3">
                    <KaanKaplanTextInput name='releaseDate' type="date" class="form-control" id="releaseDate" placeholder="Release Date" />
                    <label for="releaseDate">Release Date</label>
                </div>
                
                <div class="form-floating mb-3">
                    <KaanKaplanTextInput name='trailerUrl' type="text" class="form-control" id="trailerUrl" placeholder="Trailer Url" />
                    <label for="trailerUrl">Trailer Url</label>
                </div>

                <div class="form-floating mb-3">
                    <KaanKaplanSelect
                        id="categoryId"
                        className="form-select form-select-lg mb-3"
                        name="categoryId"
                        options={categories.map(category => (
                            {key: category?.categoryId, text:category?.categoryName, value: category?.categoryName}
                        ))}
                    />
                    <label for="categoryId">Category</label>
                </div>  
                <div class="form-floating mb-3">
                    <KaanKaplanSelect
                        id="directorId"
                        className="form-select form-select-lg mb-3"
                        name="directorId"
                        options={directors.map(director => (
                            {key: director?.directorId, text: director?.directorName, value:director?.directorName}
                        ))}
                    />
                    
                    <label for="directorId">Director</label>
                </div>

                <p>If the director is not in the list above, please write it.</p>
                <div class="form-floating mb-3">
                    <KaanKaplanTextInput name='directorName' type="text" class="form-control" id="directorName" placeholder="Director Name" />
                    <label for="directorName">Director Name</label>
                </div>

                <div class="form-check mb-3 text-start">
                    <KaanKaplanCheckBox name="isInVision" class="form-check-input" type="checkbox" id="isInVision" />
                    <label class="form-check-label" for="isInVision">
                        Is the movie now showing?
                    </label>
                </div>
              
{/* Daha sonra file ile ekle */}
                {/* <div class="input-group mb-3">
                    <input type="file" class="form-control" id="image" />
                </div> */}

                    <div className="d-grid gap-2 my-4 col-6 mx-auto">
                      <input
                        type="submit"
                        value="Next"
                        className="btn btn-block btn-primary"
                      />
                    </div>
                </Form>

              </Formik>
            
            
        </div>

        
    </div>
  )
}
