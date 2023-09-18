import "./Vector3.css";

export default function Vector3(props: Vector3Props) {
  return (
    <div className={`${props.className} vector-3-vector`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 9.501 24.272 H 27.217 V 31.975 H 9.501 V 24.272 Z"
          fill="white"
         />
        <path
          d="M 27.833 25.89 C 27.833 23.357 26.835 20.927 25.058 19.136 C 23.282 17.345 20.872 16.339 18.359 16.339 C 15.847 16.339 13.437 17.345 11.66 19.136 C 9.883 20.927 8.885 23.357 8.885 25.89 L 18.359 25.89 H 27.833 Z"
          fill="white"
         />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 18.398 28.277 C 23.821 28.277 28.218 23.881 28.218 18.457 C 28.218 13.033 23.821 8.636 18.398 8.636 C 12.974 8.636 8.577 13.033 8.577 18.457 C 8.577 23.881 12.974 28.277 18.398 28.277 Z M 18.398 35.98 C 28.075 35.98 35.921 28.135 35.921 18.457 C 35.921 8.779 28.075 0.934 18.398 0.934 C 8.72 0.934 0.875 8.779 0.875 18.457 C 0.875 28.135 8.72 35.98 18.398 35.98 Z"
          fill="white"
         />
      </svg>
    </div>
  );
}

Vector3.defaultProps = {
  className: "",
};

interface Vector3Props {
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
