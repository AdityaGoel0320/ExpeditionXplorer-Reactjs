import './Trip.css'

function TripData(props){
    let  {image , heading ,  text} = props ; 

    return(
        <div className="t-card">
            <div className="t-image">
                <img src={image} alt="image" />
            </div>
            <h4>{heading}</h4>
            <p>{text}</p>
        </div>
    );
}

export default TripData;