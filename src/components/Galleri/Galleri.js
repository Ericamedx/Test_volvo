import React, { useEffect, useState } from 'react';
import Styles from './Galleri.module.css';
import { Annons } from '../Annons/Annons';
import Carousel from 'react-bootstrap/Carousel';

export function Galleri (){
    const [data, setData] = useState(null);
    const [index, setIndex] = useState(0);
    var itemsPerSlide = 4;

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      };

    useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/api/cars.json')
        .then(function(res){
            return res.json()
        }).then(function(data){ // store Data in State Data Variable
            setData(data)
        }).catch(
            function(err){
            console.log(err, ' error')
            }
        );

    }, []);
    
    console.log(data)

    return(
        <div>
        <Carousel className={Styles.Galleri} interval={null} indicators={false}
                onSelect={handleSelect}>
            
            { data !== null ? 
             data.map((element, i) => 
                <Carousel.Item >
                    <Annons element={element}/>
                    <Annons element={element}/>
                    <Annons element={element}/>
                    <Annons element={element}/>
                </Carousel.Item>
             )  
             
            :
                <p>ingen data</p>
             }

        
        </Carousel>
        
        </div>
    );
};

