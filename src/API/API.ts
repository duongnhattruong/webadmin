import axios from 'axios';
const API_URL = 'http://localhost:3000';

export default {
  name: "api-app",

  getRescue() {
    return axios.get(API_URL + '/rescue');
  },

  getVehicle() {
    return axios.get(API_URL + '/vehicle');
  },

  deleteRescue(id: string, user: any) {
    return axios.put(API_URL + '/rescue/'+id, user);
  },

  deleteVehicle(id: string, user: any) {
    return axios.put(API_URL + '/vehicle/'+id, user);
  },

  getThongKeR() {
    return axios.get(API_URL + '/thongke-r');
  },

  getThongKeV() {
    return axios.get(API_URL + '/thongke-v');
  },

  getThongKeDon() {
    return axios.get(API_URL + '/thongke-don');
  },

  getThongKeDanhGia() {
    return axios.get(API_URL + '/thongke-dg');
  },
}