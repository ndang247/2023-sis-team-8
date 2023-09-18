import "./Icon.css";

export default function Icon(props: IconProps) {
  return (
    <div className={`${props.className} icon-icon`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_359)">
          <path
            d="M 10 19 V 14 H 14 V 19 C 14 19.55 14.45 20 15 20 H 18 C 18.55 20 19 19.55 19 19 V 12 H 20.7 C 21.16 12 21.38 11.43 21.03 11.13 L 12.67 3.6 C 12.29 3.26 11.71 3.26 11.33 3.6 L 2.97 11.13 C 2.63 11.43 2.84 12 3.3 12 H 5 V 19 C 5 19.55 5.45 20 6 20 H 9 C 9.55 20 10 19.55 10 19 Z"
            fill="#718096"
           />
        </g>
        <defs>
          <clipPath id="clip0_1_359">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

Icon.defaultProps = {
  className: "",
};

interface IconProps {
  className: string;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
