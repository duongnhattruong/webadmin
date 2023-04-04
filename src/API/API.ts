import axios from "axios";
const API_URL = 'http://localhost:3001/api/v1/admin';
const API_USER = 'http://localhost:3001/api/v1/user';
const API_RES = 'http://localhost:3001/api/v1/rescue-unit';


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

  deleteRescue(user: any) {
    return axios.put(API_URL + '/rescue', user);    //                ok  ------------------------
  },

  deleteVehicle(user_id: any) {
    return axios.put(API_URL + '/vehicle', user_id);   //           ok       ------------------------
  },

  editVehicle(user: any) {
    return axios.put(API_URL + '/update', user);    //           ok       ------------------------
  },

  editRescue(user: any) {
    return axios.put(API_URL + '/updateR', user);
  },

  addRescue(user: any) {
    return axios.post(API_RES + '/signup', user);   //                ok  ------------------------
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