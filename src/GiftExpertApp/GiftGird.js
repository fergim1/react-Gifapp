import React, { Fragment } from 'react';
import { useFetchGifs } from './hooks/useFetchGifs';
import ShowGifts from './ShowGifts'

const GiftGird  = ( { category } ) => {

    const { data:images , loading } = useFetchGifs( category )

    return(
        <Fragment>

            { loading && <p> Cargando...</p>}

            <h3> { category } </h3>
            <div className='card-grid'>
                {
                    images.map ( gift => {
                        return (
                            <ShowGifts
                                key = { gift.id }
                                { ...gift }    
                            />                    
                        )
                    })
                }
            </div>
        </Fragment>
    )
}

export default GiftGird;