<template>
  <div class="pie-echart">
    <base-echart :options="pieOptions"></base-echart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, computed } from "vue"
import baseEchart from "@/base-ui/echart"
import { IDataType } from "../types"

const props = withDefaults(
  defineProps<{
    pieData: IDataType[]
  }>(),
  {}
)

const pieOptions = computed(() => {
  return {
    title: {
      text: "",
      left: "center"
    },
    tooltip: {
      trigger: "item"
    },
    legend: {
      orient: "horizontal",
      left: "left"
    },
    series: [
      {
        name: "分类数据",
        type: "pie",
        radius: "50%",
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  }
})
</script>

<style scoped lang="less"></style>
