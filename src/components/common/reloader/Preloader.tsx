import "./Preloader.scss";

const Preloader = () => {
  return (
    <div className="preloader">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
      >
        <g clipPath="url(#clip0_332_1231)">
          <path
            d="M67.4844 32.5092L98.9604 49.6591L67.4844 66.9468L50.2656 98.3539L33.0468 66.9468L1.57084 49.6591L33.0468 32.5092L50.2656 0.964355L67.4844 32.5092Z"
            fill="black"
            stroke="white"
            strokeMiterlimit="10"
          />
        </g>
        <defs>
          <clipPath id="clip0_332_1231">
            <rect
              width="70.3259"
              height="70.3259"
              fill="white"
              transform="translate(50.2656) rotate(45)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Preloader;
