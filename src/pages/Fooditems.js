import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Fooditems.css'



function Foodlist() {



    const [sdata, setData] = useState("")

    const [foods, setFoods] = useState([])

    const [copyFoods, setCopyFoods] = useState([])

    const fetchData = async () => {
        const result = await axios.get("https://dummyjson.com/recipes")
        setFoods(result.data.recipes);
        setCopyFoods(result.data.recipes)
    }

    useEffect(() => {
        fetchData()
    }, [sdata]
    )

    const search = () => {
        const data = foods.filter(i => (i.name + i.tags).toLowerCase().trim().includes(sdata.toLowerCase().trim()))
        setCopyFoods(data)
    }


    const getSortedMeal = (foodName) => {
        const result = foods.filter(i => i.mealType.join().toLowerCase().trim().includes(foodName.toLowerCase().trim()))
        setCopyFoods(result)
    }




    return (
        <div>

            <Container>
                <Row className='my-5'>
                    <Col lg={12} className='d-flex justify-content-center'>
                        <img  style={{width:"1230px" , height:"500px"}} src="https://t3.ftcdn.net/jpg/06/72/45/24/360_F_672452471_4kHMWT93ipMIvpg862kRS3FlwvMKg8nS.jpg" alt="" className='gif' />
                        {/* <Col lg={6}>
                        <div className='hero-div mt-1 '>
                            <img style={{ width: "650px", height: "500px"}} src="cbook.jpg" alt="" />
                            <h1 className='hero-text'></h1>
                        </div>
                    </Col> */}
                    </Col>

                    
                </Row>
            </Container>

            <Container>
                <Row className='buttons-div mb-5 row-gap-4'>
                <Col lg={6} className='d-flex justify-content-center'>
                        <div className='d-flex gap-4'>
                            <button onClick={() => getSortedMeal("Breakfast")} className='btn-outline-success btn'><span>Breakfast</span></button>
                            <button onClick={() => getSortedMeal("Lunch")} className='btn-outline-success btn'><span>Lunch</span></button>
                            <button onClick={() => getSortedMeal("Dinner")} className='btn-outline-success btn'><span>Dinner</span></button>
                        </div>
                    </Col>

                    <Col lg={6} className='ps-md-5' >
                        <div className='d-flex me-5'>
                            <input onChange={(e) => setData(e.target.value)} type="text" name="" id="" placeholder='Search Food' className='form-control' />
                            <button onClick={search} className='btn btn-dark ms-3'><i class="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </Col>
                    {/* <Col lg={6} className='d-flex justify-content-center'>
                        <div className='d-flex gap-4'>
                            <button onClick={() => getSortedMeal("Breakfast")} className='btn-outline-success btn'><span>Breakfast</span></button>
                            <button onClick={() => getSortedMeal("Lunch")} className='btn-outline-success btn'><span>Lunch</span></button>
                            <button onClick={() => getSortedMeal("Dinner")} className='btn-outline-success btn'><span>Dinner</span></button>
                        </div>
                    </Col> */}
                </Row>
            </Container>

            {foods.length > 0 ?
                <div className='d-flex flex-wrap justify-content-evenly container ' >
                    {copyFoods.map(i => (
                        <Link to={`/Simpleview/${i.id}`} className='text-decoration-none shadow-lg rounded-6 mb-4 bg-dark'>
                            <Card style={{ width: '18rem', height: '100%' }} className=' border-0 cardsitem ' >
                                <Card.Img variant="top" src={i.image} className='card-img' />
                                <Card.Body className='text-center cardsbody '>
                                    <Card.Title className='textheadeing'>{i.name}</Card.Title>
                                    <div className='d-flex justify-content-between mt-4'>
                                        <b>{i.cuisine}</b>
                                        <span>{i.mealType.join()}</span>
                                    </div>

                                    <div className='d-flex justify-content-between mt-2'>
                                        <div>
                                            <span>Rating <span className={i.rating > 4.5 ? "text-success" : "text-warning"} style={{ fontWeight: '700' }}>{i.rating}</span><i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i> </span>
                                            <span>({i.reviewCount})</span>
                                        </div>
                                        <div>
                                            <span><span className={i.difficulty == "Easy" ? "text-success" : "text-warning"} style={{ fontWeight: '600' }}>{i.difficulty}</span></span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Link>
                    ))}
                </div>
                :
                <div className='text-center'>
                    <img src="https://cdn.dribbble.com/users/645440/screenshots/3266490/loader-2_food.gif" alt="" />
                </div>
            }
        </div>
    )
}

export default Foodlist