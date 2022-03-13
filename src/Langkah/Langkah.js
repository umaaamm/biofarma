
import { Form, Container, Col, Row } from 'react-bootstrap';
import './Langkah.css';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { actionStep } from '../Action/ActionStep';
import { useNavigate, useParams } from "react-router-dom";
import { color } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Langkah = () => {
    const [inputValue, setInputValue] = useState('');
    const [activeStep, setActiveStep] = React.useState(0);
    let { id } = useParams();
    const [dataLangkah, setDataLangkah] = useState([]);
    const navigate = useNavigate();

    const styles = theme => ({
        icon: {
            color: "#2BAF2B !important"
        },
    });


    const handleNext = () => {
        console.log('hahaha',activeStep );
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        
        if (activeStep === dataLangkah?.data.length - 1) {
            navigate('/Penilaian')
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const getStep = async () => {
        let data = await actionStep(id);
        setDataLangkah(data?.data)
    }

    const goBack = () => {
        navigate('/Detail/' + id)
    }

    useEffect(() => {
        getStep();
    }, []);

    return (
        <div>
            <nav className="navbar navbar-dashboard navbar-light background-header" styles="background-color: #ffffff;">
                <div className="navbar-container navbar-container-top">
                    <a className="navbar-brand" href="#">
                        <img src={require("../asset/images/header-logo.png")} alt="" className="d-inline-block align-text-top navbar-logo" data-cy="header-logo" />
                    </a>
                    <form className="search-bar d-flex" onSubmit={() => { }}>
                        <input className="form-control search-input" type="search" placeholder="Cari Resep" name="searchRecipe" aria-label="Cari Resep" data-cy="header-input-search" onInput={(e) => setInputValue(e.target.value)} />
                        <button className="btn search-btn" type="submit" data-cy="header-button-search">Cari</button>
                    </form>
                </div>

                <div className="navbar-container-bottom">
                </div>
            </nav>
            <div className="content-container container-fluid">
                <div className="card-container recipe-container row">
                    <Container className="container-detail">
                        <Row className='justify-content-md-center'>
                            <Col sm={7} className="background-langkah">
                                <div className='title-langkah'>
                                    <img src={require("../asset/images/btn-detail-back.png")} onClick={() => { goBack() }} data-cy="button-back" />
                                    <p className='langkah-masak' data-cy="text-title">Langkah Memasak</p>
                                </div>
                                <div className="margin-kiri-langkah">
                                    <Box sx={{ maxWidth: 800 }}>
                                        <Stepper activeStep={activeStep} orientation="vertical">
                                            {dataLangkah?.data && dataLangkah?.data.map((step, index) => (
                                                <Step key={step.stepOrder} expanded={true} data-cy={"item-step-"+index}>
                                                    <StepLabel
                                                        data-cy="text-step-title"
                                                        className='label-langkah'
                                                        icon={index < activeStep ? <img src={require('../asset/images/bulet.png')} /> : <img src={require('../asset/images/Ellipse.png')} />}
                                                    >
                                                        {'Step ' + step.stepOrder}
                                                    </StepLabel>
                                                    <StepContent>
                                                        <Typography data-cy="text-step-description" className="label-des">{step.description}</Typography>
                                                        <Box sx={{ mb: 2 }}>
                                                            <div>

                                                                {index == activeStep && (
                                                                    <Button
                                                                        data-cy={index === dataLangkah?.data.length - 1 ? "button-serve" : "button-step-done"}
                                                                        style={{
                                                                            backgroundColor: index === dataLangkah?.data.length - 1 ? '#EF5734' : '#2BAF2B',
                                                                            borderRadius: '6px',
                                                                            width: '288px'
                                                                        }}
                                                                        variant="contained"
                                                                        onClick={handleNext}
                                                                        sx={{ mt: 1, mr: 1 }}
                                                                    >
                                                                        {index === dataLangkah?.data.length - 1 ? 'Sajikan Makanan' : 'Selesai'}
                                                                    </Button>
                                                                )}

                                                                {index < activeStep && (
                                                                    <>
                                                                        <label className='label-sukses' data-cy="text-step-done"> <img src={require('../asset/images/Vector-ckls.png')} /> Selesai</label>

                                                                    </>
                                                                )}
                                                            </div>
                                                        </Box>
                                                    </StepContent>
                                                </Step>
                                            ))}
                                        </Stepper>
                                    </Box>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )

}

export default Langkah;