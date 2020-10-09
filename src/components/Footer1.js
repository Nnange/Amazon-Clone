import React from 'react'
import "../CSS/Footer1.css"
import animateScrollTo from 'animated-scroll-to';


const Footer1 = () => {
    

  const handleClick = () => {
        animateScrollTo(0);
    }

    return (
        <div className="footer1" onClick={handleClick}>
            <h3 >Back to  the Top</h3>
        </div>
    )
}

export default Footer1
