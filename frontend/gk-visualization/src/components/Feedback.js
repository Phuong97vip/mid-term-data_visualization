import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [newFeedback, setNewFeedback] = useState({
        mssv: '',
        name: '',
        feedbackText: '',
    });

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const token = localStorage.getItem('token'); // Lấy token từ localStorage
                console.log("token: ",token)
                const response = await axios.get('http://localhost:8080/api/feedback', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Gửi token trong header
                    },
                });
                setFeedbacks(response.data);
            } catch (error) {
                alert('Failed to fetch feedbacks: ' + error.message);
            }
        };
        fetchFeedbacks();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token'); // Lấy token từ localStorage
            await axios.post(
                'http://localhost:8080/api/feedback',
                newFeedback, // Gửi đối tượng newFeedback
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Gửi token trong header
                    },
                }
            );
            setNewFeedback({ mssv: '', name: '', feedbackText: '' }); // Reset form
            window.location.reload(); // Tải lại trang để hiển thị feedback mới
        } catch (error) {
            alert('Failed to submit feedback: ' + error.message);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewFeedback({
            ...newFeedback,
            [name]: value,
        });
    };

    return (
        <div>
            <h2>Feedback</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>MSSV:</label>
                    <input
                        type="number"
                        name="mssv"
                        value={newFeedback.mssv}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={newFeedback.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Feedback:</label>
                    <input
                        type="text"
                        name="feedbackText"
                        value={newFeedback.feedbackText}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <ul>
                {feedbacks.map((feedback, index) => (
                    <li key={index}>
                        <strong>{feedback.name}</strong> (MSSV: {feedback.mssv}): {feedback.feedbackText}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Feedback;