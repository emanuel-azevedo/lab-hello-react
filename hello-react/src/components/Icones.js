import firstIcon from '../images/icon1.png';
import secondIcon from '../images/icon2.png';
import thirdIcon from '../images/icon3.png';
import fourthIcon from '../images/icon4.png';

function Icones () {
    return (
        <div className='d-flex inline justify-content-between pt-5 pb-5'>
            <div>
                <img className='iconesComponents' src={firstIcon} alt='tool-image'/>
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
            </div>

            <div>
                <img className='iconesComponents' src={secondIcon} alt='laptop-image'/>
                <h2>Components</h2>
                <p>Build encapsulated components that manage theis state.</p>
            </div>

            <div>
                <img className='iconesComponents' src={thirdIcon} alt='screen-image'/>
                <h2>Single-way</h2>
                <p>A set of immutable values are passed to the component.</p>
            </div>

            <div>
                <img className='iconesComponents' src={fourthIcon} alt='second-laptop-image'/>
                <h2>JSX</h2>
                <p>Statically-typed designed to run on modern browsers.</p>
            </div>

        </div>       
    )
}

export default Icones;