import NextIcon from "../../types/icon";
import { CSS, NormalColors, useTheme } from "@nextui-org/react";

const CircleIcon: React.FC<NextIcon & { styles?: CSS }> = ({
  fill = "currentColor",
  filled,
  styles,
  size,
  height,
  width,
  label,
  ...props
}) => {
  const theme = useTheme();
  return (
    <svg
      style={!!styles ? styles : {}}
      xmlns="http://www.w3.org/2000/svg"
      width={size || width || 256}
      height={size || height || 256}
      viewBox={`0 0 ${size || width || 256} ${size || height || 256}`}
      fill="none"
    >
      <circle
        fill={
          fill !== "currentColor"
            ? theme?.theme?.colors?.[fill]?.value
            : "currentColor"
        }
        cx={size || width / 2 || 256}
        cy={size || height / 2 || 256}
        r={size || width / 2 || 256}
      />
    </svg>
  );
};
export default CircleIcon;
