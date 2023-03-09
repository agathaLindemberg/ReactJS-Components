import React from 'react';
import styles from '../arquivosCSS/cabecalho.css'

function CabecalhoPadrao (){
    return(
        <div className='cabecalho'>
            <h1><a href="/">WEBDEV</a></h1>
                <ul>
                    <li><a href="/service">Service</a></li>
                    <li><a href="/howItWorks">How it works</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
        </div>
    )
}

export default CabecalhoPadrao