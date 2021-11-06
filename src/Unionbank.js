import React from 'react'
import Andhrabank from './Andhrabank'
import Corporationbank from './Corporationbank'

export default function Unionbank() {

    let initialdata={
        name:"krishna"
    }
    return (
        <div>
            <Andhrabank location="Amlapuram" data={initialdata}/>
            <Corporationbank location="Gudivada" data={initialdata}/>
        </div>
    )
}
