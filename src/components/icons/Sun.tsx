const SvgSun = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    fill="none"
    className={props.className || "text-[var(--purple-dark-1)]"}
    {...props}
  >
    {/* Círculo Central */}
    <circle
      cx="12"
      cy="12"
      r="3"
      fill={props.color || "currentColor"}
      stroke={props.color || "currentColor"}
      strokeWidth="2"
    />
    {/* Raios do Sol */}
    <path
      d="M12 5V3"
      stroke={props.color || "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 21V19"
      stroke={props.color || "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16.95 7.04996L18.3643 5.63574"
      stroke={props.color || "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M5.63608 18.3644L7.05029 16.9502"
      stroke={props.color || "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M19 12L21 12"
      stroke={props.color || "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M3 12L5 12"
      stroke={props.color || "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16.95 16.95L18.3643 18.3643"
      stroke={props.color || "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M5.63608 5.63559L7.05029 7.0498"
      stroke={props.color || "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default SvgSun;
