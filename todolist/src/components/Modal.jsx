import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/modalSlice";
import { clearCart } from "../redux/cartSlice";
import styled from "styled-components";

function Modal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>장바구니를 비우시겠습니까?</h2>
        <div className="buttons">
          <button
            className="confirm-btn"
            onClick={() => {
              dispatch(clearCart()); // 장바구니 초기화
              dispatch(closeModal()); // 모달 닫기
            }}
          >
            예
          </button>
          <button className="cancel-btn" onClick={() => dispatch(closeModal())}>
            아니요
          </button>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 1rem;
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;

    button {
      padding: 0.5rem 1.5rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .confirm-btn {
      background-color: #ff6b6b;
      color: white;

      &:hover {
        background-color: #e55a5a;
      }
    }

    .cancel-btn {
      background-color: #ccc;

      &:hover {
        background-color: #bbb;
      }
    }
  }
`;
