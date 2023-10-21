import React from "react";
interface Props {
  icon?: JSX.Element;
  text: string;
  disabled?: boolean;
  className: string;
  onClick?: React.FormEventHandler<HTMLButtonElement>;
}

const PrimaryButton = ({
  icon,
  text,
  disabled = false,
  className,
  onClick,
}: Props) => {
  return (
    <button
      disabled={disabled}
      className={`rounded-xl bg-blue-900 py-4 font-bold capitalize text-white disabled:opacity-25 ${
        className || ""
      }`}
      onClick={onClick}
    >
      <span className="mr-2">{icon}</span>
      {text}
    </button>
  );
};

export default PrimaryButton;
