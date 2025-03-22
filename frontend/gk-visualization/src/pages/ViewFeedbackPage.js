import React from 'react';
import Menu from '../components/Menu';
import ViewFeedback from '../components/ViewFeedback';

const ViewFeedbackPage = () => {
    return (
        <div style={styles.container}>
            {/* Menu ở trên */}
            <Menu />

            {/* Component đặc trưng của FeedbackPage */}
            <div style={styles.content}>
                <ViewFeedback />
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh', // Chiếm toàn bộ chiều cao màn hình
    },
    content: {
        flex: 1, // Chiếm phần còn lại của màn hình
        padding: '20px',
        overflowY: 'auto', // Cho phép cuộn nếu nội dung dài
    },
};

export default ViewFeedbackPage;