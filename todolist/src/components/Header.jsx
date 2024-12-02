import { useSelector } from "react-redux";
import { CartIcon } from "../dummy/Icons";
import styled from "styled-components";

function Header() {
  // Redux 상태에서 totalAmount 가져오기
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <HeaderWrapper>
      <h1>UMC PlayList</h1>
      <div className="cart-icon">
        <CartIcon />
        <span>{totalAmount}</span> {/* totalAmount 반영 */}
      </div>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f4f4f4;

  .cart-icon {
    display: flex;
    align-items: center;

    span {
      margin-left: 0.5rem;
      background-color: #ff6b6b;
      color: white;
      padding: 0.2rem 0.6rem;
      border-radius: 50%;
    }
  }
`;
