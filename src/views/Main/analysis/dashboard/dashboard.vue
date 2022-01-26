<template>
  <div
    class="dashboard"
    ref="echartsRef"
    :style="{ width: '500px', height: '400px' }"
  >
    <h2>dashboard</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  name: 'dashboard',
  setup() {
    const echartsRef = ref<HTMLElement>()
    onMounted(() => {
      const echartsInstance = echarts.init(echartsRef.value!, 'dark', {
        renderer: 'svg'
      })
      const option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
      echartsInstance.setOption(option)
    })
    return {
      echartsRef
    }
  }
})
</script>

<style scoped></style>
