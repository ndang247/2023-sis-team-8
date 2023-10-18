import React, { useState } from 'react';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import { Slider } from 'antd';

const IconSlider = (props) => {
  const { max, min } = props;
  const [value, setValue] = useState(0);
  const mid = Number(((max - min) / 2).toFixed(5));
  const preColorCls = value >= mid ? '' : 'icon-wrapper-active';
  const nextColorCls = value >= mid ? 'icon-wrapper-active' : '';
  
  return (
    <div className="icon-wrapper">
      <LikeOutlined className={preColorCls} />
      <Slider {...props} onChange={setValue} value={value} />
      <DislikeOutlined className={nextColorCls} />
    </div>
  );
};

export const FeedbackSlider = (props) => <IconSlider min={0} max={5} {...props} />;