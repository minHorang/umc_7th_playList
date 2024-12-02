import { useDispatch } from "react-redux";
import { increase, decrease } from "../redux/cartSlice";
import { ChevronUp, ChevronDown } from "../dummy/Icons";
import styled from "styled-components";

function CartItem({ id, title, singer, price, img, amount }) {
  const dispatch = useDispatch();

  return (
    <CartItemWrapper>
      <img src={img} alt={title} />
      <div className="details">
        <h4>{title}</h4>
        <p>{singer}</p>
        <p>₩ {price}</p>
        <div className="controls">
          <button onClick={() => dispatch(decrease(id))}>
            <ChevronDown />
          </button>
          <span>{amount}</span>
          <button onClick={() => dispatch(increase(id))}>
            <ChevronUp />
          </button>
        </div>
      </div>
    </CartItemWrapper>
  );
}

export default CartItem;

const CartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #e0e0e0;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 1rem;
  }

  .details {
    flex: 1;

    h4 {
      margin-bottom: 0.5rem;
    }

    p {
      margin: 0.2rem 0;
    }

    .controls {
      display: flex;
      align-items: center;

      button {
        background: none;
        border: none;
        cursor: pointer;

        svg {
          width: 20px;
          height: 20px;
        }
      }

      span {
        margin: 0 0.5rem;
        font-size: 1rem;
      }
    }
  }
`;
