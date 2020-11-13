import React from 'react';

import Card from '../componets/Card';

import Bookmark from '../assets/images/bookmark.png';
import Horiseon from '../assets/images/horiseon.png';
import Landmark from '../assets/images/landmark.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Bookmark',
                    subTitle: 'A website for a avid reader',
                    imgSrc: Bookmark,
                    link: 'https://whispering-cove-53195.herokuapp.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Horiseon',
                    subTitle: 'A Seo website for the averge joe',
                    imgSrc: Horiseon,
                    link: 'https://lyricsduda.github.io/horiseonWebsite/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Landmark',
                    subTitle: 'A home finder made for you',
                    imgSrc: Landmark,
                    link: 'https://j-nederveld.github.io/Real-Estate-App/',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;