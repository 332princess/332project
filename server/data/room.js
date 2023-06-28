let Rooms = [
  {
    title: 'room1',
    users: ['jiyoung', 'user1'],
    id: 1,
  },
  {
    title: 'room3',
    users: ['jiyoung', 'user2'],
    id: 2,
  },
];

function setMessage(title, user, message) {
  Rooms.forEach((room) => {
    if (room.title === title) {
      if (!room.messages) {
        room.messages = [];
      }
      room.messages.push({ user, message });
    }
  });

  return { user, message };
}

function getRooms() {
  return Rooms;
}

function getRoom(title) {
  const room = Rooms.find((room) => room.title === title);
  return room;
}

function getRoomById(id) {
  const filtered = Rooms.find((room) => room.id === id);
  return filtered;
}

function addUserToRoom(username, title) {
  let alreadyIn = false;
  const room = Rooms.find((room) => room.title === title);
  if (room) {
    room.users.forEach((user) => {
      if (user === username) {
        alreadyIn = true;
      }
    });
    if (!alreadyIn) {
      room.users.push(username);
    }
  }
  return room;
}

function createRoom(title, user) {
  const newRoom = {
    title,
    users: [user],
    id: Date.now(),
  };
  Rooms.push(newRoom);
  return Rooms;
}

module.exports = {
  setMessage,
  getRooms,
  getRoom,
  getRoomById,
  addUserToRoom,
  createRoom,
};
