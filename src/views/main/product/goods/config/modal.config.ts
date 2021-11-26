import { IForm } from "@/base-ui/form"

export const modalFormConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "商品名称",
      placeholder: "请输入商品名称"
    },
    {
      field: "oldPrice",
      type: "input",
      label: "旧价格",
      placeholder: "请输入旧价格"
    },
    {
      field: "newPrice",
      type: "input",
      label: "新价格",
      placeholder: "请输入新价格"
    },
    {
      field: "desc",
      type: "input",
      label: "描述",
      placeholder: "请输入描述"
    },
    {
      field: "imgUrl",
      type: "input",
      label: "商品图片地址",
      placeholder: "请输入商品图片地址"
    },
    {
      field: "address",
      type: "input",
      label: "商家地址",
      placeholder: "请输入商家地址"
    },
    {
      field: "inventoryCount",
      type: "input",
      label: "库存数量",
      placeholder: "请输入库存数量"
    },
    {
      field: "status",
      type: "select",
      label: "状态",
      placeholder: "请输入状态",
      options: [
        { label: "启用", value: 1 },
        {
          label: "禁用",
          value: 2
        }
      ]
    }
  ],
  labelWidth: "70px",
  itemStyle: {
    padding: "5px 40px"
  },
  colLayout: { span: 24 }
}
