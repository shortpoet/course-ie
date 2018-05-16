import Vue from "vue";
import VueSocketIO from "vue-socket.io";
import socketio from "socket.io-client";

export const socket = socketio("http://localhost:4001");
Vue.use(VueSocketIO, socket);
