export const contentTableConfig = {
  propList: [
    { prop: "userName", label: "用户名", minWidth: "100" },
    { prop: "title", label: "标题", minWidth: "100" },
    { prop: "content", label: "内容", minWidth: "100", slotName: "content" },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "250",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "250",
      slotName: "updateAt"
    },
    { label: "操作", minWidth: "120", slotName: "handle" }
  ],
  showIndexColumn: true,
  showSelectColumn: true,
  title: "故事列表"
}
