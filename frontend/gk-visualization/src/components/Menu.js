import React from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('token'); // Kiểm tra xem người dùng đã đăng nhập chưa

    const handleSignOut = () => {
        localStorage.removeItem('token'); // Xóa token khỏi localStorage
        navigate('/login'); // Chuyển hướng đến trang đăng nhập
    };

    return (
        <div style={styles.menu}>
            <div style={styles.leftSection}>
                {/* Chỉ hiển thị nút View Feedback khi đã đăng nhập */}
                {isLoggedIn && (
                    <button
                        style={styles.button}
                        onClick={() => navigate('/view-feedback')}
                    >
                        View Feedback
                    </button>
                )}
                <button
                    style={styles.button}
                    onClick={() => navigate('/give-feedback')}
                >
                    Give Feedback
                </button>
                <button
                    style={styles.button}
                    onClick={() => navigate('/dashboard')}
                >
                    Dashboard
                </button>
            </div>
            <div style={styles.rightSection}>
                {isLoggedIn ? (
                    <button
                        style={styles.button}
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </button>
                ) : (
                    <button
                        style={styles.button}
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </button>
                )}
            </div>
        </div>
    );
};

const styles = {
    menu: {
        display: 'flex',
        justifyContent: 'space-between', // Chia đều khoảng cách giữa các phần
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#f0f0f0',
        borderBottom: '1px solid #ccc',
    },
    leftSection: {
        display: 'flex',
        gap: '10px', // Khoảng cách giữa các nút
    },
    rightSection: {
        display: 'flex',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: '#fff',
    },
};

export default Menu;