<template>
  <div align-items: center>
    <apexchart
      width="500"
      type="area"
      :options="options"
      :series="series"
    ></apexchart>
    <center> <b>Tổng số đơn vị cứu hộ đăng ký</b> </center>
  </div>
</template>

<script>
import API from '@/API/API';

export default {
  data() {
    return {
      options: {
        chart: {
          id: 'vue-3-chart-example'
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
    const response = await API.getThongKeR();
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

