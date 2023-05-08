"use client";
import React from "react";
import Image from "next/image";

function FooterBig() {
  return (
    <footer>
      <div className="lg:py-[96px] sm:py-[48px] bg-transparent">
        <div
          className="xl:px-[120px] sm:px-[24px] lg:px-[64px]
mx-auto max-w-maxContainer"
        >
          <h3
            className="lg:mb-[96px] sm:mb-[24px]
  font-bold text-center
  lg:text-[2.3vw] sm:text-[6.5vw] md:text-[4.5vw]"
          >
            Flexible Engagement Models <br className="lg:hidden sm:block" /> for
            Your Demand
          </h3>
        </div>
        <div
          className="xl:px-[120px] sm:px-[24px] lg:px-[64px]
mx-auto max-w-maxContainer 
"
          data-aos="fade-up"
        >
          <div
            className="sm:overflow-hidden sm:overflow-x-auto
          lg:overflow-visible lg:overflow-x-unset"
          >
            {" "}
            <div
              className="lg:flex flex-wrap justify-between
        lg:w-[unset]
        sm:block sm:w-FooterBigRow
        sm:before:max-w-[24px] lg:before:max-w-none
        sm:after:max-w-[24px] lg:after:max-w-none
        "
            >
              <div
                className="overflow-[inherit] rounded-none 
                lg:m-0
          md:flex-FooterBigRow relative z-10 md:max-w-full
          sm:p-FooterBigRow md:p-FooterBigRowMD sm:block 
          sm:float-left sm:max-w-[60vw]
          sm:w-[60vw] sm:m-FooterBigRow
          after:h-full after:w-full after:top-0 after:left-0
          after:absolute after:z-[-10] after:bg-white
          after:shadow-lg after:rounded-[16px]
          after:box-border
          "
              >
                <div className="text-center mt-[32px] flex justify-center">
                  <svg
                    width="89"
                    height="88"
                    viewBox="0 0 89 88"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="align-middle overflow-hidden"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M42.5 7.99951H38.156C37.332 5.67151 35.108 3.99951 32.5 3.99951C29.892 3.99951 27.668 5.67151 26.84 7.99951H22.5C21.396 7.99951 20.5 8.89551 20.5 9.99951V17.9995C20.5 19.1035 21.396 19.9995 22.5 19.9995H42.5C43.604 19.9995 44.5 19.1035 44.5 17.9995V9.99951C44.5 8.89551 43.604 7.99951 42.5 7.99951ZM52.5 11.9991H48.5V17.9991C48.5 21.3071 45.808 23.9991 42.5 23.9991H22.5C19.192 23.9991 16.5 21.3071 16.5 17.9991V11.9991H12.5C10.296 11.9991 8.5 13.7951 8.5 15.9991V63.9991C8.5 66.2431 10.256 67.9991 12.5 67.9991H44.5027C44.5009 67.9209 44.5 67.8427 44.5 67.7646V51.9991H38.5C37.396 51.9991 36.5 51.1031 36.5 49.9991C36.5 48.8951 37.396 47.9991 38.5 47.9991H44.5V47.0538C44.5 46.4328 44.9026 45.8853 45.4905 45.7069L56.5 42.3653V15.9991C56.5 13.7551 54.744 11.9991 52.5 11.9991ZM23.916 55.4151C23.524 55.8031 23.012 55.9991 22.5 55.9991C21.988 55.9991 21.476 55.8031 21.084 55.4151L17.084 51.4151C16.304 50.6351 16.304 49.3671 17.084 48.5871C17.864 47.8071 19.132 47.8071 19.912 48.5871L22.5 51.1711L29.084 44.5871C29.864 43.8071 31.132 43.8071 31.912 44.5871C32.692 45.3671 32.696 46.6311 31.916 47.4151L23.916 55.4151ZM31.916 31.4151L23.916 39.4151C23.524 39.8031 23.012 39.9991 22.5 39.9991C21.988 39.9991 21.476 39.8031 21.084 39.4151L17.084 35.4151C16.304 34.6351 16.304 33.3671 17.084 32.5871C17.864 31.8071 19.132 31.8071 19.912 32.5871L22.5 35.1711L29.084 28.5871C29.864 27.8071 31.132 27.8071 31.912 28.5871C32.692 29.3671 32.696 30.6311 31.916 31.4151ZM48.5 33.9991C48.5 35.1031 47.604 35.9991 46.5 35.9991H38.5C37.396 35.9991 36.5 35.1031 36.5 33.9991C36.5 32.8951 37.396 31.9991 38.5 31.9991H46.5C47.604 31.9991 48.5 32.8951 48.5 33.9991Z"
                      fill="#0C152A"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M64.8197 44.0497L79.7076 48.7567C80.178 48.9054 80.5 49.3616 80.5 49.8791V67.1382C80.5 69.3831 79.6378 71.6811 77.9371 73.9683C76.6382 75.7152 74.8412 77.4693 72.5961 79.182C68.8245 82.0592 65.1107 83.8242 64.9545 83.8979C64.81 83.9662 64.6551 84.0002 64.5001 84.0002C64.3452 84.0002 64.1903 83.9661 64.0458 83.8979C63.8895 83.8242 60.1756 82.0592 56.404 79.182C54.1589 77.4693 52.3619 75.7152 51.063 73.9683C49.3624 71.681 48.5 69.3831 48.5 67.1382V49.8791C48.5 49.3616 48.8221 48.9054 49.2924 48.7567L64.1806 44.0497C64.3891 43.9838 64.6113 43.9838 64.8197 44.0497ZM66.1807 73.9005V72.0213C69.0878 71.3188 70.4999 69.183 70.5 66.4569C70.5 63.3499 67.8641 62.0888 65.7947 61.0988C64.4574 60.4589 63.3566 59.9323 63.3566 59.0939C63.3566 57.9698 63.9381 57.6326 65.1286 57.6326C65.8968 57.6326 66.5718 57.8855 67.2817 58.3913C67.7179 58.7021 68.3168 58.6203 68.666 58.2115L69.7112 56.9886C70.0921 56.5428 70.0359 55.8688 69.5913 55.4885C68.6453 54.6792 67.5389 54.0856 66.1807 53.8668V52.0537C66.1807 51.4719 65.7161 51.0002 65.1429 51.0002H64.1176C63.5444 51.0002 63.0797 51.4719 63.0797 52.0537V53.923C60.394 54.5131 58.8159 56.4803 58.8159 59.3188C58.8159 62.2529 61.3584 63.5465 63.4098 64.5901C64.7968 65.2958 65.9592 65.8872 65.9592 66.7942C65.9592 67.8901 65.4054 68.368 64.0211 68.368C63.0857 68.368 62.1503 68.0771 61.0421 67.3781C60.5614 67.0751 59.9291 67.2256 59.6248 67.7097L58.6607 69.2436C58.3596 69.7228 58.494 70.3734 58.9606 70.6876C60.2396 71.5487 61.7892 72.0289 63.0797 72.1898V73.9005C63.0797 74.5079 63.5648 75.0002 64.1632 75.0002H65.0972C65.6956 75.0002 66.1807 74.5079 66.1807 73.9005Z"
                      fill="#00AEEF"
                    />
                  </svg>
                </div>
                <div
                  className="font-bold lg:text-[20px] 
            sm:text-[4vw] md:text-[3vw] text-center mt-[32px] text-black"
                >
                  Fixed Price
                </div>
                <div className="font-LightCus mt-[32px] text-[15px] leading-[1.8]">
                  <ul className="mt-[24px] pl-0 text-black">
                    <li className="mb-[12px] pl-[30px] bg-[url('/images/icons/list-icon.svg')] bg-no-repeat text-[16px] bg-listFooterBig">
                      Great fit with “compact” projects with clear requirements.
                    </li>
                    <li className="mb-[12px] pl-[30px] bg-[url('/images/icons/list-icon.svg')] bg-no-repeat text-[16px] bg-listFooterBig">
                      Billed based on agreed milestones and deliverables.
                    </li>
                    <li className="mb-[12px] pl-[30px] bg-[url('/images/icons/list-icon.svg')] bg-no-repeat text-[16px] bg-listFooterBig">
                      Never exceed your budget. Experience your peace of mind.
                    </li>
                  </ul>
                </div>
                <div
                  className="absolute text-[0] bottom-[32px]
                w-full text-center left-0 right-0 mt-[32px]"
                >
                  <a
                    href=""
                    className="leading-[32px]
                  max-w-[244px] lg:min-w-[184px] whitespace-nowrap
                  bg-[#00aeef] inline-block 
                  lg:px-[40px] text-center
                  md:px-[2.5vw] md:min-w-[20vw] 
                  sm:px-[5.1vw] sm:min-w-[34vw] 
                  sm:text-[4vw] md:text-[2vw]
                  lg:text-[16px] text-white border-2 border-[#00aeef] 
                  rounded-[32px] relative z-10 font-bold
                  overflow-hidden transition-all duration-500 outline-0
                  "
                  >
                    Let’s Talk
                  </a>
                </div>
              </div>
              <div
                className="overflow-[inherit] rounded-none 
                lg:m-0
          md:flex-FooterBigRow relative z-10 md:max-w-full
          sm:p-FooterBigRow md:p-FooterBigRowMD sm:block 
          sm:float-left sm:max-w-[60vw]
          sm:w-[60vw] sm:m-FooterBigRow
          after:h-full after:w-full after:top-0 after:left-0
          after:absolute after:z-[-10] after:bg-white
          after:shadow-lg after:rounded-[16px]
          after:box-border
          before:bg-[#faa61a] before:text-white before:block
          before:font-bold before:lg:text-[20px] before:leading-[40px] before:text-center
          before:bottom-[100%] before:w-full before:left-0 before:absolute
          before:rounded-ServicesPhotoSM
          before:content-['Most_Preferred']
          before:sm:text-[4vw] before:md:text-[3vw]
          before:box-border
          before:z-50
          "
              >
                <div className="text-center mt-[32px] flex justify-center">
                  <svg
                    width="89"
                    height="88"
                    viewBox="0 0 89 88"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M44.5003 48.3999C33.5113 48.3999 24.5713 57.2833 24.5713 68.2003C24.5713 79.1165 33.5113 87.9999 44.5003 87.9999C55.4884 87.9999 64.4284 79.1165 64.4284 68.2003C64.4284 57.2833 55.4884 48.3999 44.5003 48.3999ZM55.93 63.6571L43.0227 76.4738C41.997 77.4915 40.634 78.0525 39.1837 78.0525H39.182C37.7325 78.0525 36.3687 77.4923 35.3438 76.4755L31.1302 72.2945C29.8565 71.0317 29.8565 68.9829 31.1302 67.7201C32.4031 66.4565 34.4683 66.4565 35.7412 67.7201L39.182 71.1328L51.3165 59.0844C52.5894 57.8208 54.6537 57.8199 55.9275 59.0827C57.2012 60.3455 57.2021 62.3935 55.93 63.6571Z"
                      fill="#ED145B"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M44.4998 0C38.5803 0 33.7646 4.8475 33.7646 10.806C33.7646 14.8476 35.9807 18.3774 39.2534 20.2307C40.8057 21.1096 42.5954 21.6119 44.4998 21.6119C46.4041 21.6119 48.1938 21.1096 49.7461 20.2307C53.019 18.3774 55.2349 14.8475 55.2349 10.806C55.2349 4.84762 50.4192 0 44.4998 0ZM49.9662 23.8247L44.4998 30.4937L39.0334 23.8247C34.1113 23.8247 30.1069 27.8555 30.1069 32.8099V46.0176C34.2573 43.35 39.2001 41.8 44.5004 41.8C49.8001 41.8 54.7425 43.3499 58.8927 46.0174V32.8099C58.8927 27.8555 54.8882 23.8247 49.9662 23.8247Z"
                      fill="#ED145B"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M25.467 10.2407C21.0769 10.2407 17.5054 13.7872 17.5054 18.1466C17.5054 22.506 21.0769 26.0525 25.467 26.0525C26.5806 26.0525 27.641 25.8234 28.6043 25.4117C30.2698 24.6996 31.6431 23.4392 32.4928 21.8604C33.0893 20.7523 33.4286 19.4882 33.4286 18.1466C33.4286 13.7873 29.8571 10.2407 25.467 10.2407ZM26.3469 32.4847C26.3469 31.0064 26.611 29.5883 27.0944 28.2741H22.3521C17.471 28.2741 13.5 32.2174 13.5 37.0642V46.7667C13.5 49.6747 15.8825 52.0407 18.8112 52.0407H23.5016C24.3668 50.9334 25.3187 49.8961 26.3469 48.9388V32.4847Z"
                      fill="#0C152A"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M63.533 10.2407C59.1428 10.2407 55.5713 13.7872 55.5713 18.1466C55.5713 19.4884 55.9106 20.7525 56.507 21.8605C57.3568 23.4394 58.7301 24.6998 60.3956 25.4117C61.3589 25.8235 62.4193 26.0525 63.533 26.0525C67.9231 26.0525 71.4946 22.506 71.4946 18.1466C71.4946 13.7872 67.9231 10.2407 63.533 10.2407ZM66.6478 28.2742H61.9054C62.3888 29.5884 62.6529 31.0066 62.6529 32.4848V48.9386C63.6812 49.896 64.6331 50.9334 65.4984 52.0408H70.1886C73.1173 52.0408 75.4999 49.6748 75.4999 46.7667V37.0642C75.5 32.2174 71.5289 28.2742 66.6478 28.2742Z"
                      fill="#0C152A"
                    ></path>
                  </svg>
                </div>
                <div
                  className="font-bold lg:text-[20px] 
            sm:text-[4vw] md:text-[3vw] text-center mt-[32px] text-black"
                >
                  Dedicated Team
                </div>
                <div className="font-LightCus mt-[32px] text-[15px] leading-[1.8]">
                  <ul className="mt-[24px] pl-0 text-black">
                    <li className="mb-[12px] pl-[30px] bg-[url('/images/icons/list-icon.svg')] bg-no-repeat text-[16px] bg-listFooterBig">
                      Fit with large or long-term projects with evolving
                      requirements.
                    </li>
                    <li className="mb-[12px] pl-[30px] bg-[url('/images/icons/list-icon.svg')] bg-no-repeat text-[16px] bg-listFooterBig">
                      Broaden your development team with your full control.
                    </li>
                    <li className="mb-[12px] pl-[30px] bg-[url('/images/icons/list-icon.svg')] bg-no-repeat text-[16px] bg-listFooterBig">
                      Welcome for flexibility.
                    </li>
                  </ul>
                </div>
                <div
                  className="absolute text-[0] bottom-[32px]
                w-full text-center left-0 right-0 mt-[32px]"
                >
                  <a
                    href=""
                    className="leading-[32px]
                  max-w-[244px] lg:min-w-[184px] whitespace-nowrap
                  bg-[#00aeef] inline-block 
                  lg:px-[40px] text-center
                  md:px-[2.5vw] md:min-w-[20vw] 
                  sm:px-[5.1vw] sm:min-w-[34vw] 
                  sm:text-[4vw] md:text-[2vw]
                  lg:text-[16px] text-white border-2 border-[#00aeef] 
                  rounded-[32px] relative z-10 font-bold
                  overflow-hidden transition-all duration-500 outline-0
                  "
                  >
                    Let’s Talk
                  </a>
                </div>
              </div>
              <div
                className="overflow-[inherit] rounded-none 
                lg:m-0
          md:flex-FooterBigRow relative z-10 md:max-w-full
          sm:p-FooterBigRow md:p-FooterBigRowMD sm:block 
          sm:float-left sm:max-w-[60vw]
          sm:w-[60vw] sm:m-FooterBigRow
          after:h-full after:w-full after:top-0 after:left-0
          after:absolute after:z-[-10] after:bg-white
          after:shadow-lg after:rounded-[16px]
          after:box-border
          "
              >
                <div className="text-center mt-[32px] flex justify-center">
                  <svg
                    width="88"
                    height="88"
                    viewBox="0 0 88 88"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M35.4801 62.9139C35.6907 63.7912 36.6032 64.3648 37.5507 64.1624C38.4632 63.9599 39.0247 63.0489 38.8492 62.1716L35.4099 47.8648C35.1994 46.9538 34.2518 46.4139 33.3393 46.6164C32.3918 46.8188 31.8303 47.7299 32.0408 48.6072L35.4801 62.9139ZM44.1836 60.3149C43.8326 60.6861 43.3764 60.8885 42.8851 60.8885C42.499 60.8885 42.0779 60.7536 41.762 60.4836C41.0601 59.8763 40.9548 58.8303 41.5865 58.1554L44.0783 55.3886L41.6216 52.6217C40.9899 51.9131 41.0952 50.9008 41.7971 50.2935C42.5341 49.6861 43.587 49.7873 44.2187 50.4622L47.658 54.3088C48.2195 54.9162 48.2195 55.8272 47.658 56.4683L44.1836 60.3149ZM26.8468 55.3886L29.3034 58.1554C29.9352 58.864 29.8299 59.8763 29.128 60.4836C28.8121 60.7536 28.391 60.8885 28.0049 60.8885C27.5136 60.8885 27.0574 60.6861 26.7064 60.3149L23.2671 56.4683C22.7056 55.8609 22.7056 54.9499 23.2671 54.3088L26.7064 50.4622C27.3381 49.7873 28.391 49.6861 29.128 50.2935C29.8299 50.9008 29.9352 51.9468 29.3034 52.6217L26.8468 55.3886Z"
                      fill="#FAA61A"
                    ></path>
                    <path
                      d="M12.0016 40.0015H58.8883C61.0993 40.0015 62.8892 41.7561 62.8892 43.8481V73.5413C62.8892 75.6671 61.0642 77.388 58.8883 77.388H41.376C41.6568 78.5015 42.3587 80.2898 44.2538 82.1119C44.5696 82.4156 44.6749 82.888 44.4994 83.3266C44.324 83.7315 43.9028 84.0015 43.4466 84.0015H27.4433C26.9871 84.0015 26.566 83.7315 26.3905 83.3266C26.215 82.9217 26.3203 82.4493 26.6361 82.1119C28.5313 80.2898 29.2683 78.5015 29.549 77.388H12.0016C9.79061 77.388 8.00077 75.6334 8.00077 73.5413V43.8481C7.96568 41.7223 9.79061 40.0015 12.0016 40.0015ZM12.5631 68.5812H58.3268V44.388H12.5631V68.5812Z"
                      fill="#FAA61A"
                    ></path>
                    <path
                      d="M15.9886 22.0022L20.8124 28.0745L25.6361 22.0022C29.9393 22.0022 33.4443 25.4094 33.4443 29.6263V36.0022H8.11101V29.6263C8.11101 25.4094 11.6507 22.0022 15.9886 22.0022Z"
                      fill="#FAA61A"
                    ></path>
                    <path
                      d="M24.9118 20.9721C23.7647 21.6191 22.4118 22.0015 21 22.0015C19.5882 22.0015 18.2353 21.6191 17.0882 20.9721C14.6471 19.5897 13 16.9721 13 14.0015C13 9.5897 16.5882 6.00146 21 6.00146C25.4118 6.00146 29 9.5897 29 14.0015C29 17.0015 27.3529 19.6191 24.9118 20.9721Z"
                      fill="#FAA61A"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M44.627 11.3147H40.9925C39.1753 11.3147 37.701 12.6748 37.6667 14.3829V37.856H43.2212H55.6111H62.5904C64.7381 37.856 66.4792 39.5971 66.4792 41.7449V47.1924V52.0005H78.7084C80.5257 52.0005 82 50.6403 82 48.9638V14.3513C82 12.6748 80.5257 11.3147 78.7084 11.3147H75.074V9.03715C75.074 7.36066 73.5996 6.00049 71.7824 6.00049H71.6453C69.828 6.00049 68.3537 7.36066 68.3537 9.03715V11.3147H51.3473V9.03715C51.3473 7.36066 49.8729 6.00049 48.0557 6.00049H47.9185C46.1013 6.00049 44.627 7.36066 44.627 9.03715V11.3147ZM65.6794 21.8964C65.6794 21.6434 65.9194 21.4219 66.1937 21.4219H71.9539C72.2282 21.4219 72.4682 21.6434 72.4682 21.8964V27.1789C72.4682 27.432 72.2282 27.6534 71.9539 27.6534H66.228C65.9537 27.6534 65.7137 27.432 65.7137 27.1789V21.8964H65.6794ZM56.9704 21.4219H62.7307C63.005 21.4219 63.245 21.6434 63.245 21.8964V27.1789C63.245 27.432 63.005 27.6534 62.7307 27.6534H56.9704C56.6961 27.6534 56.4561 27.432 56.4561 27.1789V21.8964C56.4561 21.6434 56.6961 21.4219 56.9704 21.4219ZM53.4731 21.4219H47.7471C47.4728 21.4219 47.2328 21.6434 47.2328 21.8964V27.1789C47.2328 27.432 47.4728 27.6534 47.7471 27.6534H53.4731C53.7474 27.6534 53.9874 27.432 53.9874 27.1789V21.8964C53.9874 21.6434 53.7474 21.4219 53.4731 21.4219ZM66.228 29.9304H71.9539C72.2282 29.9304 72.4682 30.1518 72.4682 30.4049V35.6874C72.4682 35.9405 72.2282 36.1619 71.9539 36.1619H66.228C65.9537 36.1619 65.7137 35.9405 65.7137 35.6874V30.4049C65.6794 30.1518 65.9194 29.9304 66.228 29.9304Z"
                      fill="#0C152A"
                    ></path>
                  </svg>
                </div>
                <div
                  className="font-bold lg:text-[20px] 
            sm:text-[4vw] md:text-[3vw] text-center mt-[32px] text-black"
                >
                  Time and Materials
                </div>
                <div className="font-LightCus mt-[32px] text-[15px] leading-[1.8]">
                  <ul className="mt-[24px] pl-0 text-black">
                    <li className="mb-[12px] pl-[30px] bg-[url('/images/icons/list-icon.svg')] bg-no-repeat text-[16px] bg-listFooterBig">
                      Suit for medium to large projects with various iterations.
                    </li>
                    <li className="mb-[12px] pl-[30px] bg-[url('/images/icons/list-icon.svg')] bg-no-repeat text-[16px] bg-listFooterBig">
                      Welcome for flexibility, changes, and transparency.
                    </li>
                    <li className="mb-[12px] pl-[30px] bg-[url('/images/icons/list-icon.svg')] bg-no-repeat text-[16px] bg-listFooterBig">
                      Backed by Certified Scrum Master.
                    </li>
                  </ul>
                </div>
                <div
                  className="absolute text-[0] bottom-[32px]
                w-full text-center left-0 right-0 mt-[32px]"
                >
                  <a
                    href=""
                    className="leading-[32px]
                  max-w-[244px] lg:min-w-[184px] whitespace-nowrap
                  bg-[#00aeef] inline-block 
                  lg:px-[40px] text-center
                  md:px-[2.5vw] md:min-w-[20vw] 
                  sm:px-[5.1vw] sm:min-w-[34vw] 
                  sm:text-[4vw] md:text-[2vw]
                  lg:text-[16px] text-white border-2 border-[#00aeef] 
                  rounded-[32px] relative z-10 font-bold
                  overflow-hidden transition-all duration-500 outline-0
                  "
                  >
                    Let’s Talk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[#0c152a] text-white pt-[64px]
      pb-FooterBot"
      >
        <div
          className="mx-auto xl:px-[120px] sm:px-[24px] 
        lg:px-[64px] max-w-maxContainer box-border"
        >
          <div
            className="flex-nowrap flex md:flex md:w-full
            sm:justify-normal text-white lg:justify-between
            sm:flex-col md:flex-row"
          >
            <div
              className="lg:flex-noneAuto w-auto lg:max-w-none
              md:flex-noneAuto md:w-auto
              sm:flex-WhySM
              sm:my-[24px]
              sm:max-w-full
              sm:order-3 md:order-[unset]
                lg:pr-[50px] md:mb-[24px] sm:pr-[24px]"
            >
              <a href="" className="mb-[24px] w-full flex justify-center">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="525.000000pt"
                  height="1184.000000pt"
                  viewBox="0 0 525.000000 1184.000000"
                  preserveAspectRatio="xMidYMid meet"
                  className="hover:scale-110 transition-all
                    max-w-full w-[auto] h-[80px]"
                >
                  <g
                    transform="translate(0.000000,1184.000000) scale(0.100000,-0.100000)"
                    fill="#000000"
                    stroke="none"
                  >
                    <path
                      className={`fill-white`}
                      d="M3314 11815 c-67 -14 -130 -43 -183 -83 l-33 -25 -62 22 c-85 29
-142 35 -212 21 -143 -30 -255 -131 -295 -267 -11 -40 -15 -43 -67 -58 -77
-23 -163 -109 -186 -185 -20 -68 -20 -132 2 -195 17 -50 17 -50 -8 -95 -21
-37 -25 -58 -25 -120 0 -80 21 -135 64 -174 33 -30 61 -103 61 -157 0 -59 13
-96 48 -132 40 -42 80 -60 137 -60 57 0 97 18 137 60 35 36 48 73 48 133 0 26
9 67 20 91 23 52 25 112 6 171 -8 24 -16 68 -19 98 -5 53 -3 57 33 98 37 41
39 42 102 42 36 0 86 6 112 14 l48 15 56 -46 c164 -134 355 -155 542 -62 75
38 84 40 182 42 91 2 110 5 163 31 77 38 153 114 191 191 26 55 29 69 29 165
0 98 -2 110 -32 170 -77 157 -227 241 -400 226 -67 -6 -76 -5 -134 24 -65 33
-170 60 -229 59 -19 0 -63 -7 -96 -14z"
                    />
                    <path
                      className={`fill-white`}
                      d="M1970 10165 l0 -65 585 0 585 0 0 65 0 65 -585 0 -585 0 0 -65z"
                    />
                    <path
                      className={`fill-white`}
                      d="M1730 9984 c-94 -25 -175 -84 -168 -120 5 -27 68 -72 133 -95 40 -15
94 -23 163 -27 58 -3 102 -9 102 -15 0 -5 -34 -54 -75 -108 -41 -53 -75 -100
-75 -103 0 -3 335 -6 745 -6 410 0 745 3 745 6 0 3 -34 50 -75 103 -41 54 -75
103 -75 108 0 6 44 12 103 15 116 6 200 31 257 77 19 15 36 37 38 48 4 27 -56
76 -128 106 l-55 22 -790 2 c-672 2 -798 0 -845 -13z"
                    />
                    <path
                      className={`fill-white`}
                      d="M530 8745 l0 -575 753 -2 752 -3 3 -1752 c1 -964 -1 -1753 -5 -1753
-5 0 -35 16 -68 36 -383 231 -616 639 -618 1084 -1 160 13 255 59 398 63 201
157 354 311 511 l103 105 0 648 c0 356 -2 648 -5 648 -18 0 -197 -76 -290
-123 -628 -316 -1088 -888 -1265 -1574 -91 -348 -98 -774 -20 -1122 104 -465
326 -869 664 -1206 372 -371 840 -604 1376 -687 53 -8 180 -13 340 -13 268 0
336 7 539 51 807 179 1482 780 1761 1569 88 251 132 512 133 790 0 294 -35
519 -123 788 -198 602 -643 1116 -1215 1404 -93 47 -272 123 -290 123 -3 0 -5
-292 -5 -648 l0 -648 103 -105 c154 -157 248 -310 311 -511 46 -143 60 -238
59 -398 -3 -446 -234 -853 -618 -1084 -33 -20 -63 -36 -68 -36 -4 0 -6 789 -5
1753 l3 1752 753 3 752 2 0 575 0 575 -2090 0 -2090 0 0 -575z m904 -1624 l38
-39 -12 -51 c-14 -59 -20 -64 -84 -80 l-50 -12 -40 40 -40 41 14 57 c14 52 18
59 50 70 61 21 83 16 124 -26z m2516 19 c12 -6 23 -30 31 -66 l12 -55 -40 -40
-39 -40 -50 12 c-64 16 -70 21 -84 80 l-12 51 38 40 c36 37 42 39 82 34 24 -3
51 -10 62 -16z m-3022 -1302 l26 -46 -26 -49 -27 -48 -63 -3 -63 -2 -28 50
-28 51 28 50 27 50 64 -3 63 -3 27 -47z m3566 3 l27 -50 -28 -50 -28 -51 -62
0 -61 0 -26 46 c-14 26 -26 51 -26 56 0 5 12 29 26 54 l26 44 62 0 63 0 27
-49z m-3071 -1220 c18 -7 26 -22 36 -66 l13 -58 -40 -40 -40 -40 -58 15 -59
14 -15 57 -14 57 39 41 c36 37 44 40 77 35 20 -3 48 -10 61 -15z m2532 -21
l39 -40 -14 -57 -15 -57 -59 -14 -58 -15 -40 41 -41 40 15 58 c13 55 16 59 53
71 64 19 79 15 120 -27z m-1278 -506 l44 -25 -3 -61 c-3 -61 -3 -61 -50 -91
l-48 -29 -47 29 c-48 30 -48 30 -51 90 l-3 61 43 26 c53 32 61 32 115 0z"
                    />
                    <path
                      className={`fill-white`}
                      d="M442 4088 c-22 -22 -13 -46 38 -101 28 -30 50 -59 50 -65 0 -5 -56
-63 -125 -127 -101 -95 -125 -123 -125 -145 0 -27 20 -52 51 -63 27 -9 70 25
174 137 54 58 103 106 108 106 5 0 34 -23 64 -51 42 -38 62 -49 82 -47 53 6
36 34 -126 203 -87 91 -163 165 -168 165 -6 0 -16 -5 -23 -12z"
                    />
                    <path
                      className={`fill-white`}
                      d="M4735 4010 c-55 -13 -115 -50 -171 -107 -65 -67 -98 -120 -115 -186
-36 -147 92 -295 236 -273 113 18 253 134 318 265 52 103 50 127 -14 179 -29
23 -59 42 -68 42 -15 0 -146 -130 -178 -177 -18 -27 -11 -53 14 -53 10 0 43
25 74 56 l56 56 29 -25 29 -25 -23 -47 c-28 -57 -102 -138 -147 -159 -128 -61
-259 51 -231 197 8 45 70 115 120 138 23 10 60 19 83 19 30 0 48 6 63 22 47
51 4 97 -75 78z"
                    />
                    <path
                      className={`fill-white`}
                      d="M730 3541 c-135 -166 -148 -192 -112 -224 28 -25 65 -21 94 11 58 62
228 300 228 319 0 11 -8 27 -18 36 -39 36 -56 24 -192 -142z"
                    />
                    <path
                      className={`fill-white`}
                      d="M4205 3596 c-20 -30 -20 -29 82 -177 41 -60 70 -109 64 -109 -12 0
-273 86 -353 117 -46 17 -48 17 -75 -3 -15 -12 -29 -31 -31 -43 -5 -29 176
-379 200 -387 10 -3 30 1 45 8 47 22 42 55 -31 187 -36 65 -66 121 -66 124 0
3 28 -6 63 -19 115 -46 280 -94 320 -94 52 0 97 32 97 69 0 20 -35 74 -121
189 -107 143 -125 162 -150 162 -19 0 -34 -8 -44 -24z"
                    />
                    <path
                      className={`fill-white`}
                      d="M935 3393 c-60 -87 -110 -167 -112 -178 -7 -34 61 -84 289 -209 75
-41 123 -46 123 -11 0 13 -21 30 -70 58 -38 22 -105 59 -148 84 l-77 45 20 36
c12 21 29 48 39 60 l17 24 117 -67 c122 -69 159 -78 165 -39 3 18 -15 32 -105
82 -155 87 -148 79 -115 129 15 24 31 43 36 43 4 0 34 -15 65 -34 94 -57 188
-99 205 -93 33 13 18 46 -35 75 -28 15 -98 55 -156 90 -58 34 -115 62 -127 62
-17 0 -46 -34 -131 -157z"
                    />
                    <path
                      className={`fill-white`}
                      d="M1502 3297 c-20 -24 -162 -359 -162 -382 0 -28 26 -45 68 -45 28 0
32 5 62 77 18 43 38 94 45 113 39 106 32 109 84 -40 87 -245 109 -280 177
-280 24 0 38 6 48 23 7 12 35 106 61 209 47 182 48 188 30 208 -21 23 -57 26
-74 7 -6 -8 -29 -73 -50 -146 -22 -73 -41 -135 -44 -137 -6 -6 -74 169 -112
286 -15 47 -36 93 -47 103 -23 20 -71 23 -86 4z"
                    />
                    <path
                      className={`fill-white`}
                      d="M3568 3265 c-148 -41 -227 -125 -228 -244 0 -121 61 -209 162 -231
136 -31 329 53 379 165 39 85 11 195 -69 267 -63 57 -143 71 -244 43z m139
-86 c20 -13 44 -42 59 -72 64 -124 -17 -247 -163 -247 -96 0 -158 68 -158 177
0 72 19 105 81 140 52 30 134 31 181 2z"
                    />
                    <path
                      className={`fill-white`}
                      d="M500 2736 l0 -434 -246 -367 c-135 -201 -244 -368 -242 -369 1 -2 35
-21 73 -43 39 -22 619 -359 1290 -748 671 -390 1228 -710 1237 -713 10 -2 526
291 1280 728 1305 757 1331 772 1336 776 2 1 -107 168 -242 369 l-246 367 0
434 c0 239 -4 434 -8 434 -4 0 -38 -37 -74 -82 -36 -46 -102 -122 -146 -169
l-81 -86 -78 -5 c-152 -9 -263 -102 -293 -246 -11 -47 -13 -49 -98 -100 -320
-189 -655 -302 -1042 -353 -123 -17 -477 -16 -605 0 -373 48 -720 166 -1037
353 -85 51 -87 53 -98 100 -30 144 -141 237 -293 246 l-78 5 -81 86 c-44 47
-110 123 -146 169 -36 45 -70 82 -74 82 -4 0 -8 -195 -8 -434z m487 -5 c78
-39 124 -117 124 -207 0 -204 -232 -307 -386 -172 -57 51 -79 107 -73 192 6
96 60 167 154 202 50 18 129 12 181 -15z m3480 0 c79 -40 123 -115 123 -208 0
-74 -25 -129 -79 -174 -92 -80 -213 -79 -304 1 -167 148 -53 422 169 406 28
-3 69 -13 91 -25z m-3338 -458 l22 -18 -212 -365 c-116 -201 -217 -371 -223
-378 -10 -10 -39 3 -152 68 -76 45 -140 83 -142 85 -5 5 358 544 371 552 6 3
40 5 77 4 70 -2 166 25 190 54 17 20 43 19 69 -2z m3051 2 c24 -29 120 -56
193 -54 48 2 72 -2 81 -12 23 -23 368 -540 364 -544 -2 -2 -66 -40 -142 -85
-113 -65 -142 -78 -152 -68 -6 7 -107 177 -223 378 l-212 365 22 18 c26 21 52
22 69 2z m-2786 -144 c70 -33 130 -61 132 -64 5 -5 -351 -793 -368 -814 -14
-17 -330 166 -325 188 3 9 89 162 192 340 103 178 199 343 212 367 14 23 26
42 27 42 1 0 60 -27 130 -59z m2609 17 c13 -24 109 -189 212 -367 103 -178
189 -331 192 -340 5 -22 -311 -205 -325 -188 -16 21 -373 809 -368 814 2 2 57
29 121 58 65 30 120 57 123 60 12 11 21 3 45 -37z m-2199 -173 c66 -19 121
-35 123 -35 10 0 -9 -78 -126 -510 -96 -355 -132 -475 -143 -475 -17 0 -378
207 -378 216 0 4 79 179 176 390 97 211 183 399 190 417 8 17 20 32 27 32 7 0
66 -16 131 -35z m1967 -383 c104 -228 189 -417 189 -420 0 -10 -361 -217 -378
-217 -11 0 -47 120 -143 475 -71 261 -129 483 -129 492 0 12 17 21 58 33 31 9
84 25 117 35 33 11 68 18 78 17 14 -1 66 -107 208 -415z m-1546 292 c60 -9
111 -17 113 -18 1 -2 -25 -277 -58 -612 -33 -334 -60 -612 -60 -617 0 -16 -27
-2 -224 112 -151 89 -195 119 -191 131 3 9 64 235 135 501 72 266 133 492 136
502 7 21 12 21 149 1z m940 -6 c4 -13 66 -243 139 -513 122 -451 132 -491 117
-506 -19 -19 -378 -229 -392 -229 -5 0 -9 4 -9 8 0 4 -27 282 -60 616 -33 335
-59 610 -58 612 5 4 190 31 225 33 26 1 34 -4 38 -21z m-358 -638 c34 -338 62
-636 62 -661 l1 -47 -125 -72 -125 -72 -125 72 c-118 68 -125 74 -125 104 0
40 120 1267 125 1284 4 10 34 12 127 10 l123 -3 62 -615z"
                    />
                    <path
                      className={`fill-white`}
                      d="M3110 3135 c-12 -15 -10 -72 6 -152 l6 -30 -79 -11 c-43 -7 -101 -14
-130 -18 l-51 -6 -7 68 c-4 38 -9 77 -11 87 -8 27 -38 39 -70 27 l-27 -11 8
-207 c7 -229 13 -252 64 -252 46 0 56 22 56 129 l0 96 70 7 c39 4 96 11 128
16 65 10 58 18 78 -97 7 -40 19 -79 27 -87 34 -34 110 4 98 49 -3 12 -22 102
-43 201 -20 98 -43 185 -51 192 -18 18 -56 18 -72 -1z"
                    />
                    <path
                      className={`fill-white`}
                      d="M2257 3098 c-13 -10 -23 -53 -42 -188 -35 -249 -34 -260 31 -260 43
0 53 16 62 101 l7 73 115 1 c126 0 158 10 193 57 25 34 27 106 4 142 -35 53
-64 61 -282 81 -50 4 -75 2 -88 -7z m226 -80 c43 -10 63 -42 53 -81 -8 -35
-50 -48 -137 -45 l-74 3 3 55 c5 89 6 90 65 83 29 -3 69 -9 90 -15z"
                    />
                  </g>
                </svg>
              </a>
              <p
                className="mb-[24px] max-w-[316px] text-[14px]
              font-ThinCus
              sm:text-[3.4vw] md:text-[14px]
              "
              >
                423 Hai Phong, Thanh Khe, Da Nang
              </p>
              <p
                className="mb-[24px] max-w-[316px] text-[14px]
              font-ThinCus
              sm:text-[3.4vw] md:text-[14px]
              "
              >
                Tien Phong Software Copyright © 2023.
              </p>
              <p
                className="mb-[24px] max-w-[316px] text-[14px]
              font-ThinCus
              sm:text-[3.4vw] md:text-[14px]
              "
              >
                <a href="" className="mr-[-3px]">
                  <Image
                    src="/images/logo/dcma.png"
                    className="hover:scale-110 transition-all
                    max-w-full"
                    alt="My Icon"
                    width={150}
                    height={200}
                  />
                </a>
              </p>
              <ul className="flex mb-[1rem] break-words">
                <li className="mr-[24px]">
                  <a href="" className="text-white">
                    <Image
                      src="/images/logo/facebook.svg"
                      className="max-w-full align-middle"
                      alt="My Icon"
                      width={14}
                      height={24}
                    />
                  </a>
                </li>
                <li className="mr-[24px]">
                  <a href="" className="text-white">
                    <Image
                      src="/images/logo/linkedin.svg"
                      className="max-w-full align-middle"
                      alt="My Icon"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
                <li className="mr-[24px]">
                  <a href="" className="text-white">
                    <Image
                      src="/images/logo/twitter.svg"
                      className="max-w-full align-middle"
                      alt="My Icon"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
                <li className="mr-[24px]">
                  <a href="" className="text-white">
                    <Image
                      src="/images/logo/instagram.svg"
                      className="max-w-full align-middle"
                      alt="My Icon"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
                <li className="mr-[24px]">
                  <a href="" className="text-white">
                    <Image
                      src="/images/logo/youtube.svg"
                      className="max-w-full align-middle"
                      alt="My Icon"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
              </ul>
              <p
                className="mb-[24px] max-w-[316px] lg:text-[14px]
              font-ThinCus flex flex-row flex-wrap
              justify-between"
              >
                <span
                  className="max-w-maxFooterLGs h-auto
                flex-flexFooter mb-[20px]"
                >
                  <Image
                    src="/images/logo/footer-1.png"
                    className="max-w-[80%] w-auto h-auto
                    align-middle max-h-full"
                    alt="My Icon"
                    width={150}
                    height={24}
                  />
                </span>
                <span
                  className="max-w-maxFooterLGs h-auto
                flex-flexFooter mb-[20px]"
                >
                  <Image
                    src="/images/logo/footer-2.png"
                    className="max-w-[80%] w-auto h-auto
                    align-middle max-h-full"
                    alt="My Icon"
                    width={150}
                    height={24}
                  />
                </span>
                <span
                  className="max-w-maxFooterLGs h-auto
                flex-flexFooter mb-[20px]"
                >
                  <Image
                    src="/images/logo/footer-3.jpg"
                    className="max-w-[80%] w-auto h-auto
                    align-middle max-h-full"
                    alt="My Icon"
                    width={150}
                    height={24}
                  />
                </span>
                <span
                  className="max-w-maxFooterLGs h-auto
                flex-flexFooter mb-[20px]"
                >
                  <Image
                    src="/images/logo/footer-4.svg"
                    className="max-w-[80%] w-auto h-auto
                    align-middle max-h-full"
                    alt="My Icon"
                    width={150}
                    height={24}
                  />
                </span>
              </p>
            </div>
            <div
              className="sm:flex sm:my-[24px] lg:my-0
            sm:flex-wrap
            sm:w-full
            lg:flex-1 
            xl:flex-noneAuto xl:w-auto max-w-none xl:flex-nowrap"
            >
              <div
                className="flex xl:flex-nowrap
                flex-wrap
                justify-between
                sm:flex-wrap
                sm:w-full xl:w-[unset]
                sm:justify-between lg:justify-[unset]"
              >
                <div
                  className="xl:pr-[50px] xl:max-w-full lg:mt-[24px]
                lg:pr-[24px]
                md:my-[24px] md:flex-none
                sm:flex-WhySM sm:max-w-full sm:my-[24px] 
                md:max-w-[50%] sm:pr-[24px]"
                >
                  <span
                    className="font-bold mb-[20px] block
                    lg:text-[20px] 
                    md:text-[2vw]
                    sm:text-[4vw]"
                  >
                    Tech Development
                  </span>
                  <ul
                    className="md:max-w-[260px] flex
                  flex-col pl-0 mb-0"
                  >
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3.4vw]"
                      >
                        Web Application Development
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3.4vw]"
                      >
                        Flutter App Development
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3.4vw]"
                      >
                        Software Customization & Enhancement
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className="xl:pr-[50px] xl:max-w-full lg:mt-[24px]
                  lg:pr-[24px]
                md:my-[24px] md:flex-none
                sm:flex-partnerSM sm:max-w-full sm:my-[24px] 
                md:max-w-[50%] sm:pr-[24px]"
                >
                  <span
                    className="font-bold mb-[20px] block
                    lg:text-[20px] 
                    md:text-[2vw]
                    sm:text-[4vw]"
                  >
                    Works
                  </span>
                  <ul
                    className="md:max-w-[260px] flex
                  flex-col pl-0 mb-0"
                  >
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3.4vw]"
                      >
                        Real Estate
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3.4vw]"
                      >
                        Construction
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3.4vw]"
                      >
                        Education
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3.4vw]"
                      >
                        Marketplace
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3.4vw]"
                      >
                        Data Management
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3.4vw]"
                      >
                        Procurement
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3.4vw]"
                      >
                        Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3.4vw]"
                      >
                        Recruitment
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3.4vw]"
                      >
                        ERP
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className="xl:pr-[50px] xl:max-w-full lg:mt-[24px]
                  lg:pr-[24px]
                md:my-[24px] md:flex-none
                sm:flex-partnerSM sm:max-w-full sm:my-[24px] 
                md:max-w-[50%] sm:pr-[24px]"
                >
                  <span
                    className="font-bold mb-[20px] block
                    lg:text-[20px] 
                    md:text-[2vw]
                    sm:text-[4vw]"
                  >
                    Technologies
                  </span>
                  <ul
                    className="md:max-w-[260px] flex
                  flex-col pl-0 mb-0"
                  >
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3.4vw]"
                      >
                        .NET
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3.4vw]"
                      >
                        C#
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3.4vw]"
                      >
                        Microservices
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3.4vw]"
                      >
                        Angular
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3.4vw]"
                      >
                        Python
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3.4vw]"
                      >
                        Node.js
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3.4vw]"
                      >
                        Vue.js
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className="xl:pr-[50px] xl:max-w-full lg:m-0 lg:p-0
                  lg:pr-[24px]
                md:my-[24px] md:flex-none
                sm:flex-WhySM sm:max-w-full sm:my-[24px] 
                md:max-w-[50%] sm:pr-[24px]"
                >
                  <span
                    className="font-bold mb-[20px] block
                    lg:text-[20px] 
                    md:text-[2vw]
                    sm:text-[4vw]"
                  >
                    Company
                  </span>
                  <ul
                    className="md:max-w-[260px] flex
                  flex-col pl-0 mb-0"
                  >
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3.4vw]"
                      >
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        href="careers"
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3.4vw]"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3.4vw]"
                      >
                        Think with Tien Phong
                      </a>
                    </li>
                    <li>
                      <a
                        href="contact-us"
                        className="inline-block
                        font-LightCus px-0 text-white p-padNaxFoot
                        lg:text-[14px] 
                        md:text-[2vw]
                        sm:text-[3.4vw]"
                      >
                        Contact us
                      </a>
                    </li>
                  </ul>
                  <a
                    href=""
                    className={`leading-[10px] 
                    mt-[20px]
                    pl-[10px] pr-[10px] min-w-[auto] table-cell
                     w-auto h-[30px] p-[0 10px] rounded-[25px] text-center
                     align-middle font-bold cursor-pointer bg-[#faa61a]
                     text-white border-transparent 
                     max-w-[244px] overflow-x-hidden
                     whitespace-nowrap border-[2px] outline-0
                     relative isolate
                     before:z-[-1]
                     before:content['']
                     before:duration-[0.5s]
                     before:absolute
                     before:w-full
                     before:h-full
                     before:bg-white
                     before:left-[-100%]
                     before:top-0
                     before:transition-all
                     hover:before:left-0
                     hover:text-black
                     `}
                  >
                    Subscribe Blog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterBig;
