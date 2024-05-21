import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import './Simpleview.css'



function Simpleview() {

    const params = useParams()

    const [sFood, setFood] = useState({})

    const singleData = async () => {
        const result = await axios.get(`https://dummyjson.com/recipes/${params.id}`)
        setFood(result?.data);
    }

    useEffect(() => {
        singleData()
    }, []
    )

    return (
        <div>
            {sFood.id ?
                <div className='my-3'>

                    <Container>
                        <Row>
                            <Col lg={6} >
                                <img src={sFood?.image} style={{ width: "80rem" }} alt="" className='rounded mb-4' />
                            </Col>
                            <Col lg={6}>

                                <div className=' text-black p-4 shadow-lg rounded-4 '>

                                    <div className='d-block justify-content-center'>
                                        <h4 className='headingfood'>{sFood?.name}</h4>
                                        <h5 className='cuisine'>{sFood?.cuisine}</h5>
                                        <button className={sFood?.difficulty == "Easy" ? "bg-success" : "bg-warning"} id='difficulty'>{sFood?.difficulty}</button>
                                        <p className='textingredient text'>{sFood?.tags.join(" ")}</p>
                                        <p className='textingredient'>Meal Type : {sFood?.mealType}</p>
                                        <p className='textingredient'>Rating : <span className={sFood?.rating > 4.5 ? "text-success" : "text-warning"} style={{ fontWeight: '700' }}>{sFood?.rating}</span><i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i></p>
                                        <p className='textingredient'>ReviewCount : (<b className='text-light'>{sFood?.reviewCount}</b>)</p>
                                        <p className='instructions-text'>Please follow the given instructions feel free to experiment on Ingredients.</p>
                                        <p className='Happy-cooking'>Happy cooking !</p>
                                    </div>

                                    <div className='mt-3'>
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header><b className='text-danger'>Ingredients</b></Accordion.Header>
                                                <Accordion.Body>
                                                    {sFood?.ingredients.join(", ")}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header><b>instructions</b></Accordion.Header>
                                                <Accordion.Body>
                                                    {sFood?.instructions.join(" ")}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>

                                    <div className='w bg-white rounded-3 shadow-lg mt-3'>
                                        <div className='p-3'>
                                            <h5 className='mb-3 text-danger'>About the recipe</h5>
                                            <p><i class="fa-regular fa-clock" style={{ color: "#74C0FC" }}></i> Preparation Min : {sFood?.prepTimeMinutes}</p>
                                            <p><i class="fa-solid fa-utensils" style={{ color: "#74C0FC" }}></i> Cooking Time Min : {sFood?.cookTimeMinutes}</p>
                                            <p><i class="fa-regular fa-user" style={{ color: "#74C0FC" }}></i> Servings Count : {sFood?.servings}</p>
                                            <p className='m-0'><i class="fa-solid fa-signal" style={{ color: "#74C0FC" }}></i> Calories Serving : {sFood?.caloriesPerServing}</p>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                :
                <div className='text-center'>
                    <img src="https://cdn.dribbble.com/users/645440/screenshots/3266490/loader-2_food.gif" alt="" />
                </div>
            }
        </div>
    )
}

export default Simpleview