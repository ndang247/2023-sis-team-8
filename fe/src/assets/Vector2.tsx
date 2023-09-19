import "./Vector2.css";

export default function Vector2(props: Vector2Props) {
  return (
    <div className={`${props.className} vector-2-vector-1`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 16 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 1.895 20 C 1.374 20 0.928 19.821 0.557 19.462 C 0.186 19.103 0 18.671 0 18.167 V 8.36 C 0 7.852 0.186 7.417 0.557 7.056 C 0.928 6.694 1.374 6.513 1.895 6.513 H 3.299 V 4.58 C 3.299 3.308 3.755 2.227 4.667 1.336 C 5.578 0.445 6.687 0 7.993 0 C 9.298 0 10.407 0.445 11.319 1.336 C 12.231 2.227 12.687 3.308 12.687 4.58 V 6.513 H 14.091 C 14.616 6.513 15.066 6.694 15.439 7.056 C 15.813 7.417 16 7.852 16 8.36 V 18.167 C 16 18.671 15.813 19.103 15.439 19.462 C 15.066 19.821 14.616 20 14.091 20 H 1.895 Z M 7.997 15.045 C 8.505 15.045 8.938 14.875 9.297 14.535 C 9.656 14.195 9.835 13.787 9.835 13.31 C 9.835 12.847 9.655 12.426 9.293 12.048 C 8.931 11.67 8.497 11.482 7.989 11.482 C 7.482 11.482 7.048 11.67 6.689 12.048 C 6.331 12.426 6.151 12.851 6.151 13.321 C 6.151 13.792 6.332 14.197 6.693 14.536 C 7.055 14.875 7.49 15.045 7.997 15.045 Z M 5.194 6.513 H 10.792 V 4.583 C 10.792 3.812 10.523 3.163 9.984 2.636 C 9.445 2.11 8.783 1.846 7.999 1.846 C 7.215 1.846 6.552 2.11 6.009 2.636 C 5.466 3.163 5.194 3.812 5.194 4.583 V 6.513 Z"
          fill="#718096"
         />
      </svg>
    </div>
  );
}

Vector2.defaultProps = {
  className: "",
};

interface Vector2Props {
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
