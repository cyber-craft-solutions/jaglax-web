export const Call = ({ width = 34, height = 34, color = "#221F1F" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_592_544)">
        <path
          d="M6.92814 22.6009C10.2816 26.6096 14.3185 29.7659 18.9261 31.9992C20.6803 32.8305 23.0264 33.8168 25.6401 33.9859C25.8022 33.993 25.9571 34 26.1192 34C27.8734 34 29.2825 33.3941 30.4308 32.1471C30.4379 32.1401 30.452 32.126 30.459 32.1119C30.8676 31.6187 31.3326 31.1749 31.8187 30.7029C32.1499 30.3858 32.488 30.0547 32.8121 29.7165C34.3127 28.1525 34.3127 26.1658 32.798 24.6511L28.5639 20.4169C27.8453 19.6701 26.9857 19.2756 26.084 19.2756C25.1822 19.2756 24.3156 19.6701 23.5759 20.4099L21.0537 22.932C20.8212 22.7982 20.5817 22.6784 20.3562 22.5657C20.0744 22.4248 19.8138 22.2909 19.5813 22.143C17.2845 20.6846 15.1992 18.7824 13.2054 16.3378C12.1979 15.0626 11.5216 13.9917 11.0496 12.8997C11.7118 12.3009 12.3318 11.6739 12.9306 11.0609C13.142 10.8425 13.3604 10.6241 13.5788 10.4057C14.3397 9.64484 14.7483 8.76419 14.7483 7.86946C14.7483 6.97472 14.3467 6.09407 13.5788 5.3332L11.4793 3.23373C11.2327 2.98715 11.0002 2.74762 10.7607 2.50104C10.2957 2.02196 9.80961 1.5288 9.33054 1.08496C8.60489 0.373394 7.75242 0 6.85064 0C5.9559 0 5.09639 0.373394 4.34256 1.092L1.70766 3.7269C0.749521 4.68504 0.207042 5.84749 0.0943194 7.19312C-0.0395388 8.87692 0.270449 10.6664 1.0736 12.8293C2.3065 16.1757 4.16643 19.2826 6.92814 22.6009ZM1.81334 7.34107C1.89788 6.40406 2.25719 5.62205 2.93352 4.94571L5.55433 2.32491C5.96295 1.93038 6.41384 1.72607 6.85064 1.72607C7.2804 1.72607 7.7172 1.93038 8.11877 2.339C8.5908 2.7758 9.03464 3.23373 9.51371 3.71985C9.75325 3.96643 9.99983 4.21301 10.2464 4.46664L12.3459 6.5661C12.7827 7.0029 13.0081 7.44675 13.0081 7.88355C13.0081 8.32035 12.7827 8.76419 12.3459 9.201C12.1275 9.4194 11.9091 9.64484 11.6907 9.86324C11.0355 10.5255 10.4225 11.1525 9.74621 11.7513C9.73212 11.7654 9.72507 11.7725 9.71098 11.7866C9.12623 12.3713 9.21782 12.9279 9.35872 13.3506C9.36577 13.3717 9.37281 13.3858 9.37986 13.407C9.92234 14.7103 10.6762 15.9503 11.8527 17.4298C13.9663 20.0365 16.1925 22.0584 18.6443 23.6154C18.9472 23.8127 19.2713 23.9677 19.5742 24.1227C19.856 24.2636 20.1167 24.3974 20.3492 24.5454C20.3774 24.5595 20.3985 24.5736 20.4267 24.5877C20.6592 24.7074 20.8846 24.7638 21.1101 24.7638C21.6737 24.7638 22.04 24.4045 22.1598 24.2847L24.7947 21.6498C25.2033 21.2412 25.6472 21.0228 26.084 21.0228C26.6194 21.0228 27.0562 21.3539 27.331 21.6498L31.5792 25.891C32.4246 26.7364 32.4176 27.6523 31.5581 28.547C31.2622 28.8641 30.9522 29.167 30.621 29.484C30.1279 29.9631 29.6136 30.4563 29.1486 31.0128C28.3384 31.8864 27.3732 32.2951 26.1262 32.2951C26.0065 32.2951 25.8797 32.288 25.7599 32.281C23.4491 32.133 21.3003 31.2312 19.6869 30.4633C15.3048 28.3427 11.4582 25.3344 8.26672 21.516C5.63887 18.3527 3.87053 15.4078 2.70103 12.2516C1.97538 10.3141 1.70062 8.75715 1.81334 7.34107Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_592_544">
          <rect width="34" height="34" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Menu = ({ width = 38, height = 26, color = "#221F1F" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 38 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1H37M1 13H37M1 25H37"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Logo = ({ width = 230, height = 115 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 230 115"
      fill="none"
    >
      <g clip-path="url(#clip0_354_3882)">
        <path
          d="M60.5487 107.143C60.5487 107.5 60.4778 108.357 59.9815 109C59.9106 109.071 59.8397 109.143 59.8397 109.214C59.6979 109.357 59.4852 109.5 59.2725 109.714C58.0672 110.5 56.5074 110.5 55.3021 109.714C54.7349 109.357 54.3804 108.786 54.2386 108.643C54.1677 108.5 53.955 108.143 53.7423 107.643C53.6714 107.357 53.6005 107.143 53.6005 106.929L54.1677 106.857C54.1677 107.071 54.2386 107.286 54.3095 107.571C54.3804 107.786 54.4513 108.143 54.7349 108.5C55.2312 109.357 56.082 109.643 56.3656 109.786C56.5783 109.857 56.8619 109.929 57.1455 109.929C57.8545 109.929 58.4217 109.571 58.7053 108.857C58.7762 108.643 58.8471 108.429 58.918 108.214C59.0598 107.5 59.1307 106.786 59.1307 106.071V97.4286H60.6905C60.6905 102.5 60.6196 106.214 60.5487 107.143Z"
          fill="#FBFBFB"
        />
        <path
          d="M82.5986 103.714V104H85.2928C85.5055 104 85.6473 104.143 85.6473 104.357V106.643C85.6473 107.5 85.3637 108.143 84.7965 108.643C84.2293 109.143 83.5203 109.429 82.5986 109.429C81.8187 109.429 81.1097 109.214 80.4007 108.714C79.6917 108.214 79.1954 107.571 78.77 106.643C78.3446 105.786 78.1319 104.786 78.1319 103.643C78.1319 102.5 78.3446 101.429 78.6991 100.5C79.0536 99.5714 79.6208 98.8571 80.2589 98.2857C80.897 97.7143 81.606 97.5 82.3859 97.5C83.0949 97.5 83.8039 97.7143 84.3711 98.1428C84.9383 98.5714 85.2928 99.2143 85.5055 99.9286L86.4272 98.8571C85.86 98.2857 85.2928 97.9286 84.5838 97.5714C83.8748 97.2857 83.1658 97.1429 82.3859 97.1429C81.3224 97.1429 80.3298 97.4286 79.4081 98C78.4864 98.5714 77.7774 99.3571 77.2811 100.357C76.7848 101.357 76.5012 102.429 76.5012 103.571C76.5012 104.714 76.7848 105.786 77.2811 106.786C77.7774 107.786 78.5573 108.5 79.479 109.143C80.4007 109.714 81.3933 110 82.5277 110C83.2367 110 83.8039 109.857 84.3711 109.571C84.9383 109.286 85.2928 108.857 85.5764 108.357V109.786H87.1362V103.643H82.5986V103.714Z"
          fill="#FBFBFB"
        />
        <path
          d="M93.5172 109.571C93.3045 109.571 93.1627 109.429 93.1627 109.214V97.3571H91.6029V109.857H98.4093V109.571H93.5172Z"
          fill="#FBFBFB"
        />
        <path
          d="M118.403 103.357L122.445 109.857H120.814L117.552 104.5L113.653 109.857H113.298H113.157L117.269 104.071L113.157 97.3571H114.716L118.191 103L122.232 97.3571H122.799L118.403 103.357Z"
          fill="#FBFBFB"
        />
        <path
          d="M69.3403 97.3571H68.4895L63.9519 109.857H64.3064L66.2207 104.714H70.4038L72.2472 109.857H73.807L69.3403 97.3571ZM66.2916 104.429L68.135 99.2857H68.2059C68.3477 99.2857 68.4895 99.4286 68.5604 99.7857V99.7143L70.262 104.357H66.2916V104.429Z"
          fill="#FBFBFB"
        />
        <path
          d="M106.421 97.3571H105.57L101.033 109.857H101.458L103.372 104.714H107.555L109.399 109.857H110.959L106.421 97.3571ZM103.443 104.429L105.287 99.2857C105.428 99.2857 105.57 99.4286 105.641 99.7857V99.7143L107.343 104.357H103.443V104.429Z"
          fill="#FBFBFB"
        />
        <path
          d="M140.453 97.6429H142.013V109.714H140.453V104.714C140.453 104.5 140.311 104.357 140.099 104.357H135.419C135.206 104.357 135.065 104.5 135.065 104.714V109.714H133.505V97.6429H135.065V103.786C135.065 104 135.136 104.143 135.419 104.143H140.169C140.382 104.143 140.524 104.071 140.524 103.786V97.6429H140.453Z"
          fill="#FBFBFB"
        />
        <path
          d="M150.663 109.071C149.812 108.5 149.103 107.786 148.607 106.786C148.11 105.857 147.827 104.786 147.827 103.714C147.827 102.571 148.11 101.571 148.607 100.643C149.103 99.7143 149.812 98.9286 150.663 98.3571C151.513 97.7857 152.506 97.5 153.499 97.5C154.562 97.5 155.484 97.7857 156.406 98.3571C157.256 98.9286 157.965 99.6429 158.462 100.643C158.958 101.571 159.242 102.643 159.242 103.714C159.242 104.857 158.958 105.857 158.462 106.786C157.965 107.714 157.256 108.5 156.406 109C155.555 109.571 154.562 109.857 153.499 109.857C152.435 109.857 151.513 109.571 150.663 109.071ZM155.626 108.786C156.264 108.286 156.76 107.571 157.115 106.643C157.469 105.714 157.682 104.786 157.682 103.643C157.682 102.571 157.469 101.571 157.115 100.643C156.76 99.7143 156.264 99.0714 155.626 98.5C154.988 98 154.279 97.7143 153.499 97.7143C152.719 97.7143 152.01 98 151.372 98.5C150.734 99 150.237 99.7143 149.883 100.643C149.528 101.571 149.316 102.571 149.316 103.643C149.316 104.714 149.528 105.714 149.883 106.643C150.237 107.571 150.734 108.214 151.372 108.786C152.01 109.286 152.719 109.571 153.499 109.571C154.279 109.571 154.988 109.286 155.626 108.786Z"
          fill="#FBFBFB"
        />
        <path
          d="M175.903 97.6429V109.714H174.343V98.4286L170.231 109.714H169.451L165.339 98.4286V109.714H165.055V97.6429H166.615L170.16 107.357V107.286C170.302 107.643 170.444 107.786 170.515 107.786C170.586 107.786 170.727 107.714 170.798 107.5L174.414 97.6429H175.903Z"
          fill="#FBFBFB"
        />
        <path
          d="M184.198 97.8571C183.986 97.8571 183.844 98 183.844 98.2143V103.571C183.844 103.786 183.915 103.929 184.198 103.929H187.743V104.214H184.198C183.986 104.214 183.844 104.357 183.844 104.571V109.214C183.844 109.429 183.915 109.571 184.198 109.571H188.878V109.857H182.355V97.7857H188.878V98.0714H184.198V97.8571Z"
          fill="#FBFBFB"
        />
        <path
          d="M194.479 107.357C194.833 107.929 195.33 108.429 195.968 108.857C196.606 109.286 197.315 109.5 198.095 109.5C198.946 109.5 199.584 109.286 200.08 108.857C200.576 108.429 200.86 107.857 200.86 107.214C200.86 106.571 200.576 106 199.938 105.571C199.371 105.143 198.449 104.643 197.315 104.071C196.464 103.643 195.826 103.357 195.33 103C194.833 102.714 194.408 102.357 194.054 101.929C193.699 101.5 193.557 101.071 193.557 100.5C193.557 99.5714 193.983 98.8571 194.763 98.2857C195.542 97.7143 196.606 97.5 197.882 97.5C199.938 97.5 201.427 98.0714 202.278 99.2857L201.427 100.214C200.576 98.5714 199.371 97.7857 197.882 97.7857C197.173 97.7857 196.535 98 195.897 98.3571C195.33 98.7143 195.046 99.2857 195.046 99.9286C195.046 100.357 195.188 100.786 195.472 101.143C195.755 101.5 196.181 101.786 196.606 102C197.031 102.214 197.669 102.571 198.449 102.929C199.3 103.357 200.009 103.643 200.576 104C201.144 104.286 201.569 104.643 201.923 105.143C202.278 105.571 202.491 106.143 202.491 106.714C202.491 107.286 202.278 107.857 201.923 108.357C201.569 108.857 201.002 109.214 200.293 109.5C199.584 109.786 198.804 109.929 197.953 109.929C196.96 109.929 196.039 109.786 195.259 109.429C194.479 109.071 193.912 108.643 193.486 108.143L194.479 107.357Z"
          fill="#FBFBFB"
        />
        <path
          d="M37.3643 108.786C36.5844 109.5 35.5209 109.857 34.2447 109.857H29.2108V96.3571H33.6775C34.8828 96.3571 35.8045 96.6429 36.5135 97.2143C37.2225 97.7857 37.577 98.5714 37.577 99.5C37.577 100.143 37.4352 100.714 37.0807 101.214C36.7262 101.714 36.2299 102.071 35.6627 102.357C35.5918 102.357 35.5209 102.429 35.5209 102.5C35.5209 102.571 35.5209 102.571 35.6627 102.571C36.5844 102.786 37.2934 103.214 37.7897 103.857C38.286 104.5 38.5696 105.214 38.5696 106.143C38.5696 107.214 38.1442 108.071 37.3643 108.786ZM35.2373 97.4286C34.8119 96.9286 34.3156 96.6429 33.6066 96.6429H31.2669C31.0542 96.6429 30.9124 96.7857 30.9124 97V102C30.9124 102.214 31.0542 102.357 31.2669 102.357H33.6066C34.2447 102.357 34.8119 102.071 35.2373 101.571C35.6627 101.071 35.8045 100.357 35.8045 99.5C35.8754 98.6429 35.6627 97.9286 35.2373 97.4286ZM34.1029 109.5C34.9537 109.5 35.5918 109.214 36.0881 108.571C36.5844 107.929 36.7971 107.143 36.7971 106.071C36.7971 105 36.5844 104.214 36.0881 103.571C35.5918 103 34.9537 102.643 34.1029 102.643H31.2669C31.0542 102.643 30.9124 102.786 30.9124 103V109.143C30.9124 109.357 31.0542 109.5 31.2669 109.5H34.1029Z"
          fill="#FBFBFB"
        />
        <path
          d="M48.1411 99.5H48.4247L43.958 112.071C43.6744 112.786 43.3199 113.357 42.8236 113.929C42.3273 114.5 41.831 114.857 41.3347 115.071L40.6966 113.714H41.0511C41.6892 113.714 42.2564 113.571 42.6818 113.286C43.1072 113 43.4617 112.571 43.6744 112L44.4543 109.857H43.8871L40.1294 99.5H41.831L44.5961 107.143C44.7379 107.5 44.8797 107.714 45.0215 107.714C45.1633 107.714 45.2342 107.571 45.376 107.357L48.1411 99.5Z"
          fill="#FBFBFB"
        />
        <path
          d="M19.0721 51.3571L37.577 76.5714C38.7114 78.1429 38.995 79.5 38.4278 80.5714C37.8606 81.7143 36.6553 82.2143 34.741 82.2143H31.5505C30.4161 82.2143 29.4944 81.7143 28.7145 80.7143L11.2022 56.7857C10.7768 56.2143 10.4223 56 10.0678 56.0714C9.71329 56.2143 9.57149 56.6429 9.57149 57.3572V78.5714C9.57149 79.5714 9.21699 80.4286 8.50799 81.1429C7.79899 81.8571 6.94819 82.2143 5.95559 82.2143H3.54498C2.55238 82.2143 1.70158 81.8571 0.992579 81.1429C0.283578 80.4286 -0.0709229 79.5714 -0.0709229 78.5714V4.07143C-0.0709229 3.07143 0.283578 2.21429 0.992579 1.5C1.70158 0.785716 2.55238 0.428574 3.54498 0.428574H6.02649C7.01909 0.428574 7.86989 0.785716 8.57889 1.5C9.28789 2.21429 9.6424 3.07143 9.6424 4.07143V42.0714C9.6424 43.2143 9.78419 43.8571 10.1387 44C10.4932 44.1429 10.8477 43.6429 11.344 42.4286L28.6436 2.57143C28.8563 2 29.3526 1.5 29.9198 1.07143C30.5579 0.642859 31.196 0.428574 31.8341 0.428574H34.3865C35.8754 0.428574 36.9389 0.928574 37.577 1.85714C38.2151 2.78572 38.2151 4 37.577 5.35715L18.7885 49.6429C18.434 50.2857 18.5758 50.8571 19.0721 51.3571Z"
          fill="#FBFBFB"
        />
        <path
          d="M67.3552 0C71.6092 0 74.9415 0.785714 77.2812 2.28571C79.6209 3.78571 81.3225 5.57143 82.4569 7.5C83.5913 9.42857 84.2294 11.2857 84.3712 13.0714C84.513 14.8571 84.5839 15.9286 84.5839 16.3571V66.0714C84.5839 66.5 84.513 67.5714 84.3712 69.3571C84.2294 71.1429 83.5913 73 82.4569 74.9286C81.3225 76.8571 79.6209 78.5714 77.2812 80.1429C74.9415 81.6429 71.6092 82.4286 67.3552 82.4286C63.0302 82.4286 59.627 81.6429 57.2164 80.0714C54.8058 78.5 53.1042 76.7143 52.0407 74.7857C50.9772 72.8571 50.3391 71 50.1973 69.2857C50.0555 67.5714 49.9846 66.5 49.9846 66.0714V16.3571C49.9846 16 50.0555 15 50.1973 13.2143C50.3391 11.4286 50.9772 9.57143 52.0407 7.64286C53.1042 5.71429 54.8058 3.92857 57.2164 2.35714C59.627 0.785714 63.0302 0 67.3552 0ZM67.2843 73.7857C69.2695 73.7857 70.7584 73.4286 71.751 72.6429C72.7436 71.8571 73.5235 71 74.0198 70C74.587 68.9286 74.9415 67.6429 75.0124 66.1429V16.3571C74.9415 14.9286 74.587 13.6429 74.0198 12.5C73.5235 11.5714 72.7436 10.7143 71.751 9.92857C70.7584 9.07143 69.1986 8.71429 67.2843 8.71429C65.299 8.71429 63.8101 9.14286 62.8175 9.92857C61.8249 10.7857 61.045 11.6429 60.5487 12.5C59.9815 13.6429 59.627 14.9286 59.5561 16.3571V66.0714C59.627 67.5714 59.9815 68.8571 60.5487 69.9286C61.045 70.9286 61.8249 71.7857 62.8175 72.5714C63.881 73.3571 65.3699 73.7857 67.2843 73.7857Z"
          fill="#FBFBFB"
        />
        <path
          d="M114.716 0.35714C115.638 0.35714 116.418 0.571425 117.056 1.07143C117.694 1.57143 118.12 2.28571 118.261 3.14285L133.789 77.8571C134.001 79 133.789 80 133.08 80.8571C132.371 81.7143 131.449 82.1429 130.314 82.1429H127.762C126.84 82.1429 126.131 81.8571 125.493 81.3571C124.855 80.7857 124.501 80.1429 124.359 79.2857L122.515 70.2857C122.374 69.7857 122.09 69.5714 121.665 69.5714H105.358C104.932 69.5714 104.649 69.7857 104.507 70.2857L102.876 79.2143C102.734 80.1429 102.309 80.8571 101.671 81.3571C101.033 81.9286 100.253 82.1429 99.3311 82.1429H96.8496C95.7152 82.1429 94.7935 81.7143 94.0845 80.8571C93.3755 80 93.0919 79 93.3046 77.8571L108.194 3.21428C108.335 2.35714 108.761 1.71428 109.399 1.14285C110.037 0.571425 110.817 0.35714 111.597 0.35714H114.716ZM106.705 58.9286C106.563 59.5714 106.846 59.9286 107.555 59.9286H119.325C120.034 59.9286 120.318 59.5714 120.176 58.9286L114.007 28.8571C113.795 27.7143 113.44 27.1429 113.157 27.1429C112.802 27.1429 112.518 27.7143 112.306 28.8571L106.705 58.9286Z"
          fill="#FBFBFB"
        />
        <path
          d="M159.667 71.9286C160.022 72.2857 160.376 72.5 160.872 72.5H171.933C172.854 72.5 173.634 72.8571 174.343 73.5714C175.052 74.2857 175.407 75.1429 175.407 76.1429V78.6429C175.407 79.6429 175.052 80.5 174.343 81.2143C173.634 81.9286 172.854 82.2857 171.933 82.2857H153.144C152.152 82.2857 151.301 81.9286 150.592 81.2143C149.883 80.5 149.528 79.6429 149.528 78.6429V3.92857C149.528 2.92857 149.883 2.07143 150.592 1.35714C151.301 0.642856 152.152 0.285713 153.144 0.285713H155.626C156.618 0.285713 157.469 0.642856 158.178 1.35714C158.887 2.07143 159.242 2.92857 159.242 3.92857V70.6429C159.171 71.1429 159.313 71.5714 159.667 71.9286Z"
          fill="#FBFBFB"
        />
        <path
          d="M210.857 0.35714C211.779 0.35714 212.559 0.571425 213.197 1.07143C213.835 1.57143 214.26 2.28571 214.402 3.14285L229.929 77.8571C230.142 79 229.929 80 229.22 80.8571C228.511 81.7143 227.589 82.1429 226.455 82.1429H223.903C222.981 82.1429 222.272 81.8571 221.634 81.3571C220.996 80.7857 220.641 80.1429 220.499 79.2857L218.656 70.2857C218.514 69.7857 218.231 69.5714 217.805 69.5714H201.498C201.073 69.5714 200.789 69.7857 200.647 70.2857L199.017 79.2143C198.875 80.1429 198.449 80.8571 197.811 81.3571C197.173 81.9286 196.393 82.1429 195.472 82.1429H192.99C191.856 82.1429 190.934 81.7143 190.225 80.8571C189.516 80 189.232 79 189.445 77.8571L204.405 3.21428C204.547 2.35714 204.972 1.71428 205.61 1.14285C206.248 0.571425 207.028 0.35714 207.808 0.35714H210.857ZM202.916 58.9286C202.774 59.5714 203.058 59.9286 203.767 59.9286H215.536C216.245 59.9286 216.529 59.5714 216.387 58.9286L210.219 28.8571C210.006 27.7143 209.652 27.1429 209.368 27.1429C209.013 27.1429 208.73 27.7143 208.517 28.8571L202.916 58.9286Z"
          fill="#FBFBFB"
        />
      </g>
      <defs>
        <clipPath id="clip0_354_3882">
          <rect width="230" height="115" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
