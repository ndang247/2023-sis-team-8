import React, { useState } from 'react';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import { Slider, message } from 'antd';

const IconSlider = (props) => {
  const { max, min } = props;
  const [value, setValue] = useState(0);
  const [interacted, setInteracted] = useState(false); // state variable to handle interaction

  const mid = Number(((max - min) / 2).toFixed(5));
  const preColorCls = value >= mid ? '' : 'icon-wrapper-active';
  const nextColorCls = value >= mid ? 'icon-wrapper-active' : '';

  const handleChange = (newValue) => {
    setValue(newValue);
    setInteracted(true); // handle the change
  };

  if (interacted) {
    message.info('Thankyou for your feedback'); //message being outputted
  }

  return (
    <div className="icon-wrapper">
      <LikeOutlined className={preColorCls} />
      <Slider {...props} onChange={handleChange} value={value} />
      <DislikeOutlined className={nextColorCls} />
    </div>
  );
};

export const FeedbackSlider = (props) => <IconSlider min={0} max={5} {...props} />;
