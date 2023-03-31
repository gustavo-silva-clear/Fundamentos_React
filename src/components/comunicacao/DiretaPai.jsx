import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {

    return (
        <div>

            <DiretaFilho nome="Gusta" idade={20} nerd={true} />
            <DiretaFilho nome="Ana" idade={17} nerd={false} />

        </div>

    )

}