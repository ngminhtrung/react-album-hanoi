import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        const thumbnailURL = process.env.PUBLIC_URL + `/resource/${this.props.info.name}`;
        return (
            <div className="col-md-4 d-flex align-items-sketch">
                <div className="card mb-0 my-3 box-shadow">
                    <img className="img-thumbnail" src={thumbnailURL} /> 
                    <div className="card-body">
                        <p className="card-text"> {this.props.info.desc}</p>
                        <div className="d-flex justify-content-between align-items-center">
                                <button className="btn btn-sm btn-outline-secondary" onClick={this.openModal}>View</button>
                                <Modal
                                    isOpen={this.state.modalIsOpen}
                                    onAfterOpen={this.afterOpenModal}
                                    onRequestClose={this.closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal">
                                        <p className="text-center">{this.props.info.desc}</p>
                                        <img src={thumbnailURL} />
                                        <button onClick={this.closeModal}>close</button>
                                </Modal>
                            <small className="text-muted">Năm chụp: {this.props.info.takenYear}</small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Card;