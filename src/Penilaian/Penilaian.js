import './Penilaian.css';
import { Form, Container, Col, Row } from 'react-bootstrap';
import { useState } from 'react';

const Penilaian = () => {
    const [inputValue, setInputValue] = useState('');

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
                            <Col sm={7} className="background-penilaian">
                                <label className='lbl-makanan-siap' data-cy="text-title">Yaay! Masakanmu sudah siap disajikan</label>
                                <div className='margin-gambar'>
                                    <img src={require('../asset/images/image-rate.png')} data-cy="image-rate" />
                                </div>
                                <div className='margin-text'>
                                <label className='label-text-suka' data-cy="text-description">Suka dengan resep dari CodeFood?</label>
                                    
                                </div>
                                <div>
                                <label className='label-text-suka'>Bagaimana rasanya?</label>
                                </div>

                                <div>
                                <img src={require('../asset/images/Vector-senyum.png')} className="margin-penilian-gambar-kiri" data-cy="button-like" />
                                <img src={require('../asset/images/Vector-b.png')} className="margin-penilian-gambar" data-cy="button-neutral" />
                                <img src={require('../asset/images/Vector-sedih.png')} className="margin-penilian-gambar-kanan" data-cy="button-dislike"/>
                                </div>
                                <div>
                                <label className='margin-text-icon'>Yummy!</label>
                                <label className='margin-text-icon'>Lumayan</label>
                                <label className='margin-text-icon'>Kurang Suka</label>
                            
                                </div>
                                <div className='btn-penilaian'>
                                <button type="submit" className="form-button-peneliaian" data-cy="button-rate" onClick={()=> {}}>Berikan Penilaian</button>

                                </div>
                   
                            </Col>

                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Penilaian;