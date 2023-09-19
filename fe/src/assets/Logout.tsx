import "./Logout.css";

export default function Logout(props: LogoutProps) {
  return (
    <div className={`${props.className} logout-logout`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 19.918 19.914 C 19.78 19.776 19.711 19.612 19.711 19.422 C 19.711 19.231 19.78 19.069 19.918 18.936 L 21.164 17.697 H 15.863 C 15.667 17.697 15.503 17.63 15.369 17.496 C 15.234 17.362 15.167 17.197 15.167 17.002 C 15.167 16.807 15.234 16.643 15.369 16.511 C 15.503 16.379 15.667 16.313 15.863 16.313 H 21.129 L 19.856 15.047 C 19.729 14.926 19.667 14.773 19.671 14.585 C 19.674 14.398 19.746 14.235 19.887 14.097 C 20.019 13.959 20.184 13.891 20.382 13.895 C 20.58 13.898 20.748 13.968 20.886 14.106 L 23.331 16.537 C 23.402 16.61 23.454 16.687 23.488 16.77 C 23.522 16.853 23.539 16.939 23.539 17.026 C 23.539 17.113 23.522 17.197 23.488 17.278 C 23.454 17.359 23.402 17.436 23.331 17.508 L 20.894 19.931 C 20.767 20.057 20.609 20.12 20.42 20.12 C 20.231 20.12 20.063 20.051 19.918 19.914 Z M 11.863 23.539 C 11.479 23.539 11.15 23.403 10.875 23.131 C 10.599 22.859 10.462 22.534 10.462 22.155 V 11.855 C 10.462 11.474 10.599 11.146 10.875 10.872 C 11.15 10.598 11.479 10.462 11.863 10.462 H 16.346 C 16.542 10.462 16.707 10.53 16.841 10.668 C 16.975 10.806 17.042 10.972 17.042 11.167 C 17.042 11.362 16.975 11.525 16.841 11.657 C 16.707 11.789 16.542 11.855 16.346 11.855 H 11.863 V 22.155 H 16.346 C 16.542 22.155 16.707 22.222 16.841 22.356 C 16.975 22.49 17.042 22.654 17.042 22.85 C 17.042 23.045 16.975 23.209 16.841 23.341 C 16.707 23.473 16.542 23.539 16.346 23.539 H 11.863 Z"
          fill="#1B2559"
         />
        <rect
          x="0.5"
          y="0.5"
          width="33"
          height="33"
          rx="16.5"
          stroke="#E0E5F2"
         />
      </svg>
    </div>
  );
}

Logout.defaultProps = {
  className: "",
};

interface LogoutProps {
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
