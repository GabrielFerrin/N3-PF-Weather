const hasParent = (child, parentId) => {
  while (child) {
    if (child?.id)
      if (child.id === parentId)
        return true
    child = child.parentNode
  }
  return false
}

export default hasParent