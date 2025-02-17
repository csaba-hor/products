interface Props {
  rating: number;
}

export const Rating: React.FC<Props> = ({ rating }) => {
  const colorUntil = Math.floor(rating);

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-x-1">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`size-[26px] ${colorUntil > i ? "text-purple" : "text-[#d9d9d9]"}`}
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          ))}
      </div>
      <span className="text-black font-semibold text-2xl">{rating.toFixed(2)}</span>
    </div>
  );
};
