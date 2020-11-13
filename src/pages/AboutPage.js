import React from 'react';
import Hero from '../componets/Hero';
import Content from '../componets/Content';



function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>My name is Lyric Duda and I am an aspiring web development professional.</p>

            <p>I am currently working though the UCF web development boot camp program to further my skills to then find employment and a origination that I can help improve with my skills.</p>

            <p>I have created various projects to show my skillset and programing knowlage. You can view them on the Projects tab. I also have a "Contact" section that you can send me a inquiry if you like my work and would like to contact me further. You can contact me on the contact tab. </p>

            </Content>
        </div>
    );

}

export default AboutPage;