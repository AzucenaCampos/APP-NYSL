import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    selectedMonth: "september",
    selectedOrder: null,
    landscape: window.matchMedia("(min-width: 600px)").matches,
    matches: {
      september: [
        {
          "date": "9/01",
          "fteam": "U1",
          "fimg": "u1.jpg",
          "steam": "U4",
          "simg": "u4.jpg",
          "location": "AJ Katzenmaier",
          "address": "24 W. Walton St., Chicago, IL 60610",
          "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6540604261627!2d-87.63123908505526!3d41.900296372004725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24%20W%20Walton%20St%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1594829285482!5m2!1ses!2sar",
          "time": "9:30 a.m.",
        },
        {
          "date": "9/01",
          "fteam": "U3",
          "fimg": "u3.jpg",
          "steam": "U2",
          "simg": "u2.jpg",
          "location": "Greenbay",
          "address": "1734 N. Orleans St., Chicago, IL 60614",
          "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0256986745426!2d-87.64002798505479!3d41.91380627115881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734%20N%20Orleans%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1594829930321!5m2!1ses!2sar",
          "time": "1.00 p.m.",
        },
        {
          "date": "9/08",
          "fteam": "U5",
          "fimg": "u5.jpg",
          "steam": "U6",
          "simg": "u6.jpg",
          "location": "Howard A Yeager",
          "address": "2245 N. Southport Ave., Chicago, IL 60614",
          "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846845!2d-87.66511458505448!3d41.92326857056615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1594830059033!5m2!1ses!2sar",
          "time": "9:30 a.m.",
        },
        {
          "date": "9/08",
          "fteam": "U6",
          "fimg": "u6.jpg",
          "steam": "U1",
          "simg": "u1.jpg",
          "location": "Marjorie P Hart",
          "address": "2625 N. Orchard St., Chicago, IL 60614",
          "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.2917289530833!2d-87.64808628505426!3d41.929582270170805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625%20N%20Orchard%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1594830120856!5m2!1ses!2sar",
          "time": "1:00 p.m.",
        },
        {
          "date": "9/15",
          "fteam": "U2",
          "fimg": "u2.jpg",
          "steam": "U4",
          "simg": "u4.jpg",
          "location": "North",
          "address": "1409 N. Ogden Ave., Chicago, IL 60610",
          "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3562837030017!2d-87.64765898505507!3d41.90669907160378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33a674ca85d%3A0x9940c7163c4950c5!2s1409%20N%20Ogden%20Ave%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1594830245544!5m2!1ses!2sar",
          "time": "9:30 a.m.",
        },
        {
          "date": "9/15",
          "fteam": "U3",
          "fimg": "u3.jpg",
          "steam": "U5",
          "simg": "u5.jpg",
          "location": "AJ Katzenmaier",
          "address": "24 W. Walton St., Chicago, IL 60610",
          "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6540604261627!2d-87.63123908505526!3d41.900296372004725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24%20W%20Walton%20St%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1594829285482!5m2!1ses!2sar",
          "time": "1:00 p.m.",
        },
        {
          "date": "9/22",
          "fteam": "U1",
          "fimg": "u1.jpg",
          "steam": "U3",
          "simg": "u3.jpg",
          "location": "South",
          "address": "2101 N. Fremont St., Chicago, IL 60614",
          "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.7477648265644!2d-87.65355538505459!3d41.91978077078475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101%20N%20Fremont%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1594830333248!5m2!1ses!2sar",
          "time": "9:30 a.m.",
        },
        {
          "date": "9/22",
          "fteam": "U2",
          "fimg": "u2.jpg",
          "steam": "U6",
          "simg": "u6.jpg",
          "location": "Howard A Yeager",
          "address": "2245 N. Southport Ave., Chicago, IL 60614",
          "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846845!2d-87.66511458505448!3d41.92326857056615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1594830059033!5m2!1ses!2sar",
          "time": "1:00 p.m.",
        },
        {
          "date": "9/29",
          "fteam": "U4",
          "fimg": "u4.jpg",
          "steam": "U5",
          "simg": "u5.jpg",
          "location": "Greenbay",
          "address": "1734 N. Orleans St., Chicago, IL 60614",
          "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0256986745426!2d-87.64002798505479!3d41.91380627115881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734%20N%20Orleans%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1594829930321!5m2!1ses!2sar",
          "time": "9:30 a.m.",
        },
      ],
      october: [
        {
        "date": "10/06",
        "fteam": "U2",
        "fimg": "u2.jpg",
        "steam": "U5",
        "simg": "u5.jpg",
        "location": "Marjorie P Hart",
        "address": "2625 N. Orchard St., Chicago, IL 60614",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.2917289530833!2d-87.64808628505426!3d41.929582270170805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625%20N%20Orchard%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1594830120856!5m2!1ses!2sar",
        "time": "9:30 a.m.",
        },
        {
        "date": "10/06",
        "fteam": "U1",
        "fimg": "u1.jpg",
        "steam": "U6",
        "simg": "u6.jpg",
        "location": "South",
        "address": "2101 N. Fremont St., Chicago, IL 60614",
        "time": "1.00 p.m."
        },    
        {
        "date": "10/13",
        "fteam": "U3",
        "fimg": "u3.jpg",
        "steam": "U4",
        "simg": "u4.jpg",
        "location": "Howard A Yeager",
        "address": "2245 N. Southport Ave., Chicago, IL 60614",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846845!2d-87.66511458505448!3d41.92326857056615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1594830059033!5m2!1ses!2sar",
        "time": "9:30 a.m."
        },
        {
        "date": "10/13",
        "fteam": "U5",
        "fimg": "u5.jpg",
        "steam": "U1",
        "simg": "u1.jpg",
        "location": "Greenbay",
        "address": "1734 N. Orleans St., Chicago, IL 60614",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0256986745426!2d-87.64002798505479!3d41.91380627115881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734%20N%20Orleans%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1594829930321!5m2!1ses!2sar",
        "time": "1:00 p.m."
        },
        {
        "date": "10/20",
        "fteam": "U6",
        "fimg": "u6.jpg",
        "steam": "U3",
        "simg": "u3.jpg",
        "location": "North",
        "address": "1409 N. Ogden Ave., Chicago, IL 60610",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3562837030017!2d-87.64765898505507!3d41.90669907160378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33a674ca85d%3A0x9940c7163c4950c5!2s1409%20N%20Ogden%20Ave%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1594830245544!5m2!1ses!2sar",
        "time": "9:30 a.m."
        },
        {
        "date": "10/20",
        "fteam": "U2",
        "fimg": "u2.jpg",
        "steam": "U4",
        "simg": "u4.jpg",
        "location": "Marjorie P Hart",
        "address": "2625 N. Orchard St., Chicago, IL 60614",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.2917289530833!2d-87.64808628505426!3d41.929582270170805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625%20N%20Orchard%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1594830120856!5m2!1ses!2sar",
        "time": "1:00 p.m."
        },
        {
        "date": "10/26",
        "fteam": "U3",
        "fimg": "u3.jpg",
        "steam": "U1",
        "simg": "u1.jpg",
        "location": "AJ Katzenmaier",
        "address": "24 W. Walton St., Chicago, IL 60610",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6540604261627!2d-87.63123908505526!3d41.900296372004725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24%20W%20Walton%20St%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1594829285482!5m2!1ses!2sar",
        "time": "9:30 a.m."
        },
        {
        "date": "10/27",
        "fteam": "U5",
        "fimg": "u5.jpg",
        "steam": "U6",
        "simg": "u6.jpg",
        "location": "Howard A Yeager",
        "address": "2245 N. Southport Ave., Chicago, IL 60614",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846845!2d-87.66511458505448!3d41.92326857056615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1594830059033!5m2!1ses!2sar",
        "time": "1:00 p.m."
        },
        {
        "date": "10/29",
        "fteam": "U4",
        "fimg": "u4.jpg",
        "steam": "U5",
        "simg": "u5.jpg",
        "location": "Greenbay",
        "address": "1734 N. Orleans St., Chicago, IL 60614",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0256986745426!2d-87.64002798505479!3d41.91380627115881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734%20N%20Orleans%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1594829930321!5m2!1ses!2sar",
        "time": "9:30 a.m."
        }]
    }
  },
  mutations: {
    changeUserInfo(state, payload){
      state.user= payload
    },
    listenUser(state){
      firebase.auth().onAuthStateChanged(user => {
        if(user){
          state.user = user
        }else{
          state.user = null
        }
      })
    },
    insertInfogame(state, payload){
      state.myInfogame[payload.date] = payload.game
    },
    changeSelectedMonth(state, payload){
      state.selectedMonth= payload
    },
    listenResize(state){
      window.addEventListener('resize', () => state.landscape = window.matchMedia("(min-width: 600px)").matches)
    
    },
    changeOrder(state, payload){
      state.selectedOrder = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
