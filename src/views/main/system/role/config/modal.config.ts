import { IForm } from "@/base-ui/form"

export const modalFormConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "角色名",
      placeholder: "请输入角色名"
    },
    {
      field: "intro",
      type: "input",
      label: "角色介绍",
      placeholder: "请输入角色介绍"
    }
    // ,
    // {
    //   field: "menuList",
    //   type: "select",
    //   label: "选择权限",
    //   placeholder: "选择权限",
    //   options: []
    // }
  ],
  labelWidth: "70px",
  itemStyle: {
    padding: "5px 40px"
  },
  colLayout: { span: 24 }
}
