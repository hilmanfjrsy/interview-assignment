import { faHourglass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function ButtonIcon({ type = 'primary', icon = faHourglass, onClick = () => { } }) {
  return (
    <button className={`btn btn-sm btn-${type}`} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  )
}