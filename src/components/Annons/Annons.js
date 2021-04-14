import React from 'react';
import Styles from './Annons.module.css';
import { Link } from 'react-router-dom';

export function Annons (props){

    return(
        <div className={Styles.Annons}>
            <div> 
                <p className={Styles.bodyType}>{props.element.bodyType}</p>
                <div className={Styles.id_model}>
                    <p className={Styles.ID}>{props.element.id.replace("-", " ")}</p> 
                    <p className={Styles.modelType}>{props.element.modelType}</p> 
                </div>
            
            </div> 
           
           <img src={process.env.PUBLIC_URL + props.element.imageUrl} />

           <div>
                <Link to={`/learn/${props.element.id}`}>
                <button className={Styles.buttonText} >Learn ></button>
                </Link> 
                <Link to={`/shop/${props.element.id}`}>
                <button className={Styles.buttonText}>Shop ></button>
                </Link>
            </div>
         </div>
    );
};

