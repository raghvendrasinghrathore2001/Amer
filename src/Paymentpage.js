import React, { useState } from 'react';
import QRCode from 'qrcode.react'; // You'll need to install this package
import './Paymentpage.css';
const PaymentPage = () => {
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const [paymentSubmitted, setPaymentSubmitted] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would typically send the data to your server or a payment processor
        console.log('Payment submitted');
        // Generate a transaction ID for the QR code
        setTransactionId(Math.floor(Math.random() * 1000000));
        setPaymentSubmitted(true);
    };

    return (
        <div className='payment'>
            <h2 className='ab'>Payment Details</h2>
            <div className='two'>
                {!paymentSubmitted ? (

                    <form  className='fm' onSubmit={handleSubmit}>
                        <label>
                            Payment Method:
                            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                                <option value="creditCard">Credit Card</option>
                                <option value="debitCard">Debit Card</option>
                                <option value="phonePe">PhonePe</option>
                                <option value="paytm">Paytm</option>
                            </select>
                        </label>
                        {paymentMethod === 'creditCard' || paymentMethod === 'debitCard' ? (
                            <>
                                <label>
                                    Name on Card:
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                                </label><br></br><br></br>
                                <label>
                                    Card Number:
                                    <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
                                </label>
                                <label>
                                    Expiry Date:
                                    <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
                                </label><br></br><br></br>
                                <label>
                                    CVV:
                                    <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
                                </label><br></br><br></br>
                            </>
                        ) : (
                            // For PhonePe and Paytm, you might redirect the user to the respective site
                            <p>You will be redirected to {paymentMethod} to complete your purchase.</p>
                        )}
                        <button className='buttonsub' type="submit">Submit Payment</button>
                    </form>
                    
                ) : (
                    // Display QR code after form submission
                    <>
                        <h2>Payment Submitted</h2>
                        <p> Your transaction ID is {transactionId}.</p>
                        <p>Here is your Entry Pass</p><br></br>
                        <QRCode value={`https://your-payment-processor.com/${transactionId}`} />
                    </>
                )}
            </div>
        </div>
    );
};

export default PaymentPage;
