export default function menuLeaves(menuList: any[]): number[] {
  // 将menu菜单转换成叶子节点
  let leaves: number[] = []
  for (const item of menuList) {
    if (item.children) {
      leaves = leaves.concat(menuLeaves(item.children))
    } else {
      leaves.push(item.id)
    }
  }
  return leaves
}
