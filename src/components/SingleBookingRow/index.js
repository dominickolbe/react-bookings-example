import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import pendingSVG from './pending.svg';
import confirmedSVG from './confirmed.svg';

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  &:not(:last-of-type) {
    border-bottom: 1px solid #D9DBDE;
  }

  .image {
    position: relative;
    height: 40px;
    margin-right: 15px;
    width: 40px;

    img {
      border-radius: 100%;
      width: 100%;
    }

    &:after {
      content: '';
      display: block;
      background-size: cover;
      background-repeat: no-repeat;
      height: 20px;
      width: 20px;
      position: absolute;
      bottom: -5px;
      right: -5px;
    }
    &.pending:after {
      background-image: url(${pendingSVG});
    }
    &.confirmed:after {
      background-image: url(${confirmedSVG});
    }
  }

  .details {
    display: flex;
    flex-direction: row;
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
    width: 90px;

    &.active, &:hover {
      background: #3182EC;
      color: white;
    }
  }

  @media only screen and (max-width : 520px) {
    .details {
      flex-direction: column;
    }
    .time {
      font-size: 12px;
    }
  }
`;

const SingleBookingRow = ({ id, name, time, status, onClick }) => (
  <RowContainer>
    <div
      className={status === 1 ? 'image pending' : 'image confirmed'}
    >
      <img src={`https://randomuser.me/api/portraits/lego/${id}.jpg`} />
    </div>
    <div className="details">
      <div className="name">{name}</div>
      <div className="time">{moment(time).format('ddd DD MMM, hh:mm a')}</div>
    </div>
    <button
      className={status === 1 ? 'active' : ''}
      onClick={onClick}
    >
      {status === 1 ? 'Accept' : 'Cancel'}
    </button>
  </RowContainer>
);

export default SingleBookingRow;
