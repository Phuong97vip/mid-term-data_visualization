import React, { useState } from 'react';
import axios from 'axios';

const GiveFeedback = () => {
    const [newFeedback, setNewFeedback] = useState({
        mssv: '',
        name: '',
        feedbackText: '',
    });

    const [thankYouMessage, setThankYouMessage] = useState(''); // State để lưu trữ thông báo cảm ơn

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                'http://localhost:8080/api/feedback',
                newFeedback // Gửi đối tượng newFeedback
            );
            setNewFeedback({ mssv: '', name: '', feedbackText: '' }); // Reset form
            setThankYouMessage(`Cảm ơn ${newFeedback.name} đã góp ý!`); // Cập nhật thông báo cảm ơn
            alert('Feedback submitted successfully!');
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
        <div style={styles.container}>
            <div style={styles.feedbackBox}>
                <h2 style={styles.title}>Give Feedback</h2>
                {thankYouMessage && <p style={styles.thankYouMessage}>{thankYouMessage}</p>} {/* Hiển thị thông báo cảm ơn */}
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>MSSV:</label>
                        <input
                            type="number"
                            name="mssv"
                            value={newFeedback.mssv}
                            onChange={handleInputChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={newFeedback.name}
                            onChange={handleInputChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Feedback:</label>
                        <textarea
                            name="feedbackText"
                            value={newFeedback.feedbackText}
                            onChange={handleInputChange}
                            style={{ ...styles.input, height: '100px' }} // Textarea cao hơn
                            required
                        />
                    </div>
                    <button type="submit" style={styles.button}>Submit</button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Chiếm toàn bộ chiều cao màn hình
        backgroundColor: '#f0f2f5', // Màu nền nhẹ
    },
    feedbackBox: {
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Đổ bóng nhẹ
        width: '100%',
        maxWidth: '400px', // Giới hạn chiều rộng tối đa
    },
    title: {
        textAlign: 'center',
        marginBottom: '1.5rem',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '1rem',
    },
    label: {
        display: 'block',
        marginBottom: '0.5rem',
        color: '#555',
    },
    input: {
        width: '100%',
        padding: '0.75rem',
        borderRadius: '4px',
        border: '1px solid #ddd',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.3s ease',
    },
    inputFocus: {
        borderColor: '#007bff', // Màu border khi input được focus
    },
    button: {
        width: '100%',
        padding: '0.75rem',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#0056b3', // Màu nút khi hover
    },
    thankYouMessage: {
        textAlign: 'center',
        color: '#28a745', // Màu xanh lá cây để hiển thị thông báo thành công
        marginBottom: '1rem',
    },
};

export default GiveFeedback;