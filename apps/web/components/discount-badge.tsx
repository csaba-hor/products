 interface Props {
  discount: number,
  className?: string
}

export const DiscountBadge: React.FC<Props> = ({
  discount,
  className = '',
}) => {
  return (
    <span className={`${className} bg-purple py-1 inline-flex items-center font-semibold text-white px-4 rounded-full`}>
      -{(discount * 100).toFixed(2)}%
    </span>
  );
};
