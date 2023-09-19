import "./Avatar.css";

export default function Avatar(props: AvatarProps) {
  return (
    <div className={`${props.className} avatar-avatar`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <mask
          id="mask0_1_404"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="34"
          height="34"
        >
          <circle cx="17" cy="17" r="17" fill="#4318FF" />
        </mask>
        <g mask="url(#mask0_1_404)">
          <rect
            x="-3.40002"
            y="-3.39999"
            width="37.8857"
            height="47.6"
            fill="url(#pattern-1:404-0)"
           />
        </g>
        <defs>
          <pattern
            id="pattern-1:404-0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_1_404"
              transform="matrix(0.000306741 0 0 0.000244141 -0.00244147 0)"
             />
          </pattern>
          <image
            id="image0_1_404"
            width="3276"
            height="4096"
            xlinkHref="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/2b519151-e65c-4cdc-ae0c-2530408eaf11.webp"
           />
        </defs>
      </svg>
    </div>
  );
}

Avatar.defaultProps = {
  className: "",
};

interface AvatarProps {
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
