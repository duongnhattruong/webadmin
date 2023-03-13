<template>
  <div>
    <!-- Breadcrumb -->
    <Breadcrumb breadcrumb="charts" />

    <div class="mt-4">
      <h4 class="text-gray-600">Charts</h4>

      <div class="mt-6">
        <div
          class="
            my-6
            overflow-hidden
            bg-white
            rounded-md
            shadow
            grid grid-cols-2
            gap-3
          "
        >
          <LineChart />
          <DonutChart />
          <BarChart />
          <AreaChart />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from "../partials/Breadcrumb.vue";
import DonutChart from "@/components/charts/ThongKeDanhGia.vue";
import LineChart from "@/components/charts/ThongKeDon.vue";
import BarChart from "../components/charts/ThongKeVehicle.vue";
import AreaChart from "../components/charts/ThongkeRescue.vue";
</script>
