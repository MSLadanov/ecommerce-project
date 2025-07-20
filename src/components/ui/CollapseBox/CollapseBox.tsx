import { ReactNode, useState, useRef, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./style.scss";

interface ICollapseBoxProps {
  title: string;
  children: ReactNode;
  isOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  className?: string;
  headerClass?: string;
  contentClass?: string;
  iconPosition?: "left" | "right";
}

export const CollapseBox = ({
  title,
  children,
  isOpen: propsIsOpen = false,
  onToggle,
  className = "",
  headerClass = "",
  contentClass = "",
  iconPosition = "right",
}: ICollapseBoxProps) => {
  const [isOpen, setIsOpen] = useState(propsIsOpen);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setIsOpen(propsIsOpen);
  }, [propsIsOpen]);
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen, children]);

  const toggleCollapse = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle?.(newState);
  };

  return (
    <div className={`collapse-box ${className}`}>
      <div
        className={`collapse-box__header ${headerClass}`}
        onClick={toggleCollapse}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
      >
        {iconPosition === "left" && (
          <span className="collapse-box__icon">
            {isOpen ? <FiChevronUp /> : <FiChevronDown />}
          </span>
        )}

        <h3 className="collapse-box__title">{title}</h3>

        {iconPosition === "right" && (
          <span className="collapse-box__icon">
            {isOpen ? <FiChevronUp /> : <FiChevronDown />}
          </span>
        )}
      </div>

      <div
        ref={contentRef}
        className={`collapse-box__content ${contentClass}`}
        style={{
          height: `${contentHeight}px`,
          overflow: contentHeight ? "visible" : "hidden",
        }}
        aria-hidden={!isOpen}
      >
        <div className="collapse-box__inner">{children}</div>
      </div>
    </div>
  );
};
