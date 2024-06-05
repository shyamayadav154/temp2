import Image from "next/image"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const img1 =
    "https://images.unsplash.com/photo-1426086800127-2601510ca027?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const img2 =
    "https://plus.unsplash.com/premium_photo-1679400988748-f9d191256ef9?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const img3 =
    "https://images.unsplash.com/photo-1504970544576-86deafcd75ba?q=80&w=2180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const FullWidthCarousel = () => {
    return (
        <Carousel showArrows={true} showStatus={false} infiniteLoop={true} autoPlay={true} interval={5000}>
            <div>
                <Image src={img1} alt="Image 1" height={500} width={1000} />
            </div>
            <div>
                <img src={img2} alt="Image 2" height={500} width={1000} />
            </div>
            <div>
                <img src={img3} alt="Image 3" height={500} width={1000} />
            </div>
        </Carousel>
    )
}

export default FullWidthCarousel
