import Rating from './Rating'

function DriverCard({name, rating, img, car: {model, licensePlate}}){

    return (
        <div className="drivercard">
            <div className="driverpicture">
                <img className="driver-picture" src={img} alt="/" />
            </div>
            <div className='drivertext'>
                <div className='drivername'> {name} </div>
                <Rating>{rating}</Rating>
                <div className='drivercar'> {model} - {licensePlate} </div>
            </div>
        </div>
    )

}

export default DriverCard