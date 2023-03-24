<template>
  <div>
    <apexchart
      width="435"
      type="donut"
      :options="options"
      :series="series"
    ></apexchart>
    <center> <b>Tổng quan đánh giá</b> </center>
  </div>
</template>

<script>
import API from '@/API/API';

export default {
  data() {
    return {
      options: {
        chart: {
          id: 'vue-1'
        },
        labels: ["5 sao","4 sao","3 sao","2 sao","1 sao"],
      },
      series: []
    }
  },
  async mounted() {
    const response = await API.getThongKeDanhGia();
    this.series = response.data;
  }
}
</script>

