import { IForm } from "@/base-ui/form"

export const modalFormConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "姓名",
      placeholder: "请输入姓名"
    },
    {
      field: "realname",
      type: "input",
      label: "真实姓名",
      placeholder: "请输入真实姓名"
    },
    {
      field: "password",
      type: "password",
      label: "密码",
      placeholder: "请输入密码",
      isHidden: false
    },
    {
      field: "cellphone",
      type: "input",
      label: "电话号码",
      placeholder: "请输入电话号码"
    },
    {
      field: "departmentId",
      type: "select",
      label: "选择部门",
      placeholder: "请选择部门",
      options: []
    },
    {
      field: "roleId",
      type: "select",
      label: "选择角色",
      placeholder: "请选择角色",
      options: []
    }
  ],
  labelWidth: "70px",
  itemStyle: {
    padding: "5px 40px"
  },
  colLayout: { span: 24 }
}
