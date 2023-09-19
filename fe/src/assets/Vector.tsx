import "./Vector.css";

export default function Vector(props: VectorProps) {
  return (
    <div className={`${props.className} vector-vector-3`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 9.65 17.257 C 9.263 17.568 8.715 17.568 8.329 17.257 L 1.722 11.949 C 1.335 11.638 0.798 11.638 0.411 11.949 C-0.137 12.393 -0.137 13.248 0.411 13.692 L 7.673 19.534 C 8.447 20.156 9.532 20.156 10.316 19.534 L 17.578 13.692 C 18.126 13.248 18.126 12.393 17.578 11.949 L 17.568 11.938 C 17.181 11.627 16.644 11.627 16.257 11.938 L 9.65 17.257 Z M 10.327 13.903 L 17.589 8.062 C 18.137 7.618 18.137 6.752 17.589 6.308 L 10.327 0.466 C 9.553 -0.155 8.468 -0.155 7.684 0.466 L 0.422 6.319 C-0.126 6.763 -0.126 7.629 0.422 8.073 L 7.684 13.915 C 8.457 14.536 9.553 14.536 10.327 13.903 Z"
          fill="#718096"
         />
      </svg>
    </div>
  );
}

Vector.defaultProps = {
  className: "",
};

interface VectorProps {
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
