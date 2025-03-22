import React, { useState, useEffect, useRef } from 'react';

function PowerBIDashboard({ embedUrl, height = '600px', width = '800px' }) {
  const [isLoading, setIsLoading] = useState(true); // Thêm state loading
  const [error, setError] = useState(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    if (!embedUrl) {
      setError("Embed URL is required.");
      setIsLoading(false); // Dừng loading nếu không có URL
      return;
    }

    try {
      new URL(embedUrl);
    } catch (_) {
      setError("Invalid Embed URL.");
      setIsLoading(false);
      return;
    }

    setError(null);

    const handleLoad = () => {
      setIsLoading(false); // Dừng loading khi iframe tải xong
      console.log("Power BI dashboard loaded.");
    };

    const handleError = () => {
      setError("Failed to load Power BI dashboard. Please check your embed URL and network connection.");
      setIsLoading(false); // Dừng loading khi có lỗi
    }

    if(iframeRef.current){
        iframeRef.current.addEventListener('load', handleLoad);
        iframeRef.current.addEventListener('error', handleError);
    }

    return () => {
      if(iframeRef.current){
          iframeRef.current.removeEventListener('load', handleLoad);
          iframeRef.current.removeEventListener('error', handleError);
      }
    };
  }, [embedUrl]);

  if (error) {
    return <div style={{ color: 'red' }}>Error: {error}</div>; // Hiển thị lỗi rõ ràng hơn
  }

  if (isLoading) {
    return <div>Loading Power BI Dashboard...</div>; // Hiển thị loading message
    // Hoặc sử dụng một spinner component đẹp hơn:
    // return <Spinner />;
  }

  return (
    <iframe
      ref={iframeRef}
      title="Power BI Dashboard"
      width={width}
      height={height}
      src={embedUrl}
      frameBorder="0"
      allowFullScreen={true}
    />
  );
}
export default PowerBIDashboard;