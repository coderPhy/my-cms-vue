<template>
  <div class="dashboard">
    <el-row :gutter="10" style="margin-bottom: 20px">
      <el-col :span="6">
        <hy-card title="商品总数">
          <span class="card-text">
            <transition>
              <span ref="categoryGoodeCountRef" style="display: block"> </span>
            </transition>
          </span>
        </hy-card>
      </el-col>
      <el-col :span="6">
        <hy-card title="商品总收藏">
          <span class="card-text">
            <transition>
              <span ref="categoryGoodsFavorRef" style="display: block"> </span>
            </transition>
          </span>
        </hy-card>
      </el-col>
      <el-col :span="6">
        <hy-card title="商品总销量">
          <span class="card-text">
            <transition>
              <span ref="categoryGoodsSaleRef" style="display: block"> </span>
            </transition>
          </span>
        </hy-card>
      </el-col>
      <el-col :span="6">
        <hy-card title="各地商品总销售额">
          <span class="card-text">
            <transition>
              <span ref="addressGoodsSaleRef" style="display: block"> </span>
            </transition>
          </span>
        </hy-card>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="7">
        <hy-card title="分类商品数量(饼图)">
          <pie-echart :pie-data="categoryGoodsCount"></pie-echart>
        </hy-card>
      </el-col>
      <el-col :span="10">
        <hy-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </hy-card>
      </el-col>
      <el-col :span="7">
        <hy-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </hy-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <hy-card title="分类商品的销量">
          <line-echart
            title="分类商品的销量"
            v-bind="categoryGoodsSale"
          ></line-echart>
        </hy-card>
      </el-col>
      <el-col :span="12">
        <hy-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor" title="title"></bar-echart>
        </hy-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, onMounted } from "vue"
import { CountUp } from "countup.js"
import { useStore } from "@/store"

import hyCard from "@/base-ui/card"
import {
  pieEchart,
  barEchart,
  roseEchart,
  lineEchart,
  mapEchart
} from "@/components/page-echarts"

export default defineComponent({
  name: "dashboard",
  components: {
    hyCard,
    pieEchart,
    barEchart,
    roseEchart,
    lineEchart,
    mapEchart
  },
  setup() {
    let isShow = ref(true)
    const categoryGoodeCountRef = ref<HTMLElement>()
    const categoryGoodsSaleRef = ref<HTMLElement>()
    const categoryGoodsFavorRef = ref<HTMLElement>()
    const addressGoodsSaleRef = ref<HTMLElement>()
    onMounted(() => {
      const countUp_categoryGoodeCount = new CountUp(
        categoryGoodeCountRef.value!,
        34566
      )
      countUp_categoryGoodeCount.start()
      const countUp_categoryGoodsSale = new CountUp(
        categoryGoodsSaleRef.value!,
        71923
      )
      countUp_categoryGoodsSale.start()
      const countUp_categoryGoodsFavor = new CountUp(
        categoryGoodsFavorRef.value!,
        30923
      )
      countUp_categoryGoodsFavor.start()
      const countUp_addressGoodsSale = new CountUp(
        addressGoodsSaleRef.value!,
        57302
      )
      countUp_addressGoodsSale.start()
    })
    const store = useStore()
    store.dispatch("dashboard/getDashboardDataAction")

    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    const categoryGoodsSale = computed(() => {
      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
      const xLabel: string[] = []
      const values: number[] = []
      for (const item of categoryGoodsSale) {
        xLabel.push(item.name)
        values.push(item.goodsCount)
      }

      return {
        xLabel,
        values
      }
    })
    const categoryGoodsFavor = computed(() => {
      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
      const xLabel: any[] = []
      const data: any[] = []
      for (const item of categoryGoodsFavor) {
        xLabel.push(item.name)
        data.push(item.goodsFavor)
      }

      return {
        xLabel,
        data
      }
    })
    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item: any) => {
        return {
          value: item.count,
          name: item.address
        }
      })
    })

    return {
      isShow,
      categoryGoodeCountRef,
      categoryGoodsSaleRef,
      categoryGoodsFavorRef,
      addressGoodsSaleRef,
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    }
  }
})
</script>

<style scoped lang="less">
.content-row {
  margin-top: 10px;
}

.card-text {
  color: #333;
  font-size: 30px;
  font-weight: 500;
}
</style>
