import React, { useState, useMemo } from 'react';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';
import { Slider } from 'antd';

const FeedbackSlider = ({ max, min }) => {
  const [value, setValue] = useState(0);

  const mid = useMemo(() => Number(((max - min) / 2).toFixed(5)), [max, min]);
  const isValueGreaterThanMid = value >= mid;

  return (
    <div className="icon-wrapper">
      <FrownOutlined className={isValueGreaterThanMid ? '' : 'icon-wrapper-active'} />
      <Slider max={max} min={min} onChange={setValue} value={value} />
      <SmileOutlined className={isValueGreaterThanMid ? 'icon-wrapper-active' : ''} />
    </div>
  );
};

export default FeedbackSlider;
