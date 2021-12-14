let wishList = [];

export function addToWishList(cartItem) {
  wishList.push(cartItem);
}

export function deleteFromWishList(cartItem) {
  wishList = wishList.filter((item) => item.productId !== cartItem.productId);
}

export function getWishList() {
  return wishList;
}

const wishListService = {
  addToWishList,
  deleteFromWishList,
  getWishList,
};

export default wishListService;
