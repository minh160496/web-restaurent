import { useContext } from "react";
import { contextProducts } from "App";

export const handleUnitMoney = (string) => {
  if (typeof string === "string") {
    let output = "";
    for (let i = string.length - 1, j = 0; i >= 0; i--, j++) {
      output += string[i];
      if ((j + 1) % 3 === 0 && j < string.length - 1) {
        output += ".";
      }
    }
    return output.split("").reverse().join("") + "đ";
  }
  return "0đ";
};

const getTotal = (products, cartProducts) => {
  if (products && products[0] && cartProducts.length > 0) {
    return Number(
      cartProducts.reduce((total, curr) => {
        return Number(total + products[curr.productId - 1].price * curr.num);
      }, 0)
    );
  } else return 0;
};

export function PriceProducts({ id, num }) {
  const products = useContext(contextProducts);
  const outputNum =
    products && products[id] ? products[id - 1].price * num + "000" : "0";
  const output = handleUnitMoney(String(outputNum));
  return output;
}

export function PriceTotalProduct({ products, cartProducts }) {
  const res = Number(getTotal(products, cartProducts)) + "000";
  return handleUnitMoney(String(res));
}

export const getDiscountMoney = (discount, ship, products, cartProducts) => {
  const price = Number(getTotal(products, cartProducts)) + ship;
  const discountMoney = Math.round(Number(price * discount));
  return handleUnitMoney(discountMoney + "000");
};

export function TotalAll({ products, cartProducts, ship = 0, discount = 0 }) {
  const price = Number(Number(getTotal(products, cartProducts)) + Number(ship));
  const discountMoney = Math.round(Number(price * discount));
  const res = price - discountMoney + "000";
  return handleUnitMoney(String(res));
}
