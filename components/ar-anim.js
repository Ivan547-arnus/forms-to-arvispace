let arAnim = {
    data(){
        return{
            os:"",
            buttonToFacebook: {
                type: "roundend-button",
                content:
                  "<span class='mr-3'>Inicie sesión con</span><img src='../images/color_facebook.png' style=' height:18px'>",
                typeButton: "button",
                childClass: "fb",
                size: "",
              },
              buttonToGoogle: {
                type: "roundend-button",
                content:
                  "<img src='../images/color_google_plus.png' style='width:24px;'>",
                typeButton: "button",
                childClass: "google",
                size: "",
              },
              buttonToApple: {
                type: "roundend-button",
                content:
                  "<span class='mr-3'>Inicie sesión con</span><img src='../images/color_apple_logo.png' style='width:18px;'>",
                typeButton: "button",
                childClass: "apple",
                size: "",
              },
        }
    },
    components:{
        'primary-button-block': primaryButtonBlock,
    },
    mounted(){
        this.os = getMobileOperatingSystem()
    },
    methods:{
        handleRegister(){
            console.log("Register")
            this.$emit('active-register')
          },
          handleLogin(){
            this.$emit('active-login')
          },requestFacebook() {
            console.log("facebook")
            this.$emit("request-facebook");
          },
          requestGoogle() {
            this.$emit("request-google");
          },
          requestApple() {
            console.log("apple")
            this.$emit("request-apple");
          },
          recuperarPass() {
            this.$emit("reset-password");
          },
    },
    template:`
        <div class="anim__container">
          <div class=logo>
              <img class=logo-img src="../images/logo.png" alt="">
          </div>

          <div class="cube-wrap cw1">
              <div class="img1 sides "></div>
          </div>
          <div class="cube-wrap cw2">
              <div class="img2 sides"></div>
          </div>
          <div class="cube-wrap cw3">
              <div class="img3 sides"></div>
          </div>

          <div class="presentation">
              <svg width="100vw" height="70vh" viewBox="0 0 580 482" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="spheres">
                      <path id="sphere_one"
                          d="M577.925 351.384C576.423 352.885 573.996 352.885 572.493 351.384C570.99 349.882 570.99 347.457 572.493 345.956C573.996 344.454 576.423 344.454 577.925 345.956C579.42 347.457 579.42 349.882 577.925 351.384Z"
                          fill="url(#paint0_linear)" />
                      <path id="sphere_two"
                          d="M316.986 7.45305C315.485 8.95423 313.058 8.95423 311.556 7.45305C310.053 5.95187 310.053 3.52741 311.556 2.02624C313.058 0.524987 315.485 0.524987 316.986 2.02624C318.489 3.52741 318.489 5.95187 316.986 7.45305Z"
                          fill="url(#paint1_linear)" />
                      <path id="sphere_three"
                          d="M137.674 211.731C133.6 215.801 126.988 215.801 122.915 211.731C118.841 207.661 118.841 201.054 122.915 196.982C126.988 192.913 133.6 192.913 137.674 196.982C141.749 201.054 141.749 207.661 137.674 211.731Z"
                          fill="url(#paint2_radial)" />
                      <path id="sphere_four"
                          d="M445.086 170.532C441.012 174.602 434.399 174.602 430.326 170.532C426.252 166.461 426.252 159.854 430.326 155.784C434.399 151.714 441.012 151.714 445.086 155.784C449.16 159.854 449.16 166.461 445.086 170.532Z"
                          fill="url(#paint3_linear)" />
                      <path id="sphere_five"
                          d="M499.345 309.574C495.271 313.644 488.658 313.644 484.584 309.574C480.511 305.505 480.511 298.898 484.584 294.826C488.658 290.756 495.271 290.756 499.345 294.826C503.418 298.898 503.418 305.505 499.345 309.574Z"
                          fill="url(#paint4_radial)" />
                      <path id="sphere_six"
                          d="M152.049 79.3748C149.052 82.3692 144.191 82.3692 141.194 79.3748C138.196 76.3804 138.196 71.5236 141.194 68.5292C144.191 65.5348 149.052 65.5348 152.049 68.5292C155.046 71.5236 155.046 76.3804 152.049 79.3748Z"
                          fill="url(#paint5_linear)" />
                      <path id="sphere_seven"
                          d="M19.1049 302.301C16.1079 305.296 11.2469 305.296 8.24988 302.301C5.25297 299.306 5.25297 294.45 8.24988 291.456C11.2469 288.462 16.1079 288.462 19.1049 291.456C22.1099 294.45 22.1018 299.306 19.1049 302.301Z"
                          fill="url(#paint6_linear)" />
                      <path id="sphere_eight"
                          d="M215.097 479.267C212.1 482.262 207.239 482.262 204.243 479.267C201.246 476.273 201.246 471.416 204.243 468.422C207.239 465.427 212.1 465.427 215.097 468.422C218.094 471.416 218.094 476.273 215.097 479.267Z"
                          fill="url(#paint7_linear)" />
                      <path id="sphere_nine"
                          d="M42.3334 53.1798C40.831 54.6809 38.4045 54.6809 36.9021 53.1798C35.3996 51.6784 35.3996 49.2541 36.9021 47.7529C38.4045 46.2516 40.831 46.2516 42.3334 47.7529C43.8361 49.2541 43.828 51.6865 42.3334 53.1798Z"
                          fill="url(#paint8_linear)" />
                      <path id="sphere_ten"
                          d="M350.066 437.659C348.564 439.159 346.137 439.159 344.635 437.659C343.132 436.158 343.132 433.733 344.635 432.231C346.137 430.73 348.564 430.73 350.066 432.231C351.561 433.733 351.561 436.165 350.066 437.659Z"
                          fill="url(#paint9_linear)" />
                      <path id="sphere_eleven"
                          d="M6.85182 402.48C5.34936 403.981 2.92276 403.981 1.4203 402.48C-0.082158 400.979 -0.082158 398.555 1.4203 397.054C2.92276 395.552 5.34936 395.552 6.85182 397.054C8.35428 398.555 8.35428 400.987 6.85182 402.48Z"
                          fill="url(#paint10_linear)" />
                      <path id="sphere_twelve"
                          d="M531.95 184.243C530.448 185.744 528.021 185.744 526.518 184.243C525.015 182.742 525.015 180.318 526.518 178.816C528.021 177.315 530.448 177.315 531.95 178.816C533.452 180.318 533.452 182.75 531.95 184.243Z"
                          fill="url(#paint11_linear)" />
                      <path id="sphere_thirteen"
                          d="M135.938 389.146C134.437 390.647 132.01 390.647 130.507 389.146C129.005 387.645 129.005 385.221 130.507 383.72C132.01 382.218 134.437 382.218 135.938 383.72C137.441 385.221 137.441 387.645 135.938 389.146Z"
                          fill="url(#paint12_linear)" />
                      <path id="sphere_eight"
                          d="M271.791 373.515C267.718 377.587 261.105 377.587 257.031 373.515C252.958 369.445 252.958 362.838 257.031 358.769C261.105 354.699 267.718 354.699 271.791 358.769C275.865 362.838 275.865 369.445 271.791 373.515Z"
                          fill="url(#paint13_linear)" />
                  </g>
                  <g id="user">
                      <path
                          d="M337.994 346.318C342.961 349.187 343.049 353.838 337.994 356.706L298.779 379.53C296.004 380.945 292.934 381.682 289.819 381.682C286.704 381.682 283.634 380.945 280.859 379.53L241.328 356.706C236.361 353.838 236.349 349.124 241.328 346.331L280.593 323.508C283.369 322.095 286.439 321.36 289.553 321.36C292.668 321.36 295.738 322.095 298.514 323.508L337.994 346.318Z"
                          fill="url(#paint14_linear)" />
                      <path
                          d="M357.781 344.203C364.77 348.235 364.807 354.781 357.869 358.825L302.516 390.976C295.553 395.02 284.254 395.02 277.24 390.976L221.571 358.825C219.715 357.851 218.17 356.376 217.11 354.567C217.024 354.424 216.948 354.276 216.883 354.124C216.794 353.935 216.731 353.757 216.655 353.568L216.466 352.936L216.39 352.557C216.352 352.369 216.327 352.179 216.314 351.989C216.074 349.183 217.792 346.34 221.483 344.191L276.811 312.04C283.762 308.009 295.072 308.009 302.086 312.04L357.781 344.203ZM298.8 379.589L338.078 356.765C343.007 353.896 342.982 349.183 338.078 346.377L298.459 323.49C295.683 322.079 292.613 321.343 289.499 321.343C286.385 321.343 283.315 322.079 280.539 323.49L241.273 346.326C236.345 349.183 236.357 353.833 241.273 356.702L280.804 379.526C283.579 380.94 286.65 381.678 289.765 381.678C292.879 381.678 295.95 380.94 298.725 379.526"
                          fill="url(#paint15_linear)" />
                      <path
                          d="M357.843 358.829L302.515 390.98C295.551 395.024 284.241 395.024 277.239 390.98L221.57 358.829C219.714 357.854 218.169 356.379 217.109 354.57C217.023 354.428 216.947 354.28 216.881 354.128C216.793 353.938 216.73 353.762 216.654 353.572L216.464 352.94L216.389 352.561C216.351 352.374 216.326 352.184 216.313 351.992C216.313 351.815 216.313 351.638 216.313 351.462V370.62C216.313 370.798 216.313 370.974 216.313 371.151C216.326 371.342 216.351 371.532 216.389 371.72C216.389 371.846 216.389 371.973 216.464 372.099C216.514 372.313 216.578 372.524 216.654 372.731C216.719 372.921 216.795 373.106 216.881 373.287C216.945 373.438 217.017 373.586 217.096 373.729C218.161 375.538 219.711 377.014 221.57 377.988L277.252 410.139C284.241 414.183 295.551 414.183 302.527 410.139L357.78 377.988C361.23 375.978 362.962 373.35 362.974 370.721V351.562C363.011 354.191 361.293 356.82 357.843 358.829Z"
                          fill="url(#paint16_linear)" />
                      <path
                          d="M308.062 345.888C308.062 345.888 298.192 358.147 295.298 362.229C292.518 366.121 297.295 368.333 300.745 367.511C303.525 366.854 315.658 359.928 320.22 357.199C320.758 356.882 321.202 356.43 321.509 355.885C321.815 355.342 321.972 354.727 321.964 354.103V349.048L308.062 345.888Z"
                          fill="url(#paint17_linear)" />
                      <path
                          d="M273.112 336.41C273.112 336.41 262.091 346.685 259.21 350.767C256.329 354.849 261.219 356.859 264.67 356.037C267.437 355.367 278.47 347.873 283.285 345.383C283.854 345.09 284.331 344.646 284.665 344.1C285 343.554 285.178 342.928 285.181 342.287L285.282 336.41H273.112Z"
                          fill="url(#paint18_linear)" />
                      <path
                          d="M299.829 218.221C299.829 218.221 295.077 264.639 292.473 284.544C289.756 305.345 285.245 339.189 285.245 339.189C285.245 339.189 273.226 344.737 272.986 336.447C272.986 336.447 268.891 226.309 269.763 207.908C270.56 190.785 275.273 184.705 275.273 184.705L326.696 195.625C339.941 224.185 329.704 249.55 328.112 280.221L321.932 350.096C321.932 350.096 308.561 355.366 307.525 347.657C307.525 347.644 303.772 270.516 299.829 218.221Z"
                          fill="#0A2042" />
                      <path
                          d="M295.12 86.6235C295.12 86.6235 292.643 70.7252 308.414 69.3477C325.754 67.8438 330.619 82.7184 328.231 94.6232C326.196 104.733 329.28 112.152 341.69 109.788C343.949 109.36 346.286 109.696 348.332 110.744C350.378 111.792 352.016 113.493 352.988 115.577C354.067 117.893 354.25 120.528 353.501 122.971C352.751 125.415 351.124 127.494 348.932 128.808C339.706 134.356 324.477 140.877 316.262 130.072C303.954 113.858 303.625 94.3072 303.625 94.3072C303.625 94.3072 297.685 96.2787 295.12 86.6235Z"
                          fill="url(#paint19_linear)" />
                      <path
                          d="M277.376 117.27L271.689 147.221L239.981 160.238C239.981 160.238 237.037 167.985 243.772 171.422L278.033 166.052C278.135 171.785 277.281 177.496 275.506 182.948C275.206 183.83 275.114 184.77 275.239 185.693C275.365 186.616 275.702 187.498 276.226 188.269C280.22 194.082 292.428 206.871 322.505 207.225C323.392 207.232 324.271 207.057 325.086 206.709C325.902 206.363 326.637 205.851 327.246 205.207C327.855 204.563 328.326 203.801 328.628 202.968C328.93 202.134 329.057 201.247 329.002 200.363C328.294 189.76 328.888 174.923 333.147 152.175L339.238 166.937L329.128 195.611C329.128 195.611 333.26 200.666 338.745 200.945L356.248 173.608C357.443 171.857 358.217 169.852 358.508 167.752C358.799 165.652 358.602 163.513 357.93 161.502L345.14 128.909C340.565 119.62 335.029 118.357 326.284 115.008L293.944 107.602C290.471 106.805 286.825 107.361 283.747 109.157C280.669 110.953 278.391 113.854 277.376 117.27Z"
                          fill="url(#paint20_linear)" />
                      <path
                          d="M239.981 160.236C239.981 160.236 237.037 167.983 243.772 171.421L271.651 167.073C267.701 162.204 265.391 156.21 265.054 149.949L239.981 160.236Z"
                          fill="url(#paint21_linear)" />
                      <path
                          d="M337.144 172.877L329.194 195.625C329.194 195.625 333.326 200.68 338.812 200.958L352.725 179.195C347.059 178.525 341.677 176.342 337.144 172.877Z"
                          fill="url(#paint22_linear)" />
                      <path
                          d="M253.398 175.845L254.219 175.151C254.595 174.826 254.86 174.392 254.978 173.91C255.096 173.427 255.06 172.92 254.876 172.459L245.31 148.358C245.171 148.01 244.948 147.7 244.662 147.458C244.375 147.215 244.034 147.047 243.667 146.968L230.928 144.264C230.31 144.136 229.666 144.253 229.133 144.592L227.617 145.578L238.523 170.222C238.814 170.929 252.652 175.681 253.398 175.845Z"
                          fill="#BFCFE2" />
                      <path
                          d="M238.737 173.053L252.499 176.061C252.692 176.11 252.894 176.105 253.084 176.047C253.273 175.988 253.443 175.878 253.574 175.728C253.705 175.579 253.792 175.396 253.825 175.2C253.859 175.005 253.837 174.804 253.763 174.619L243.88 149.799C243.742 149.45 243.519 149.141 243.233 148.899C242.946 148.656 242.604 148.488 242.238 148.409L228.475 145.401C228.283 145.352 228.08 145.357 227.891 145.415C227.701 145.474 227.532 145.584 227.401 145.733C227.27 145.883 227.183 146.065 227.149 146.261C227.116 146.457 227.137 146.658 227.211 146.842L237.094 171.612C237.224 171.971 237.443 172.291 237.73 172.543C238.017 172.795 238.364 172.97 238.737 173.053Z"
                          fill="#7E9ECE" />
                      <path
                          d="M231.792 158.328C231.792 158.328 245.416 157.848 246.566 164.028C247.589 169.323 238.73 171.383 236.885 171.256C235.04 171.13 230.01 162.637 231.792 158.328Z"
                          fill="url(#paint23_linear)" />
                      <path
                          d="M308.95 122.59C310.905 122.587 312.779 121.808 314.16 120.424C315.542 119.04 316.317 117.165 316.317 115.21V103.608C316.317 103.608 309.86 102.875 309.62 98.768C309.38 94.6607 316.317 93.7129 316.317 93.7129H301.569V115.197C301.568 116.167 301.758 117.128 302.128 118.025C302.498 118.922 303.041 119.737 303.727 120.424C304.412 121.111 305.226 121.655 306.122 122.027C307.019 122.399 307.979 122.59 308.95 122.59Z"
                          fill="url(#paint24_linear)" />
                      <path
                          d="M315.373 98.4263C315.163 100.182 315.536 101.958 316.435 103.481C315.554 104.674 314.244 105.476 312.782 105.718L303.076 107.45C302.344 107.577 301.593 107.551 300.87 107.376C300.147 107.2 299.469 106.878 298.876 106.428C298.283 105.979 297.789 105.413 297.425 104.764C297.06 104.116 296.833 103.4 296.757 102.66L295.115 86.61C297.945 91.8294 309.762 91.2355 313.275 89.6431C315.234 88.771 317.483 87.0271 317.458 84.5247L317.901 84.3352C319.366 83.6275 321.843 83.6022 321.692 86.3194C321.458 88.8606 320.319 91.2333 318.482 93.0047C317.593 93.6209 316.854 94.4271 316.316 95.3649C315.778 96.3027 315.456 97.3485 315.373 98.4263Z"
                          fill="url(#paint25_linear)" />
                      <path
                          d="M329.191 195.627C329.191 195.627 322.595 204.472 322.582 206.874C322.582 210.236 331.264 215.644 334.676 215.644C337.457 215.101 340.199 209.844 339.921 208.214C339.643 206.583 336.496 207.493 336.496 207.493C337.4 205.359 338.176 203.173 338.821 200.947C338.821 200.947 332.009 198.659 329.191 195.627Z"
                          fill="url(#paint26_linear)" />
                      <path
                          d="M278.163 143.025C278.5 147.49 278.571 151.972 278.378 156.446C278.239 160.414 278.125 163.726 278.037 166.038C278.687 162.896 279.151 159.718 279.427 156.522C279.914 151.988 279.981 147.419 279.629 142.873C279.359 140.549 279.291 138.207 279.427 135.872C279.511 133.804 280.014 131.774 280.905 129.907C281.72 128.349 282.817 126.956 284.141 125.799C284.697 125.231 285.329 124.826 285.859 124.371L287.439 123.285L285.746 124.156C285.074 124.534 284.428 124.956 283.812 125.42C282.277 126.49 280.985 127.873 280.021 129.477C278.916 131.416 278.248 133.572 278.062 135.796C277.847 138.202 277.881 140.625 278.163 143.025Z"
                          fill="#5A0C6D" />
                  </g>
                  <defs>
                      <linearGradient id="paint0_linear" x1="567.345" y1="340.814" x2="576.765" y2="350.243"
                          gradientUnits="userSpaceOnUse">
                          <stop offset="0.2107" stop-color="#55EAF7" />
                          <stop offset="0.3747" stop-color="#52C0E9" />
                          <stop offset="0.6753" stop-color="#4E78D2" />
                          <stop offset="0.8914" stop-color="#4B4AC4" />
                          <stop offset="1" stop-color="#4A39BE" />
                      </linearGradient>
                      <linearGradient id="paint1_linear" x1="308.682" y1="-1.6863" x2="317.158" y2="8.06967"
                          gradientUnits="userSpaceOnUse">
                          <stop offset="0.2107" stop-color="#55EAF7" />
                          <stop offset="0.3747" stop-color="#52C0E9" />
                          <stop offset="0.6753" stop-color="#4E78D2" />
                          <stop offset="0.8914" stop-color="#4B4AC4" />
                          <stop offset="1" stop-color="#4A39BE" />
                      </linearGradient>
                      <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(117.438 187.871) scale(38.022 37.9891)">
                          <stop offset="0.2107" stop-color="#55EAF7" />
                          <stop offset="0.3436" stop-color="#52C0E9" />
                          <stop offset="0.587" stop-color="#4E78D2" />
                          <stop offset="0.762" stop-color="#4B4AC4" />
                          <stop offset="0.8499" stop-color="#4A39BE" />
                      </radialGradient>
                      <linearGradient id="paint3_linear" x1="421.765" y1="146.733" x2="437.301" y2="162.769"
                          gradientUnits="userSpaceOnUse">
                          <stop offset="0.2107" stop-color="#55EAF7" />
                          <stop offset="0.3747" stop-color="#52C0E9" />
                          <stop offset="0.6753" stop-color="#4E78D2" />
                          <stop offset="0.8914" stop-color="#4B4AC4" />
                          <stop offset="1" stop-color="#4A39BE" />
                      </linearGradient>
                      <radialGradient id="paint4_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(478.151 288.868) scale(30.9941 30.9671)">
                          <stop offset="0.2107" stop-color="#55EAF7" />
                          <stop offset="0.3518" stop-color="#52C0E9" />
                          <stop offset="0.6104" stop-color="#4E78D2" />
                          <stop offset="0.7963" stop-color="#4B4AC4" />
                          <stop offset="0.8897" stop-color="#4A39BE" />
                      </radialGradient>
                      <linearGradient id="paint5_linear" x1="138.215" y1="61.6054" x2="147.074" y2="74.6461"
                          gradientUnits="userSpaceOnUse">
                          <stop offset="0.2107" stop-color="#55EAF7" />
                          <stop offset="0.3747" stop-color="#52C0E9" />
                          <stop offset="0.6753" stop-color="#4E78D2" />
                          <stop offset="0.8914" stop-color="#4B4AC4" />
                          <stop offset="1" stop-color="#4A39BE" />
                      </linearGradient>
                      <linearGradient id="paint6_linear" x1="2.32554" y1="282.574" x2="16.1725" y2="300.048"
                          gradientUnits="userSpaceOnUse">
                          <stop offset="0.2107" stop-color="#55EAF7" />
                          <stop offset="0.3747" stop-color="#52C0E9" />
                          <stop offset="0.6753" stop-color="#4E78D2" />
                          <stop offset="0.8914" stop-color="#4B4AC4" />
                          <stop offset="1" stop-color="#4A39BE" />
                      </linearGradient>
                      <linearGradient id="paint7_linear" x1="198.015" y1="460.909" x2="210.807" y2="475.132"
                          gradientUnits="userSpaceOnUse">
                          <stop offset="0.2107" stop-color="#55EAF7" />
                          <stop offset="0.3747" stop-color="#52C0E9" />
                          <stop offset="0.6753" stop-color="#4E78D2" />
                          <stop offset="0.8914" stop-color="#4B4AC4" />
                          <stop offset="1" stop-color="#4A39BE" />
                      </linearGradient>
                      <linearGradient id="paint8_linear" x1="34.6511" y1="41.7117" x2="41.0692" y2="53.0477"
                          gradientUnits="userSpaceOnUse">
                          <stop offset="0.2107" stop-color="#55EAF7" />
                          <stop offset="0.3747" stop-color="#52C0E9" />
                          <stop offset="0.6753" stop-color="#4E78D2" />
                          <stop offset="0.8914" stop-color="#4B4AC4" />
                          <stop offset="1" stop-color="#4A39BE" />
                      </linearGradient>
                      <linearGradient id="paint9_linear" x1="341.444" y1="426.425" x2="348.136" y2="436.098"
                          gradientUnits="userSpaceOnUse">
                          <stop offset="0.2107" stop-color="#55EAF7" />
                          <stop offset="0.3747" stop-color="#52C0E9" />
                          <stop offset="0.6753" stop-color="#4E78D2" />
                          <stop offset="0.8914" stop-color="#4B4AC4" />
                          <stop offset="1" stop-color="#4A39BE" />
                      </linearGradient>
                      <linearGradient id="paint10_linear" x1="-4.57321" y1="391.763" x2="4.95182" y2="400.533"
                          gradientUnits="userSpaceOnUse">
                          <stop offset="0.2107" stop-color="#55EAF7" />
                          <stop offset="0.3747" stop-color="#52C0E9" />
                          <stop offset="0.6753" stop-color="#4E78D2" />
                          <stop offset="0.8914" stop-color="#4B4AC4" />
                          <stop offset="1" stop-color="#4A39BE" />
                      </linearGradient>
                      <linearGradient id="paint11_linear" x1="524.057" y1="173.57" x2="529.453" y2="181.881"
                          gradientUnits="userSpaceOnUse">
                          <stop offset="0.2107" stop-color="#55EAF7" />
                          <stop offset="0.3747" stop-color="#52C0E9" />
                          <stop offset="0.6753" stop-color="#4E78D2" />
                          <stop offset="0.8914" stop-color="#4B4AC4" />
                          <stop offset="1" stop-color="#4A39BE" />
                      </linearGradient>
                      <linearGradient id="paint12_linear" x1="128.503" y1="379.769" x2="135.741" y2="389.994"
                          gradientUnits="userSpaceOnUse">
                          <stop offset="0.2107" stop-color="#55EAF7" />
                          <stop offset="0.3747" stop-color="#52C0E9" />
                          <stop offset="0.6753" stop-color="#4E78D2" />
                          <stop offset="0.8914" stop-color="#4B4AC4" />
                          <stop offset="1" stop-color="#4A39BE" />
                      </linearGradient>
                      <linearGradient id="paint13_linear" x1="253.362" y1="348.974" x2="266.254" y2="369.046"
                          gradientUnits="userSpaceOnUse">
                          <stop offset="0.2107" stop-color="#55EAF7" />
                          <stop offset="0.3747" stop-color="#52C0E9" />
                          <stop offset="0.6753" stop-color="#4E78D2" />
                          <stop offset="0.8914" stop-color="#4B4AC4" />
                          <stop offset="1" stop-color="#4A39BE" />
                      </linearGradient>
                      <linearGradient id="paint14_linear" x1="268.549" y1="366.324" x2="323.613" y2="327.728"
                          gradientUnits="userSpaceOnUse">
                          <stop stop-color="#6190D6" />
                          <stop offset="1" stop-color="#B9D2FC" />
                      </linearGradient>
                      <linearGradient id="paint15_linear" x1="15003.4" y1="16982.8" x2="8880.58" y2="23716.6"
                          gradientUnits="userSpaceOnUse">
                          <stop stop-color="#6190D6" />
                          <stop offset="1" stop-color="#B9D2FC" />
                      </linearGradient>
                      <linearGradient id="paint16_linear" x1="-162.074" y1="15638.9" x2="11638.3" y2="15638.9"
                          gradientUnits="userSpaceOnUse">
                          <stop stop-color="#6190D6" />
                          <stop offset="1" stop-color="#B9D2FC" />
                      </linearGradient>
                      <linearGradient id="paint17_linear" x1="322.582" y1="344.889" x2="306.191" y2="357.856"
                          gradientUnits="userSpaceOnUse">
                          <stop stop-color="#D16A0D" />
                          <stop offset="1" stop-color="#FFBD39" />
                      </linearGradient>
                      <linearGradient id="paint18_linear" x1="1739.72" y1="4482.34" x2="1496.47" y2="4799.16"
                          gradientUnits="userSpaceOnUse">
                          <stop stop-color="#D16A0D" />
                          <stop offset="1" stop-color="#FFBD39" />
                      </linearGradient>
                      <linearGradient id="paint19_linear" x1="324.477" y1="86.219" x2="324.477" y2="124.006"
                          gradientUnits="userSpaceOnUse">
                          <stop stop-color="#112D93" />
                          <stop offset="1" stop-color="#4060FF" />
                      </linearGradient>
                      <linearGradient id="paint20_linear" x1="305.722" y1="114.338" x2="296.51" y2="183.909"
                          gradientUnits="userSpaceOnUse">
                          <stop stop-color="#690B7F" />
                          <stop offset="1" stop-color="#CB3DE8" />
                      </linearGradient>
                      <linearGradient id="paint21_linear" x1="261.958" y1="116.573" x2="253.87" y2="177.575"
                          gradientUnits="userSpaceOnUse">
                          <stop stop-color="#FF817B" />
                          <stop offset="0.13" stop-color="#FF8D84" />
                          <stop offset="0.47" stop-color="#FFA899" />
                          <stop offset="0.77" stop-color="#FFB9A6" />
                          <stop offset="1" stop-color="#FFBFAB" />
                      </linearGradient>
                      <linearGradient id="paint22_linear" x1="28323.2" y1="1304.83" x2="28566" y2="2839.44"
                          gradientUnits="userSpaceOnUse">
                          <stop stop-color="#FF817B" />
                          <stop offset="0.13" stop-color="#FF8D84" />
                          <stop offset="0.47" stop-color="#FFA899" />
                          <stop offset="0.77" stop-color="#FFB9A6" />
                          <stop offset="1" stop-color="#FFBFAB" />
                      </linearGradient>
                      <linearGradient id="paint23_linear" x1="19782.8" y1="1135.61" x2="19582.7" y2="1142.96"
                          gradientUnits="userSpaceOnUse">
                          <stop stop-color="#FF817B" />
                          <stop offset="0.13" stop-color="#FF8D84" />
                          <stop offset="0.47" stop-color="#FFA899" />
                          <stop offset="0.77" stop-color="#FFB9A6" />
                          <stop offset="1" stop-color="#FFBFAB" />
                      </linearGradient>
                      <linearGradient id="paint24_linear" x1="308.95" y1="105.378" x2="308.95" y2="118.154"
                          gradientUnits="userSpaceOnUse">
                          <stop stop-color="#FF817B" />
                          <stop offset="1" stop-color="#FFBFAB" />
                      </linearGradient>
                      <linearGradient id="paint25_linear" x1="-2573.55" y1="470.471" x2="-2573.55" y2="720.376"
                          gradientUnits="userSpaceOnUse">
                          <stop stop-color="#FF817B" />
                          <stop offset="1" stop-color="#FFBFAB" />
                      </linearGradient>
                      <linearGradient id="paint26_linear" x1="1902.55" y1="2621.43" x2="1902.55" y2="2326.76"
                          gradientUnits="userSpaceOnUse">
                          <stop stop-color="#FF817B" />
                          <stop offset="0.13" stop-color="#FF8D84" />
                          <stop offset="0.47" stop-color="#FFA899" />
                          <stop offset="0.77" stop-color="#FFB9A6" />
                          <stop offset="1" stop-color="#FFBFAB" />
                      </linearGradient>
                  </defs>
              </svg>
          </div>
              <div class="buttons mb-5">
                  <button class="btn ios-btn-primary mt-3" @click="handleLogin">Iniciar Sesión</button>

                  <primary-button-block class="button-facebook  mt-3" v-if="os != 'ios'"
                      :field="buttonToFacebook" @clicked-button="requestFacebook">
                  </primary-button-block>

                  <primary-button-block v-if="1 > 5" :field="buttonToGoogle" @clicked-button="requestGoogle">
                  </primary-button-block>
                  
                  <primary-button-block class="button-apple  mt-3" v-if="os == 'ios'" :field="buttonToApple"
                      @clicked-button="requestApple">
                  </primary-button-block>

                  <button class="btn ios-btn-primary mt-3" @click="handleRegister"><span>Registrate</span></button>
              </div>
      </div>
    `
}