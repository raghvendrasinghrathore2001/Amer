import React, { Component } from 'react';
import './Details.css'

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            dob: '',
            mobileNo: '',
            aadharCard: '',
            numTickets: 0,
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // You can add your form submission logic here
        console.log('Form Data:', this.state);
        // Reset the form after submission
        this.setState({
            name: '',
            dob: '',
            mobileNo: '',
            aadharCard: '',
            numTickets: 0,
        });
    };

    render() {
        return (
            <div className='main'>
                <h1>Ticket Booking </h1>
                <div className='form'>
                    <form className='name' onSubmit={this.handleSubmit}>
                        <div>
                            <label >Name:</label>
                            <input className='one'
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <label >Date of Birth:</label>
                            <input className='dateofbirth'
                                type="date"
                                name="dob"
                                value={this.state.dob}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <label >Mobile Number:</label>
                            <input className='mobile'
                                type="text"
                                name="mobileNo"
                                value={this.state.mobileNo}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <label>Aadhar Card:</label>
                            <input className='one'
                                type="text"
                                name="aadharCard"
                                value={this.state.aadharCard}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <label >Number of Tickets:</label>
                            <input className='ticket'
                                type="number"
                                name="numTickets"
                                value={this.state.numTickets}
                                onChange={this.handleChange}
                            />
                        </div>
                        <button className='but1' type="submit">Submit</button>
                    </form>
                </div>


            </div>
        );
    }
}

export default Details;
