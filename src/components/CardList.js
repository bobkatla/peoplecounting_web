import React from 'react';
import Card from './Card';

const CardList = ({buildings}) => {
    // console.log(buildings);
    return (
        <div>
            {
                buildings.map(building => {
                    // console.log(building.id);
                    return(
                        <Card
                            key={building.id} 
                            id={building.id} 
                            name={building.name} 
                            count={building.count}
                            imgsrc={building.image}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;