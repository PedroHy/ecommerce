import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

export default function Slider() {
    return (
        <div className='hero mt-16 h-64 md:h-80 md:mt-28 min-h-64 bg-zinc-400 sticky'>
            <Carousel>
                <Carousel.Item>
                    <div className='h-64 md:h-80 bg-blue-400'></div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='h-64 md:h-80 bg-red-400'></div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='h-64 md:h-80 bg-green-400'></div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}