import React from 'react'

const RecipeInstructions = ({instructions}) => {

    const steps = instructions.split("\r\n").filter(s => s.trim !== "");

  return (
    <div>
        <h4>Preparation Instructions:</h4>
        {steps.map((step,index) => (
            <p key={index}> {step} </p>
        ))}
    
    </div>
  )
}

export default RecipeInstructions