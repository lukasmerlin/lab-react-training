function IdCard({lastName, firstName, gender, height, birth, picture }){

    
    return (

        <div className="idcard">
            <div className="idpicture">
                <img src={picture} alt="Bild" />
            </div>
            <div className="textfield">
                <span><b>First name:</b>{firstName}</span><br/>
                <span><b>Last name:</b> {lastName}</span><br/>
                <span><b>Gender:</b> {gender}</span><br/>
                <span><b>Height:</b> {height}</span><br/>
                <span><b>Birth:</b> {birth.toUTCString()}</span><br/>
            </div>
        </div>
    )

}

export default IdCard