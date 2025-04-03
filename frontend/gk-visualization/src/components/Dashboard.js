import React from 'react';

const Dashboard = () => {
    return (
        <div style={styles.dashboard}>
            <h2>Power BI Dashboard</h2>
            <iframe
                title="gk-visualization"
                width="1140"
                height="541.25"
                src="https://app.powerbi.com/reportEmbed?reportId=c3f69ec5-429b-4432-b4dd-ba239c92f789&autoAuth=true&ctid=40127cd4-45f3-49a3-b05d-315a43a9f033"
                frameBorder="0"
                allowFullScreen="true"
            ></iframe>
        </div>
    );
};

const styles = {
    dashboard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
    },
};

export default Dashboard;