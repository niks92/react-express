import React from 'react';
import { Button, ReactBootstrap, Modal, Form, FormGroup, ControlLabel, FormControl, FieldGroup, Tabs, Tab,Row,Col,Nav,NavItem } from 'react-bootstrap';
import BookAction from '../action/CountryAction';

export default class AddBookModal extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedApplicationToken: '',
            errorField: '',
            errorMessage: ''
        };

        this.addBook = this.addBook.bind(this);
    }

    addBook(){

        let self = this;
        let title = this.refs.title.value;
        let author = this.refs.author.value;
        let isbn = this.refs.isbn.value;

        let postData = {
            "title": title,
            "author": author,
            "isbn": isbn
        };

        BookAction.saveBook(postData).then(function (response) {
            self.props.closeModal(postData);
        }).catch(function (error) {
            console.log(error);
        })

    }



    closeModal(){

        this.props.closeModal();
    }

    render() {

        return (
            <div className="modal-container text-center">
                <Modal show={this.props.showModal} onHide={this.closeModal.bind(this)} container={this} bsSize="md" aria-labelledby="contained-modal-title-md" className="edit-modal">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">Add Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body bsClass="text-left modal-left-content-mod add-ltem-mod" id="add-ltem">
                        <div className="container-fluid">
                            <form onSubmit="" className="form-block line-form-mod">

                                <div className="form-group">
                                    <label htmlFor="IMEI" className="hidden">Title</label>
                                    <input type="text" className="form-control" ref="title" name="name" placeholder="Enter title" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="ICCID" className="hidden">Color</label>
                                    <input type="text" className="form-control" ref="isbn" name="color" placeholder="Enter ISBN" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="ICCID" className="hidden">Model</label>
                                    <input type="text" className="form-control" ref="author" name="model" placeholder="Enter Author" required />
                                </div>

                            </form>

                        </div>

                    </Modal.Body>

                    <Modal.Footer bsStyle="text-center">
                        <Button bsStyle="primary" onClick={this.addBook}>Add</Button>
                    </Modal.Footer>
                </Modal>
                <div className="loader hidden" id="restart-gateway-loader">
                    <div className="first-l">
                        <div className="second-l">
                        </div>
                        <div className="third-l">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
