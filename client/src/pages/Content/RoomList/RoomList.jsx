import React from 'react';
import Room from './Room';

const RoomList = ({ roomList, onClickRoom }) => {
  console.log(roomList);

  if (!roomList || !Array.isArray(roomList) || roomList.length === 0) {
    return <div>No rooms available</div>;
  }

  return (
    <div>
      <ul className="rooms">
        {roomList.map((room) => (
          <Room room={room.title} onClickRoom={onClickRoom} key={room.title} />
        ))}
      </ul>
    </div>
  );
};

export default RoomList;
