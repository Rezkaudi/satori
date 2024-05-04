import Link from 'next/link'
import Image from 'next/image'


// assets
import NotFoundImage from '../../public/images/404.png'


const NotFound = () => {
    return (

        <div className="notFound">
            <div className="container">
                <div className="imageContainer">
                    <Image src={NotFoundImage} alt={"Not Found page Image"} fill={true} />
                </div>
                <p className="message">Oops! The page you are looking for does not exist.</p>
                <Link href="/" className="link">Go back home</Link>
            </div>
        </div>

    )
}

export default NotFound