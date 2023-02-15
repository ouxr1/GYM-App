import React from 'react'
import Featurebox from './Featurebox/Featurebox'
import './Feature.css'
import fimage1 from '../../assets/images/1.svg'
import fimage2 from '../../assets/images/2.svg'
import fimage3 from '../../assets/images/3.svg'
import fimage4 from '../../assets/images/4.svg'

function Feature() {
  return (
    <div id='features'>
        <h1>FEATURE</h1>
        <div className='a-container'>
            <Featurebox image={fimage1} title="Treadmill Workouts"/>
            <Featurebox image={fimage2} title="Elliptical Training"/>
            <Featurebox image={fimage3} title="Swimming Pool"/>
            <Featurebox image={fimage4} title="Group Fitness Classes"/>
        </div>
    </div>
  )
}

export default Feature