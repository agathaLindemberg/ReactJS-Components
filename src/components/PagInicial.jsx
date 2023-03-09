import React from 'react';
import { useNavigate } from 'react-router-dom'

//Componentes e styles
import CabecalhoPadrao from './partesEssenciais/CabecalhoPadrao';
import styles from './arquivosCSS/cssInicial.css'

//Importanto os ícones
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai'
import {RiInstagramFill} from 'react-icons/ri'
import {AiFillYoutube} from 'react-icons/ai'

function PagInicial(){   
    const navigate =useNavigate();
    return( 
        <div className="geralPagInicial">
            <CabecalhoPadrao/>
                <section className="mainPagInicial">
                    <img src="https://img.freepik.com/vetores-gratis/codificacao-e-desenvolvimento-de-sites-suporte-tecnico-engenharia-de-programacao-coder-desenvolvedor-web-software-de-computador-ilustracao-de-conceito-de-personagem-plano-masculino-programador_335657-1740.jpg" alt="Foto Ilustrativa Decorativa" />
                    <div>
                        <h2>What we do?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corporis repellat tenetur velit omnis odit, fuga, nemo nobis natus doloremque explicabo, magni facilis quia. Eligendi non voluptatem incidunt cupiditate suscipit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nemo non! </p>
                        <button onClick={() => navigate('/Service')}>Testimonials</button>
                        <div className='teste'>
                            <ul>
                                <li><FaFacebookF fontSize="1.3em"/></li>
                                <li><AiOutlineTwitter fontSize="1.3em"/></li>
                                <li><RiInstagramFill fontSize="1.3em"/></li>
                                <li><AiFillYoutube fontSize="1.3em"/></li>
                            </ul>
                        </div>
                    </div>
                </section>

        </div>
    )
}

export default PagInicial