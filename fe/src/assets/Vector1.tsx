import "./Vector1.css";

export default function Vector1(props: Vector1Props) {
  return (
    <div className={`${props.className} vector-1-vector-2`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 14.418 15.234 H 4.373 C 3.941 15.234 3.567 15.077 3.252 14.764 C 2.937 14.451 2.78 14.079 2.78 13.649 V 1.574 C 2.78 1.144 2.937 0.774 3.252 0.464 C 3.567 0.155 3.941 0 4.373 0 H 10.541 C 10.753 0 10.959 0.042 11.157 0.127 C 11.355 0.212 11.53 0.327 11.682 0.47 L 15.528 4.297 C 15.672 4.447 15.787 4.622 15.872 4.819 C 15.957 5.016 16 5.22 16 5.432 V 13.649 C 16 14.079 15.843 14.451 15.528 14.764 C 15.213 15.077 14.843 15.234 14.418 15.234 Z M 14.418 5.171 L 10.723 1.574 V 3.985 C 10.723 4.319 10.838 4.6 11.067 4.828 C 11.297 5.057 11.58 5.171 11.915 5.171 H 14.418 Z M 1.582 18 C 1.15 18 0.778 17.845 0.467 17.536 C 0.156 17.226 0 16.856 0 16.426 V 5.016 C 0 4.792 0.075 4.604 0.226 4.454 C 0.377 4.304 0.565 4.229 0.791 4.229 C 1.017 4.229 1.205 4.304 1.356 4.454 C 1.506 4.604 1.582 4.792 1.582 5.016 V 16.426 H 10.814 C 11.04 16.426 11.228 16.501 11.379 16.651 C 11.53 16.801 11.605 16.989 11.605 17.213 C 11.605 17.438 11.53 17.625 11.379 17.775 C 11.228 17.925 11.04 18 10.814 18 H 1.582 Z"
          fill="#718096"
         />
      </svg>
    </div>
  );
}

Vector1.defaultProps = {
  className: "",
};

interface Vector1Props {
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
