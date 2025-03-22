import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const token = localStorage.getItem('token'); // Lấy token từ localStorage
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

    return (
        <div style={styles.container}>
            <div style={styles.feedbackBox}>
                <h2 style={styles.title}>View Feedback</h2>
                <ul style={styles.feedbackList}>
                    {feedbacks.map((feedback, index) => (
                        <li key={index} style={styles.feedbackItem}>
                            <strong style={styles.feedbackName}>{feedback.name}</strong> (MSSV: {feedback.mssv}): 
                            <p style={styles.feedbackText}>{feedback.feedbackText}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Chiếm toàn bộ chiều cao màn hình
        backgroundColor: '#f0f2f5', // Màu nền nhẹ
        padding: '2rem',
    },
    feedbackBox: {
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Đổ bóng nhẹ
        width: '100%',
        maxWidth: '600px', // Giới hạn chiều rộng tối đa
    },
    title: {
        textAlign: 'center',
        marginBottom: '1.5rem',
        color: '#333',
    },
    feedbackList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    feedbackItem: {
        marginBottom: '1.5rem',
        padding: '1rem',
        border: '1px solid #ddd',
        borderRadius: '4px',
        backgroundColor: '#f9f9f9',
    },
    feedbackName: {
        display: 'block',
        fontSize: '1.1rem',
        color: '#007bff',
        marginBottom: '0.5rem',
    },
    feedbackText: {
        margin: 0,
        color: '#555',
    },
};

export default ViewFeedback;