const totalPrice = (stagedItems: IstagedItem[]) => {
  let sum = 0;
  stagedItems.forEach((stagedItem: IstagedItem) => (sum = sum + parseFloat(stagedItem.item.price)));
  return sum;
};

export default totalPrice;
