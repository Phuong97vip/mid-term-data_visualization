import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State để hiển thị thông báo lỗi
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        // Tạo đối tượng LoginRequest
        const loginRequest = {
            username: username,
            password: password,
        };

        try {
            // Gửi yêu cầu POST đến backend
            const response = await axios.post('http://localhost:8080/api/auth/login', loginRequest);
            console.log('Response from server:', response.data); // Debug: Kiểm tra phản hồi từ backend
            // Kiểm tra phản hồi từ backend
            if (response.data && response.data.token) { // Kiểm tra trường "token" thay vì "jwt"
                // Lưu token vào localStorage
                localStorage.setItem('token', response.data.token); // Lưu trường "token"
                console.log('Token saved:', response.data.token); // Debug: Kiểm tra token
        
                // Chuyển hướng đến trang dashboard sau khi đăng nhập thành công
                navigate('/dashboard');
            } else {
                setError('Invalid response from server'); // Hiển thị thông báo lỗi
            }
        } catch (error) {
            // Xử lý lỗi từ backend
            if (error.response) {
                // Lỗi từ phía server (ví dụ: 401 Unauthorized)
                setError(error.response.data.message || 'Login failed');
            } else if (error.request) {
                // Lỗi không nhận được phản hồi từ server
                setError('No response from server');
            } else {
                // Lỗi khác
                setError('An error occurred: ' + error.message);
            }
            console.error('Login error:', error); // Debug: In lỗi ra console
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.loginBox}>
                <h2 style={styles.title}>Login</h2>
                {error && <p style={styles.error}>{error}</p>} {/* Hiển thị thông báo lỗi */}
                <form onSubmit={handleLogin} style={styles.form}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input}
                            required
                        />
                    </div>
                    <button type="submit" style={styles.button}>Login</button>
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
    loginBox: {
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
    error: {
        color: '#ff4d4f',
        textAlign: 'center',
        marginBottom: '1rem',
    },
};

export default Login;