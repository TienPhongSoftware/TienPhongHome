"use client";
import React from "react";
import Image from "next/image";
import FooterContent from "./FooterContent";
import Link from "next/link";

function FooterBig() {
  return (
    <footer>
      {/* <div className="lg:py-[96px] sm:py-[48px] bg-transparent">
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
                  <Link
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
                  </Link>
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
                  <Link
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
                  </Link>
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
                  <Link
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <FooterContent />
    </footer>
  );
}

export default FooterBig;
