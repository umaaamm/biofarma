import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionHome } from '../Action/ActionHome'
import { actionDetail } from "../Action/ActionDetail";
import { useNavigate, useParams } from "react-router-dom";
import './Detail.css';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import { fas } from "@fortawesome/free-solid-svg-icons";

const DetailFood = () => {
    const dispatch = useDispatch();
    let { id } = useParams();
    const [inputValue, setInputValue] = useState('');
    const [dataDetail, setDataDetail] = useState([]);
    const [inputPorsi, setInputPorsi] = useState(0)
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [open, setOpen] = useState(false);
    const [buttonDisable, setButtonDisable] = useState(false);


    const getDetail = async () => {
        let data = await actionDetail(id)

        setDataDetail(data?.data)
    }

    useEffect(() => {
        getDetail();
    }, []);

    const goHome = () => {
        navigate('/Home')
    }

    const minPorsi = (e) => {
        if (inputPorsi == 0) {
            setButtonDisable(false)
            setError('Jumlah porsi minimal adalah 1');
            setOpen(true);
            return;
        }
        setInputPorsi(inputPorsi - 1)
    }

    const addPorsi = () => {
        setInputPorsi(inputPorsi + 1)
        setButtonDisable(true)
    }

    const hidePopUp = () => {
        setError('');
        setOpen(false);
        setButtonDisable(false)
    }

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
                        <Row>
                            <Col sm={7} className="background-bahan">
                                <img src={require("../asset/images/btn-detail-back.png")} onClick={() => { goHome() }} data-cy="button-back" className='image-back' />
                                <img src={dataDetail.image} alt="" data-cy="detail-image" className="image-detail" />


                                <div className="margin-kiri">
                                    <label className="lbl-title" data-cy="detail-tect-title">{dataDetail.name}</label>
                                    <div className='contain'>
                                        <div className='xxx' data-cy="detail-like">
                                            <img src={require("../asset/images/Vector.png")} data-cy="detail-like" className='vector' />
                                            <label data-cy="detail-like-value">{dataDetail.nReactionLike}</label>
                                        </div>
                                        <div className='xxx' data-cy="detail-neutral">
                                            <img src={require("../asset/images/Vector-kuning.png")} data-cy="detail-neutral" className='vector' />
                                            <label>{dataDetail.nReactionNeutral}</label>
                                        </div>
                                        <div className='xxx' data-cy="detail-dislike">
                                            <img src={require("../asset/images/Vector-merah.png")} data-cy="detail-dislike" className='vector' />
                                            <label>{dataDetail.nReactionDislike}</label>
                                        </div>
                                    </div>

                                </div>
                                <hr className="hr-devider" />

                                <div className="margin-kiri">
                                    <label className="lbl-bahan" data-cy="detail-text-ingredients">Bahan-bahan</label>
                                    {dataDetail?.ingredientsPerServing && dataDetail?.ingredientsPerServing.map((item, key) => (
                                        <p className="item-masak" data-cy="detail-text-recipe"><b>{item.value}</b> {item.unit} {item.item}</p>
                                    ))}
                                </div>
                            </Col>
                            <Col sm={4} className="background-jumlah" data-cy="form-portion">
                                <div className="margin-kiri-pilih">
                                    <label className="jumlah-porsi" data-cy="form-text-title-portion">Jumlah porsi yang dimasak:</label>
                                    <div className='contain-jumlah'>
                                        <img src={inputPorsi == 0 ? require("../asset/images/form-button-decrease-portion.png") : require("../asset/images/akar-icons_circle-minus.png")} onClick={() => { minPorsi() }} data-cy="form-button-decrease-portion" className='vector-detail' />
                                        <input type="input" data-cy="form-input-portion" className="form-input-detail" value={inputPorsi} pattern="[0-9]*" onInput={(e) => e.target.validity.valid ? setInputPorsi(e.target.value) : e}/>
                                        <img src={require("../asset/images/Vector-plus.png")} data-cy="form-button-increase-portion" onClick={() => { addPorsi() }} className='vector-detail' />
                                    </div>
                                    <div className="batas-bawah">
                                        <button type="submit" disabled={!buttonDisable} className={inputPorsi == 0 ? "form-button-pilih-false" : "form-button-pilih"} data-cy="form-button-submit-portion" onClick={() => {navigate('/Langkah/'+dataDetail.id) }}>Mulai Memasak</button>

                                    </div>

                                </div>
                                {open &&
                                    <Container className='container-error-detail' data-cy="A.one-line/b. with button">
                                        <Row>
                                            <Col sm={10}><label>{error}</label></Col>
                                            <Col sm={2}><label onClick={() => { hidePopUp() }} data-cy="form-alert-button-ok" className='label-ok'>OK</label></Col>
                                        </Row>
                                    </Container>
                                }
                            </Col>


                        </Row>
                    </Container>
                    {/* <div className="contariner-detail-top">
                        <div className="container-detail">
                            
                        </div>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default DetailFood;