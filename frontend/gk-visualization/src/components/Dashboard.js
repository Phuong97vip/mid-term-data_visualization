import React from 'react';

const Dashboard = () => {
    return (
        <div style={styles.dashboard}>
            <h2>Power BI Dashboard</h2>
            <iframe
                title="gk-visualization"
                width="1140"
                height="541.25"
                src="https://app.powerbi.com/reportEmbed?reportId=cca4d497-8d70-4f2c-85c9-b052a3bc034d&autoAuth=true&ctid=40127cd4-45f3-49a3-b05d-315a43a9f033"
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