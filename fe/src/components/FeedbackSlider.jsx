import React, { useState } from 'react';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';
import { Slider } from 'antd';

const FeedbackSlider = ({ max, min }) => {
  const [value, setValue] = useState(0);

  const mid = Number(((max - min) / 2).toFixed(5));
  const preColorCls = value >= mid ? '' : 'icon-wrapper-active';
  const nextColorCls = value >= mid ? 'icon-wrapper-active' : '';

  return (
    <div className="icon-wrapper">
      <FrownOutlined className={preColorCls} />
      <Slider max={max} min={min} onChange={setValue} value={value} />
      <SmileOutlined className={nextColorCls} />
    </div>
  );
};

export default FeedbackSlider;
