import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  &:not(:last-of-type) {
    border-bottom: 1px solid #D9DBDE;
  }

  img {
    border-radius: 100%;
    height: 40px;
    margin-right: 15px;
    width: 40px;
  }

  .name {
    margin-right: 40px;
  }

  button {
    background: #FFF;
    border-radius: 5px;
    border: 1px solid #3182EC;
    color: #3182EC;
    cursor: pointer;
    height: 30px;
    font-size: 14px;
    margin-left: auto;
    text-align: center;
    transition: all 200ms ease;
    width: 100px;

    &.active, &:hover {
      background: #3182EC;
      color: white;
    }
  }
`;

const SingleBookingRow = ({ id, name, time, status, onClick }) => (
  <RowContainer>
    <img src={`https://randomuser.me/api/portraits/lego/${id}.jpg`} />
    <div className="name">{name}</div>
    <div className="time">{moment(time).format('ddd DD MMM, hh:mm a')}</div>
    <button
      className={status === 1 ? 'active' : ''}
      onClick={onClick}
    >
      {status === 1 ? 'Accept' : 'Cancel'}
    </button>
  </RowContainer>
);

export default SingleBookingRow;
