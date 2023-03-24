<template>
  <div>
    <apexchart
      width="500"
      type="bar"
      :options="options"
      :series="series"
    ></apexchart>
    <center><b>Số đơn trong tháng</b></center>
  </div>
</template>

<script>
import API from '@/API/API';

export default {
  data() {
    return {
      options: {
        colors: ["#FEB019"],
        chart: {
          id: 'vue-1'
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
    const response = await API.getThongKeDon();
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

