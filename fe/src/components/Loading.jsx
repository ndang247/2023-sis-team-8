import React from 'react';
import { Spin } from 'antd';


const Loading = () => {
  const [loading, setLoading] = React.useState(true);

  // Simulate an asynchronous operation (e.g., API request)
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2 second delay
  }, []); 

  return (
    <div>
      {loading ? (
        <Spin size="large" />
      ) : (
        <div>No Response Received</div>
      )}
    </div>
  );
};

export default Loading;