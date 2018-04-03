import React, { Component } from 'react';
import Card from './Card';

const imageData = [
    {
        name: "vietnam_001.jpg",
        desc: "Cặp đào kép trong một gánh tuồng cổ.",
        takenYear: "1915"
    },
    {
        name: "vietnam_002.jpg",
        desc: "Một gánh tuồng cổ.",
        takenYear: "1915"
    },
    {
        name: "vietnam_003.jpg",
        desc: "Nghệ sĩ tuồng cổ tại Hà Nội",
        takenYear: "1916"
    },
    {
        name: "vietnam_004.jpg",
        desc: "Những cô gái đóng vai con Tốt trong một ván cờ người.",
        takenYear: "1920"
    },
    {
        name: "vietnam_005.jpg",
        desc: "Ni cô",
        takenYear: "1915"
    },
    {
        name: "vietnam_006.jpg",
        desc: "Một viên quan đại thần triều Nguyễn tại Hà Nội",
        takenYear: "1920"
    },
    {
        name: "vietnam_007.jpg",
        desc: "Quan Huyện và nhân viên chính quyền tại một ngôi đình",
        takenYear: "1915"
    }
];

class Album extends Component {

    render() {

        const cardItems = imageData.map((image) => {
            return <Card 
                        key={image.name} 
                        info={image} 
                    />
        });

        return (
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        {cardItems}
                    </div>

                </div>
            </div>
        )
    }

};

export default Album;