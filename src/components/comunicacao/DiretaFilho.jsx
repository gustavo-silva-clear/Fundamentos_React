import React from  'react'

export default props => {

return (

    <div>
        <span>{props.nome} com  </span>
        <span>{props.idade} anos</span>
        <span>{props.nerd ? ' é nerd' : ' não é nerd'}!</span>
    </div>
)

}