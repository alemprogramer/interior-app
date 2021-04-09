import React, { Component } from 'react'

export class Item extends Component {
    render() {
        const { text, title, icon}=this.props;
        return (
            <div className="item">
                <div className="heading">
                    <div className="image float-left">
                        <img src={icon} className="img-fluid" alt="user.png" />
                    </div>
                    <div className="title">
                        <h5>{title}</h5>
                    </div>
                </div>
                <div className="content">
                    <p>{text}</p>
                </div>
            </div>
        )
    }
}

export default Item
