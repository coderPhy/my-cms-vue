import { IForm } from "@/base-ui/form"

export const modalFormConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "部门名字",
      placeholder: "请输入部门名"
    },
    {
      field: "leader",
      type: "input",
      label: "领导",
      placeholder: "请输入领导"
    }
  ],
  labelWidth: "70px",
  itemStyle: {
    padding: "5px 40px"
  },
  colLayout: { span: 24 }
}
