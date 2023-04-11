import {useState} from 'react'

const ClickablePicture = ({img, imgClicked }) => {

        const [userImg, setUserImg] = useState(img)

        const changeImg = () => {
            setUserImg(userImg === img ? imgClicked : img)
        }

        return (
            <div className='clicky'>
                <img src={userImg} alt="" onClick={changeImg}/>
            </div>
        )
    }

    export default ClickablePicture