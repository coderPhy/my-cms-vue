import { IForm } from "@/base-ui/form"

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "部门名称",
      placeholder: "请输入部门名称"
    },
    {
      field: "leader",
      type: "input",
      label: "领导",
      placeholder: "请输入部门领导"
    },
    {
      field: "createAt",
      type: "datepicker",
      label: "创建时间",
      placeholder: "请选择创建时间范围",
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange"
      }
    }
  ],
  labelWidth: "120px",
  itemStyle: {
    padding: "10px 40px"
  }
  // colLayout: { span: 8 }
}
