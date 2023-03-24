<template>
  <div>
    <apexchart
      width="500"
      type="area"
      :options="options"
      :series="series"
    ></apexchart>
    <center> <b>Tổng số phương tiện đăng ký</b> </center>
  </div>
</template>

<script>
import API from '@/API/API';

export default {
  data() {
    return {
      options: {
        colors: ["lime"],
        chart: {
          id: 'vue-2-chart-example'
        },
        xaxis: {
          categories:  []
        }
      },
      series: [{
        name: 'Sales',
        data: []
      }]
    }
  },
  async mounted() {
    const response = await API.getThongKeV();
    this.series = [
        {
          data: response.data.value,
        },
      ];
    this.options = {
      xaxis:{
        categories: response.data.month,
      }
    }
  },
}
</script>

