import { ref } from "vue";

export interface IUser {
    name: string;
    email: string;
    phone: string;
    password: string;
    status: string;
    address: string;
    avatar: string;
  }

export function rescueData(){

const datas = ref<IUser[]>([
{
  name: "Nhật Trường 1",
  email: "truong@gmail.com",
  phone: "0389047388",
  password: "passwordkaushdfasdfasd",
  status: "Hoạt động",
  address: "122 Sóc Trăng, Việt Nam",
  avatar: "https://cover-talk.zadn.vn/c/c/6/6/10/31b1bd1f591981a1b9a8e3efd5c710f7.jpg"
},
  {
  name: "Nhật Trường 2",
  email: "truong@gmail.com",
  phone: "0389047381",
  password: "passwordkaushdfasdfasd",
  status: "Hoạt động",
  address: "122 Sóc Trăng, Việt Nam",
  avatar: "https://cover-talk.zadn.vn/c/c/6/6/10/31b1bd1f591981a1b9a8e3efd5c710f7.jpg"
},
{
  name: "Nhật Trường 3",
  email: "truong@gmail.com",
  phone: "0389047382",
  password: "passwordkaushdfasdfasd",
  status: "Hoạt động",
  address: "122 Sóc Trăng, Việt Nam",
  avatar: "https://cover-talk.zadn.vn/c/c/6/6/10/31b1bd1f591981a1b9a8e3efd5c710f7.jpg"
},
{
  name: "Nhật Biên 3",
  email: "bien@gmail.com",
  phone: "0389047382",
  password: "passwordkaushdfasdfasd",
  status: "Hoạt động",
  address: "122 Sóc Trăng, Việt Nam",
  avatar: "https://zpsocial-f52-org.zadn.vn/a72fa7af297cc7229e6d.jpg"
},
{
  name: "Nhật Trường 4",
  email: "truong@gmail.com",
  phone: "0389047383",
  password: "passwordkaushdfasdfasd",
  status: "Hoạt động",
  address: "122 Sóc Trăng, Việt Nam",
  avatar: "https://cover-talk.zadn.vn/c/c/6/6/10/31b1bd1f591981a1b9a8e3efd5c710f7.jpg"
},
{
  name: "Nhật Trường 1",
  email: "truong@gmail.com",
  phone: "0389047388",
  password: "passwordkaushdfasdfasd",
  status: "Hoạt động",
  address: "122 Sóc Trăng, Việt Nam",
  avatar: "https://cover-talk.zadn.vn/c/c/6/6/10/31b1bd1f591981a1b9a8e3efd5c710f7.jpg"
},
  {
  name: "Nhật Trường 2",
  email: "truong@gmail.com",
  phone: "0389047381",
  password: "passwordkaushdfasdfasd",
  status: "Hoạt động",
  address: "122 Sóc Trăng, Việt Nam",
  avatar: "https://cover-talk.zadn.vn/c/c/6/6/10/31b1bd1f591981a1b9a8e3efd5c710f7.jpg"
},
{
  name: "Nhật Trường 3",
  email: "truong@gmail.com",
  phone: "0389047382",
  password: "passwordkaushdfasdfasd",
  status: "Hoạt động",
  address: "122 Sóc Trăng, Việt Nam",
  avatar: "https://cover-talk.zadn.vn/c/c/6/6/10/31b1bd1f591981a1b9a8e3efd5c710f7.jpg"
},
{
  name: "Nhật Biên 3",
  email: "bien@gmail.com",
  phone: "0389047382",
  password: "passwordkaushdfasdfasd",
  status: "Hoạt động",
  address: "122 Sóc Trăng, Việt Nam",
  avatar: "https://zpsocial-f52-org.zadn.vn/a72fa7af297cc7229e6d.jpg"
},
{
  name: "Nhật Trường 4",
  email: "truong@gmail.com",
  phone: "0389047383",
  password: "passwordkaushdfasdfasd",
  status: "Hoạt động",
  address: "122 Sóc Trăng, Việt Nam",
  avatar: "https://cover-talk.zadn.vn/c/c/6/6/10/31b1bd1f591981a1b9a8e3efd5c710f7.jpg"
},
])
return datas
}

