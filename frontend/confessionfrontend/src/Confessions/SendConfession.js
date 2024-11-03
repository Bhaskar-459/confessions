import React, { useState } from 'react';
import CryptoJS from 'crypto-js'; // Import CryptoJS
import './SendCofession.css';

const SendConfession = () => {
    const [receiver, setReceiver] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const sender = localStorage.getItem('username'); // Get sender from localStorage

        if (!sender) {
            alert('User not logged in.');
            return;
        }

        // Encrypt the message using a secret key
        const secretKey = 'your-secret-key'; // Replace with a secure key or environment variable
        const encryptedMessage = CryptoJS.AES.encrypt(message, secretKey).toString();

        try {
            const response = await fetch('http://localhost:5000/api/sendmsg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ sender, reciever: receiver, message: encryptedMessage }),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Confession sent successfully!');
                setReceiver('');
                setMessage('');
            } else {
                alert(data.message || 'Failed to send confession.');
            }
        } catch (error) {
            console.error('Error sending confession:', error);
            alert('An error occurred while sending the confession. Please try again.');
        }
    };

    return (
        <div>
            <h2>Send a Confession</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="receiver">Receiver:</label>
                    <input
                        type="text"
                        id="receiver"
                        value={receiver}
                        onChange={(e) => setReceiver(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default SendConfession;
