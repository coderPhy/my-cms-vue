<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from "vue"
import { EChartsOption } from "echarts"

import useEchart from "../hooks/useEchart"

// 定义prop  ts的类型
const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    options: EChartsOption
  }>(),
  {
    width: "100%",
    height: "300px"
  }
)

// 定义prop  js的类型
// defineProps({
//   width: String,
//   height: String
// })

const echartDivRef = ref<HTMLElement>()

onMounted(() => {
  const { setOptions } = useEchart(echartDivRef.value!)
  setOptions(props.options)

  watchEffect(() => {
    setOptions(props.options)
  })
})

// defineExpose(echartInstance)
</script>

<style scoped lang="less"></style>
