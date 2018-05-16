const socketIO = require("socket.io");

const setupSockets = server => {
  const io = socketIO(server);

  io.on("connection", socket => {
    console.log("User connected", socket.id);

    socket.on("cart:addItem", item => {
      console.log("Add item to cart", item);
      socket.broadcast.emit("cart:addItem", item);
    });

    socket.on("cart:removeItem", item => {
      console.log("Remove item from cart", item);
      socket.broadcast.emit("cart:removeItem", item);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};

module.exports = setupSockets;
