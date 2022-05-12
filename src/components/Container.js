import React from "react"

const Container = (props) => (
    <div className={`containerSection ${props.marginTop ? 'containerSectionMargin' : ''}`}>
        {props.children}
    </div>

)

export default Container
