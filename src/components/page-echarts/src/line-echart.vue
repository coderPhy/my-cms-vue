<template>
  <div class="line-echart">
    <base-echart :options="option"></base-echart>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, withDefaults } from "vue"
import baseEchart from "@/base-ui/echart"

const props = withDefaults(
  defineProps<{
    title: string
    xLabel: string[]
    values: any[]
  }>(),
  {
    title: ""
  }
)

const option = computed(() => {
  return {
    title: {
      text: props.title
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985"
        }
      }
    },
    legend: {
      // data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"]
    },
    toolbox: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: props.xLabel
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "类别销量",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series"
        },
        data: props.values
      }
    ]
  }
})
</script>

<style scoped></style>
