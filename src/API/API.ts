import axios from "axios";
const API_URL = 'http://localhost:3001/api/v1/admin';
const API_USER = 'http://localhost:3001/api/v1/user';


export default {
  name: "api-app",

  getRescue() {
    return axios.get(API_URL + '/rescue');    //                ok  ------------------------
  },

  getVehicle() {
    return axios.get(API_URL + '/vehicle');   //                ok  ------------------------
  },

  getVehicleById(id: string) {
    return axios.get(API_URL + '/vehicle/'+id);
  },

  deleteRescue(id: string, user: any) {
    return axios.put(API_URL + '/rescue/'+id, user);
  },

  deleteVehicle(id: string, user: any) {
    return axios.put(API_URL + '/vehicle/'+id, user);
  },

  editVehicle(id: string, user: any) {
    return axios.put(API_URL + '/vehicle/'+id, user);
  },

  editRescue(id: string, user: any) {
    return axios.put(API_URL + '/rescue/'+id, user);
  },

  addRescue(user: any) {
    return axios.post(API_URL + '/rescue/', user);
  },

  addVehicle(user: any) {
    return axios.post(API_USER + '/signup', user);   //                ok  ------------------------
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

  getHistory(start: string, end: string) {
    return axios.get(API_URL + '/history');
  },
}