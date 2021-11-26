<template>
  <div class="rose-echart">
    <base-echart :options="option"></base-echart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, computed } from "vue"

import baseEchart from "@/base-ui/echart"

import { IDataType } from "../types"

const props = withDefaults(
  defineProps<{
    roseData: IDataType[]
  }>(),
  {}
)

const option = computed(() => {
  return {
    // legend: {
    //   top: "bottom"
    // },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: "Nightingale Chart",
        type: "pie",
        radius: [15, 120],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  }
})
</script>

<style scoped></style>
