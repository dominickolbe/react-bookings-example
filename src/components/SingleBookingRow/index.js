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
    background: #3182EC;
    border-radius: 5px;
    color: white;
    height: 30px;
    font-size: 14px;
    margin-left: auto;
    text-align: center;
    width: 100px;
  }
`;

const SingleBookingRow = ({ id, name, time }) => (
  <RowContainer>
    <img src={`https://randomuser.me/api/portraits/lego/${id}.jpg`} />
    <div className="name">{name}</div>
    <div className="time">{moment(time).format('ddd DD MMM, hh:mm a')}</div>
    <button>Accept</button>
  </RowContainer>
);

export default SingleBookingRow;
