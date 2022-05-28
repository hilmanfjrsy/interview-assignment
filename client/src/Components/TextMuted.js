import React from 'react';

export default function TextMuted({ text }) {
  return (
    <div className='text-center'>
      <small className='text-muted'>{text}</small>
    </div>
  )
}