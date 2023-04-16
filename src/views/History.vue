<template>
  <div>
    <Breadcrumb breadcrumb="" />
    <!--Banner get you to github repo-->
    <Banner />


    <div class="mt-1">
          <div class="p-3 bg-gray-300 rounded-md shadow-md">     
            <form>
              <div class="grid grid-cols-1 gap-6 mt-2 sm:grid-cols-2">
                <div>
                  <label class="text-gray-900" >Ngày bắt đầu</label>
                  <input
                    class="w-full px-2 py-2 mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                    type="date"
                    v-model="start"
                    
                  />
                </div>
  
                <div>
                  <label class="text-gray-900" 
                    >Ngày kết thúc</label
                  >
                  <input
                    class="w-full px-2 py-2 mt-2 border-gray-200 rounded-md focus:border-indigo-800 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                    type="date"
                    v-model="end"
                  />
                </div>
                
              </div>
            </form>
            <div class="flex justify-end mt-4">
                <button @click="handleDate"
                  class="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-2 rounded-md mr-6"
                >
                  Tra cứu
                </button>
              </div>
          </div>
        </div>

    <div class="flex flex-col mt-4">
      <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-4">
        <div
          class="
            inline-block
            min-w-full
            overflow-hidden
            align-middle
            border-b border-gray-200
            shadow
            sm:rounded-lg
          "
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="
                    px-6
                    py-3
                    text-xs
                    font-medium
                    leading-4
                    tracking-wider
                    text-left text-gray-500
                    uppercase
                    border-b border-gray-200
                    bg-gray-50
                  "
                >
                 chủ phương tiện
                </th>
                <th
                  class="
                    px-6
                    py-3
                    text-xs
                    font-medium
                    leading-4
                    tracking-wider
                    text-left text-gray-500
                    uppercase
                    border-b border-gray-200
                    bg-gray-50
                  "
                >
                   đơn vị cứu hộ
                </th>
                <th
                  class="
                    px-6
                    py-3
                    text-xs
                    font-medium
                    leading-4
                    tracking-wider
                    text-left text-gray-500
                    uppercase
                    border-b border-gray-200
                    bg-gray-50
                  "
                >
                  Trạng thái
                </th>
                <th
                  class="
                    px-6
                    py-3
                    text-xs
                    font-medium
                    leading-4
                    tracking-wider
                    text-left text-gray-500
                    uppercase
                    border-b border-gray-200
                    bg-gray-50
                  "
                >
                Thời gian
                </th>
                <th
                  class="
                    px-6
                    py-3
                    text-xs
                    font-medium
                    leading-4
                    tracking-wider
                    text-left text-gray-500
                    uppercase
                    border-b border-gray-200
                    bg-gray-50
                  "
                >
                  Vị trí cứu hộ
                </th>
                
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr v-for="(u, index) in users" :key="index">
                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                >
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                      <img
                        class="w-10 h-10 rounded-full"
                        :src="u.user.avatar"
                        alt=""
                      />
                    </div>

                    <div class="ml-4">
                      <div class="text-sm font-medium leading-5 text-gray-900">
                        {{ u.user.full_name }}
                      </div>
                      <div class="text-sm leading-5 text-gray-500">
                        {{ u.user.phone }}
                      </div>
                      <div class="text-sm leading-5 text-gray-500">
                        {{ u.user.email }}
                      </div>
                    </div>
                  </div>
                </td>

                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                >
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                      <img
                        class="w-10 h-10 rounded-full"
                       
                        src="https://png.pngtree.com/template/20190323/ourmid/pngtree-robot-logo-design-robot-logo-design-image_82095.jpg"
                        alt=""
                      />
                    </div>

                    <div class="ml-4">
                      <div class="text-sm font-medium leading-5 text-gray-900">
                        {{ u.rescue_unit.name }}
                      </div>
                      <div class="text-sm leading-5 text-gray-500">
                        {{ u.rescue_unit.phone }}
                      </div>
                      <div class="text-sm leading-5 text-gray-500">
                        {{ u.rescue_unit.email }}
                      </div>
                      
                    </div>
                  </div>
                </td>

                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                >
                  <span v-if="u.status==1"
                    class="
                      inline-flex
                      px-2
                      text-xs
                      font-semibold
                      leading-5
                      text-green-800
                      bg-green-100
                      rounded-full
                    "
                    >
                    Hoàn thành
                    </span
                  >

                  <div v-if="u.status==1" class="text-sm px-5 font-medium leading-5 text-red-500">
                        <!-- {{ u.rating }} -->
                        5 sao
                      </div>

                  <span v-if="u.status!=1"
                    class="
                      inline-flex
                      px-2
                      text-xs
                      font-semibold
                      leading-5
                      text-red-800
                      bg-red-100
                      rounded-full
                    "
                    >
                    Đã hủy</span
                  >


                </td>

                <td
                  class="
                    px-6
                    py-4
                    text-sm
                    leading-5
                    text-gray-500
                    border-b border-gray-200
                    whitespace-nowrap
                  "
                >
                  {{ u.created_at }}
                  <div class="text-sm leading-5 text-gray-500">
                        {{ u.date }}
                  </div>

                </td>

                
                
                <td
                  class="
                    px-6
                    py-4
                    text-sm
                    leading-5
                    text-gray-500
                    border-b border-gray-200
                    whitespace-nowrap
                  "
                >
                  {{ u.address }}
                </td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import  API from '../API/API.ts'
//import Breadcrumb from '../partials/Breadcrumb.vue'
export default {
  name: "history-data",
  data(){
    return {
      users: null,
      start: "",
      end: "",
    }
  },
  // async mounted(){
  // const response = await API.getHistory();
  //   this.users = response.data;
  // },
  methods: {
    async handleDate(){
      const response = await API.getHistory(this.start, this.end);
      this.users = response.data.data;
    }
  }
}
</script> 