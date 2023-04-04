<template>
    <div>
    
      <div class="mt-2">
        <h4 class="text-lg font-semibold text-blue-700">Điều chỉnh đơn vị cứu hộ</h4>
  
        
      </div>
  
      <div class="mt-3">
  
        <div class="mt-4">
          <div class="p-6 bg-lime-200 rounded-md shadow-md">     
            <div class="mt-1">
            <router-link 
          to="/rescue"
          class="px-4 py-2 text-gray-900 bg-gray-300 rounded-md hover:bg-blue-400 focus:outline-none"
        >
        ◁ Trở về
          </router-link>
        </div>

            <form>
              <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label class="text-gray-900" >Họ và tên</label>
                  <input
                    class="w-full px-2 py-2 mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                    type="text"
                    v-model="u.name"
                  />
                </div>
  
                <div>
                  <label class="text-gray-900" 
                    >Email</label
                  >
                  <input
                    class="w-full px-2 py-2 mt-2 border-gray-200 rounded-md focus:border-indigo-800 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                    type="email"
                    v-model="u.email"
                  />
                </div>
                
                <div>
                  <label class="text-gray-900">Số điện thoại</label>
                  <input
                    class="w-full px-2 py-2 mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                    type="phone"
                    v-model="u.phone"
                  />
                </div>
  
                <div>
                  <label class="text-gray-900"
                    >Địa chỉ</label
                  >
                  <input
                    class="w-full px-2 py-2 mt-2 border-gray-200 rounded-md focus:border-indigo-800 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                    type="text"
                    v-model="u.address"
                  />
                </div>

                <!-- <div>
                  <label class="text-gray-900" >Mật khẩu</label>
                  <input
                    class="w-full px-2 py-2 mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                    type="password"
                    v-model="u.password"
                  />
                </div> -->
                
                <div>
                  <label class="text-gray-900" 
                    >Loại</label
                  >
                  <select class="w-full px-2 py-2 mt-2 border-gray-200 rounded-md focus:border-indigo-800 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  v-model="u.type" > 
                    <option value="1">Xe ô tô</option>
                    <option value="2">Xe máy</option>
                    
                  </select> 
                </div>

                <div>
                  <label class="text-gray-900" 
                    >Trạng thái</label
                  >
                  <input
                    class="w-full px-2 py-2 mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                    type="text"
                    v-model="u.status_"
                  />
                </div>
              </div>
              
            
            </form>
            <div class="flex justify-end mt-4">
                <button @click="open=true"
                  class="px-4 py-2 text-white-600 bg-green-500 rounded-md hover:bg-blue-400 focus:outline-none"
                >
                  Cập nhật
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>


    <div>
    <div
      :class="`modal ${
        !open && 'opacity-0 pointer-events-none'
      } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
    >
      <div
        @click="open = false"
        class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
      ></div>

      <div
        class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md"
      >
        <div
          class="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close"
        >
          <svg
            class="text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            />
          </svg>
          
        </div>

        <div class="px-6 py-4 text-left modal-content">
          
          <div class="flex items-center justify-between pb-3">
            <p class="text-2xl font-bold">Thông báo</p>
            <div class="z-50 cursor-pointer modal-close" @click="open = true">
              <svg
                class="text-black fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                />
              </svg>
            </div>
          </div>

    
          <p>
            Xác nhận điều chỉnh đơn vị cứu hộ ?
          </p>

          
          <div class="flex justify-end pt-2">
            <button
              @click="open = false"
              class="p-3 px-6 py-3 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none"
            >
              Đóng
            </button>
            <button
              @click="handleEditRescue"
              class="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:bg-lime-600"
            >
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
<script setup lang="ts">
import  API from '../API/API'
import { ref } from 'vue'

var open = ref(false);

let u = {
      id: localStorage.getItem('id'),
      name: localStorage.getItem('name'),
      email: localStorage.getItem('email'),
      phone: localStorage.getItem('phone'),
      password: localStorage.getItem('password'),
      status_: localStorage.getItem('status'),
      status: 0,
      address: localStorage.getItem('address'),
      type: localStorage.getItem('type')
      // lat: localStorage.getItem('lat'),
      // lng: localStorage.getItem('lng')
}
    const handleEditRescue = () =>{
      u.status = parseInt(u.status_);
      console.log(u);
      API.editRescue(u); 
     // console.log(u);
}
  
  console.log("okkkkkk");
      
</script> 

<style>
.modal {
  transition: opacity 0.25s ease;
}
</style> 