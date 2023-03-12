<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = false"
      class="
        fixed
        inset-0
        z-20
        transition-opacity
        bg-black
        opacity-50
        lg:hidden
      "
    ></div>
    <!-- End Backdrop -->

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="
        fixed
        inset-y-0
        left-0
        z-30
        w-64
        overflow-y-auto
        transition
        duration-300
        transform
        bg-gray-900
        lg:translate-x-0 lg:static lg:inset-0
      "
    >
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          <svg
            class="w-8 h-8 ml-2 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            ></path>
          </svg>

          <span class="mx-2 text-2xl font-semibold text-white">BITRU</span>
        </div>
      </div>

      <nav class="mt-10">
        <p class="pl-4 text-xs font-semibold mb-4 text-gray-400">QUẢN LÝ</p>
        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'VehicleOwner' ? activeClass : inactiveClass]"
          to="/vehicleOwner"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>

          <span class="mx-4">Chủ phương tiện</span>
        </router-link>


        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Rescue' ? activeClass : inactiveClass]"
          to="/rescue"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>

          <span class="mx-4">Đơn vị cứu hộ</span>
        </router-link>


        <p class="pl-4 my-2 text-xs font-semibold mb-4 text-gray-400">
          PHÂN TÍCH - BẢO TRÌ
        </p>


        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Chart' ? activeClass : inactiveClass]"
          to="/charts"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
          </svg>

          <span class="mx-4">Thống kê</span>
        </router-link>

        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'History' ? activeClass : inactiveClass]"
          to="/history"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
          </svg>

          <span class="mx-4">Xem lịch sử</span>
        </router-link>

        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Maintenance' ? activeClass : inactiveClass]"
          to="/maintenance"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
          </svg>

          <span class="mx-4">Bảo trì</span>
        </router-link>
      
        <!-- <p class="pl-4 text-xs my-2 font-semibold mb-4 text-gray-400">About</p> -->
        
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSidebar } from "../hooks/useSidebar";

const { isOpen } = useSidebar();
const activeClass = ref(
  "bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100"
);
const inactiveClass = ref(
  "border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100"
);
</script>
