import { IForm } from "@/base-ui/form"

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "名称",
      placeholder: "请输入商品名称"
    },
    {
      field: "address",
      type: "input",
      label: "商家地址",
      placeholder: "请输入商家地址"
    },
    {
      field: "status",
      type: "input",
      label: "状态",
      placeholder: "请输入状态"
    },
    {
      field: "createAt",
      type: "datepicker",
      label: "创建时间",
      placeholder: "请选择创建时间范围",
      otherOptions: {
        type: "daterange",
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间"
      }
    }
  ],
  labelWidth: "120px",
  itemStyle: {
    padding: "10px 40px"
  }
  // colLayout: { span: 8 }
}
