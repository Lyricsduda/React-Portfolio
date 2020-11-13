import Hero from '../componets/Hero'
import Carousel from '../componets/Carousel'

function HomePage(props){
    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
        <Carousel />
        </div>
    );
}

export default HomePage