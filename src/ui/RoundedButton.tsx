interface RoundedButtonProps {
  borderColor: string;
  icon: string;
  alt: string;
  onClickFn: () => void;
}

function RoundedButton({
  borderColor,
  icon,
  alt,
  onClickFn,
}: RoundedButtonProps) {
  return (
    <button
      onClick={onClickFn}
      className={`rounded-full border-1 p-[4px] hover:cursor-pointer ${borderColor}`}
    >
      <img src={icon} alt={alt} />
    </button>
  );
}

export default RoundedButton;
