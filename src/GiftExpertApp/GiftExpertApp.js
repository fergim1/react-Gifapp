import React, { Fragment, useState } from  'react';
import AddCategory from './AddCategory/AddCategory'
import GiftGird from './GiftGird'

const GiftExpertApp = ( ) => {

    const [ categories, setCategories ] = useState([ 'Simpson' ])

    return(
        <Fragment>
        <h2>GiftExpertApp</h2>
        <AddCategory setCategories= { setCategories }/>
        <hr />
        <ul>
            {
                categories.map ( category => {
                    return (
                        <GiftGird  
                            key={ category }
                            category= { category }  
                        />    
                    )
                                            
                })
            }
        </ul>

        </Fragment>
    )
}

export default GiftExpertApp;