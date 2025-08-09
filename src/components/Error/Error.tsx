import { ReactElement } from "react";
import { useAuth } from "@hooks/useAuth";
import { FaRegFaceFrown } from "react-icons/fa6";
import "./style.scss";

export const Error = (): ReactElement => {
  const { isError } = useAuth();
  return (
    <div className="error-message">
      <div className="error-message__content">
        <FaRegFaceFrown className="error-message__icon" size={48} />
        <h3 className="error-message__title">Something went wrong...</h3>
        {isError && <p className="error-message__message">{isError}</p>}
      </div>
    </div>
  );
};
