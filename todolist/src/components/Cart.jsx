import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { openModal } from "../redux/modalSlice";
import styled from "styled-components";

function Cart() {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <CartWrapper>
      <h2>당신이 선택한 음반</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <div className="total">
        <span>총 가격</span>
        <span>₩ {totalPrice}</span>
      </div>
      <button className="clear-btn" onClick={() => dispatch(openModal())}>
        장바구니 초기화
      </button>
    </CartWrapper>
  );
}

export default Cart;

const CartWrapper = styled.section`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }

  .total {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  .clear-btn {
    display: block;
    margin: 1rem auto;
    padding: 0.5rem 1.5rem;
    background-color: #ff6b6b;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #e55a5a;
    }
  }
`;
