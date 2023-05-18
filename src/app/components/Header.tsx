"use client";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper.min.css";
import HeaderContentMobile from "./HeaderContentMobile";

library.add(faComputer, faMobile, faScrewdriverWrench, faCaretDown);

function Header() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((prevState) => !prevState);
  }

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (!isHovered) {
      setIsHovered(false);
      setIsDropdownOpen(false);
    } else {
      setIsHovered(false);
      setIsDropdownOpen(false);
    }
  };

  const [isHoveredWorks, setIsHoveredWorks] = useState(false);
  const [isDropdownOpenWorks, setIsDropdownOpenWorks] = useState(false);

  const handleMouseEnterWorks = () => {
    setIsHoveredWorks(true);
    setIsDropdownOpenWorks(true);
  };

  const handleMouseLeaveWorks = () => {
    if (!isHoveredWorks) {
      setIsHoveredWorks(false);
      setIsDropdownOpenWorks(false);
    } else {
      setIsHoveredWorks(false);
      setIsDropdownOpenWorks(false);
    }
  };

  const [isHoveredTech, setIsHoveredTech] = useState(false);
  const [isDropdownOpenTech, setIsDropdownOpenTech] = useState(false);

  const handleMouseEnterTech = () => {
    setIsHoveredTech(true);
    setIsDropdownOpenTech(true);
  };

  const handleMouseLeaveTech = () => {
    if (!isHoveredTech) {
      setIsHoveredTech(false);
      setIsDropdownOpenTech(false);
    } else {
      setIsHoveredTech(false);
      setIsDropdownOpenTech(false);
    }
  };

  const [isHoveredThinkWith, setIsHoveredThinkWith] = useState(false);
  const [isDropdownOpenThinkWith, setIsDropdownOpenThinkWith] = useState(false);

  const handleMouseEnterThinkWith = () => {
    setIsHoveredThinkWith(true);
    setIsDropdownOpenThinkWith(true);
  };

  const handleMouseLeaveThinkWith = () => {
    if (!isHoveredThinkWith) {
      setIsHoveredThinkWith(false);
      setIsDropdownOpenThinkWith(false);
    } else {
      setIsHoveredThinkWith(false);
      setIsDropdownOpenThinkWith(false);
    }
  };

  return (
    <div>
      <header className="relative z-40 block bg-white">
        <nav
          className={`sm:min-h-[60px] sm:overflow-[unset]
      fixed w-full min-h-[80px] top-0 left-0
      transition-bg ${
        isScrolled
          ? "bg-white shadow-lg bg-opacity-80"
          : "sm:bg-[#545b69] lg:bg-transparent bg-opacity-100"
      } z-50`}
        >
          <div
            className="lg:mx-auto m-[10px]
            xl:px-[120px] sm:px-[24px] lg:px-[64px] 
        max-w-maxContainer"
          >
            <div className="lg:flex lg:justify-unset lg:items-center xl:justify-between text-white">
              <div className="lg:flex lg:justify-start">
                <div
                  className="min-h[80px] transition-all m-0
                flex 
                lg:justify-center items-center
                lg:scale-100
                sm:origin-left lg:origin-center
                sm:min-h-[60px] lg:min-h-[unset]
                sm:justify-start
                sm:pl-[24px] lg:pl-0
                sm:pr-[24px] lg:pr-0
                sm:top-0 sm:left-0
                sm:fixed lg:static
                sm:w-full
                sm:z-10"
                >
                  <Link
                    href="/"
                    className={`
                ${isScrolled ? "text-black" : "text-white"}
                 `}
                  >
                    <svg
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="525.000000pt"
                      height="1184.000000pt"
                      viewBox="0 0 525.000000 1184.000000"
                      preserveAspectRatio="xMidYMid meet"
                      className="sm:max-h-[40px] sm:max-w-[40px]
                      lg:max-h-[120px] lg:max-w-[80px]"
                    >
                      <g
                        transform="translate(0.000000,1184.000000) scale(0.100000,-0.100000)"
                        fill="#000000"
                        stroke="none"
                      >
                        <path
                          className={`${
                            isScrolled ? "fill-[#015ea3]" : "fill-white"
                          }`}
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
                          className={`${
                            isScrolled ? "fill-[#015ea3]" : "fill-white"
                          }`}
                          d="M1970 10165 l0 -65 585 0 585 0 0 65 0 65 -585 0 -585 0 0 -65z"
                        />
                        <path
                          className={`${
                            isScrolled ? "fill-[#015ea3]" : "fill-white"
                          }`}
                          d="M1730 9984 c-94 -25 -175 -84 -168 -120 5 -27 68 -72 133 -95 40 -15
94 -23 163 -27 58 -3 102 -9 102 -15 0 -5 -34 -54 -75 -108 -41 -53 -75 -100
-75 -103 0 -3 335 -6 745 -6 410 0 745 3 745 6 0 3 -34 50 -75 103 -41 54 -75
103 -75 108 0 6 44 12 103 15 116 6 200 31 257 77 19 15 36 37 38 48 4 27 -56
76 -128 106 l-55 22 -790 2 c-672 2 -798 0 -845 -13z"
                        />
                        <path
                          className={`${
                            isScrolled ? "fill-[#015ea3]" : "fill-[#449fdb]"
                          }`}
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
                          className={`${
                            isScrolled ? "fill-[#015ea3]" : "fill-white"
                          }`}
                          d="M442 4088 c-22 -22 -13 -46 38 -101 28 -30 50 -59 50 -65 0 -5 -56
-63 -125 -127 -101 -95 -125 -123 -125 -145 0 -27 20 -52 51 -63 27 -9 70 25
174 137 54 58 103 106 108 106 5 0 34 -23 64 -51 42 -38 62 -49 82 -47 53 6
36 34 -126 203 -87 91 -163 165 -168 165 -6 0 -16 -5 -23 -12z"
                        />
                        <path
                          className={`${
                            isScrolled ? "fill-[#015ea3]" : "fill-white"
                          }`}
                          d="M4735 4010 c-55 -13 -115 -50 -171 -107 -65 -67 -98 -120 -115 -186
-36 -147 92 -295 236 -273 113 18 253 134 318 265 52 103 50 127 -14 179 -29
23 -59 42 -68 42 -15 0 -146 -130 -178 -177 -18 -27 -11 -53 14 -53 10 0 43
25 74 56 l56 56 29 -25 29 -25 -23 -47 c-28 -57 -102 -138 -147 -159 -128 -61
-259 51 -231 197 8 45 70 115 120 138 23 10 60 19 83 19 30 0 48 6 63 22 47
51 4 97 -75 78z"
                        />
                        <path
                          className={`${
                            isScrolled ? "fill-[#015ea3]" : "fill-white"
                          }`}
                          d="M730 3541 c-135 -166 -148 -192 -112 -224 28 -25 65 -21 94 11 58 62
228 300 228 319 0 11 -8 27 -18 36 -39 36 -56 24 -192 -142z"
                        />
                        <path
                          className={`${
                            isScrolled ? "fill-[#015ea3]" : "fill-white"
                          }`}
                          d="M4205 3596 c-20 -30 -20 -29 82 -177 41 -60 70 -109 64 -109 -12 0
-273 86 -353 117 -46 17 -48 17 -75 -3 -15 -12 -29 -31 -31 -43 -5 -29 176
-379 200 -387 10 -3 30 1 45 8 47 22 42 55 -31 187 -36 65 -66 121 -66 124 0
3 28 -6 63 -19 115 -46 280 -94 320 -94 52 0 97 32 97 69 0 20 -35 74 -121
189 -107 143 -125 162 -150 162 -19 0 -34 -8 -44 -24z"
                        />
                        <path
                          className={`${
                            isScrolled ? "fill-[#015ea3]" : "fill-white"
                          }`}
                          d="M935 3393 c-60 -87 -110 -167 -112 -178 -7 -34 61 -84 289 -209 75
-41 123 -46 123 -11 0 13 -21 30 -70 58 -38 22 -105 59 -148 84 l-77 45 20 36
c12 21 29 48 39 60 l17 24 117 -67 c122 -69 159 -78 165 -39 3 18 -15 32 -105
82 -155 87 -148 79 -115 129 15 24 31 43 36 43 4 0 34 -15 65 -34 94 -57 188
-99 205 -93 33 13 18 46 -35 75 -28 15 -98 55 -156 90 -58 34 -115 62 -127 62
-17 0 -46 -34 -131 -157z"
                        />
                        <path
                          className={`${
                            isScrolled ? "fill-[#015ea3]" : "fill-white"
                          }`}
                          d="M1502 3297 c-20 -24 -162 -359 -162 -382 0 -28 26 -45 68 -45 28 0
32 5 62 77 18 43 38 94 45 113 39 106 32 109 84 -40 87 -245 109 -280 177
-280 24 0 38 6 48 23 7 12 35 106 61 209 47 182 48 188 30 208 -21 23 -57 26
-74 7 -6 -8 -29 -73 -50 -146 -22 -73 -41 -135 -44 -137 -6 -6 -74 169 -112
286 -15 47 -36 93 -47 103 -23 20 -71 23 -86 4z"
                        />
                        <path
                          className={`${
                            isScrolled ? "fill-[#015ea3]" : "fill-white"
                          }`}
                          d="M3568 3265 c-148 -41 -227 -125 -228 -244 0 -121 61 -209 162 -231
136 -31 329 53 379 165 39 85 11 195 -69 267 -63 57 -143 71 -244 43z m139
-86 c20 -13 44 -42 59 -72 64 -124 -17 -247 -163 -247 -96 0 -158 68 -158 177
0 72 19 105 81 140 52 30 134 31 181 2z"
                        />
                        <path
                          className={`${
                            isScrolled ? "fill-[#015ea3]" : "fill-white"
                          }`}
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
                          className={`${
                            isScrolled ? "fill-[#015ea3]" : "fill-white"
                          }`}
                          d="M3110 3135 c-12 -15 -10 -72 6 -152 l6 -30 -79 -11 c-43 -7 -101 -14
-130 -18 l-51 -6 -7 68 c-4 38 -9 77 -11 87 -8 27 -38 39 -70 27 l-27 -11 8
-207 c7 -229 13 -252 64 -252 46 0 56 22 56 129 l0 96 70 7 c39 4 96 11 128
16 65 10 58 18 78 -97 7 -40 19 -79 27 -87 34 -34 110 4 98 49 -3 12 -22 102
-43 201 -20 98 -43 185 -51 192 -18 18 -56 18 -72 -1z"
                        />
                        <path
                          className={`${
                            isScrolled ? "fill-[#015ea3]" : "fill-white"
                          }`}
                          d="M2257 3098 c-13 -10 -23 -53 -42 -188 -35 -249 -34 -260 31 -260 43
0 53 16 62 101 l7 73 115 1 c126 0 158 10 193 57 25 34 27 106 4 142 -35 53
-64 61 -282 81 -50 4 -75 2 -88 -7z m226 -80 c43 -10 63 -42 53 -81 -8 -35
-50 -48 -137 -45 l-74 3 3 55 c5 89 6 90 65 83 29 -3 69 -9 90 -15z"
                        />
                      </g>
                    </svg>
                  </Link>
                </div>

                <div className="sm:hidden lg:flex space-x-6 max-w-full md:ml-[1.7vw] lg:ml-[1.7vw]">
                  <ul className="flex-nowrap whitespace-nowrap webkit-box-orient-horizontal flex-row inline-flex pl-0 mb-0 list-none">
                    <li className="ml-[1.7vw] flex justify-center relative min-h-[80px] transition-all text-center">
                      <div
                        className={`m-auto`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <Link
                          href="/services"
                          className={`hover:text-[#00aeef] transition-all pr-0 pl-0 inline-flex text-[16px] font-bold ${
                            isScrolled ? "text-black" : "text-white"
                          }`}
                        >
                          Services
                        </Link>
                        <ul
                          className={`pointer-events transition-all absolute border-0 left-0 translate-x-[-24px] p-0 bg-[0 0] rounded-[24px] overflow-hidden shadow-lg float-none top-[100%] min-w-[10rem] text-black text-left list-none before:absolute before:bg-white before:z-[-20] ${
                            isDropdownOpen
                              ? "mt-[-20px] opacity-100 visible block"
                              : "invisible opacity-0 mt-[15px]"
                          }`}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <li className="block m-0 min-h-0 text-left relative transition-all">
                            <Link
                              href="/services/web-application-development-outsourcing"
                              className="pl-16 m-0 p-16px24px bg-white block transition-all relative text-black hover:text-[#00aeef]"
                            >
                              Web Application Development
                              <FontAwesomeIcon
                                icon={faComputer}
                                className="bg-center bg-no-repeat absolute h-[24px]
                            w-[24px] left-[24px] pointer-events-none text-[#00aeef]"
                              />
                            </Link>
                          </li>
                          <li className="block m-0 min-h-0 text-left relative transition-all">
                            <Link
                              href="/services/custom-enterprise-software-development-outsourcing"
                              className="pl-16 m-0 p-16px24px bg-white block transition-all relative text-black hover:text-[#00aeef]"
                            >
                              Software Optimization & Enhancement
                              <FontAwesomeIcon
                                icon={faScrewdriverWrench}
                                className="bg-center bg-no-repeat absolute h-[24px]
                            w-[24px] left-[24px] pointer-events-none  text-[#f7a233]"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="ml-[1.7vw] relative min-h-[80px] transition-all text-center flex justify-center items-center">
                      <div
                        className={`m-auto`}
                        onMouseEnter={handleMouseEnterWorks}
                        onMouseLeave={handleMouseLeaveWorks}
                      >
                        <Link
                          href="/works"
                          className={`hover:text-[#00aeef] transition-all pr-0 pl-0 inline-flex text-[16px] font-bold  ${
                            isScrolled ? "text-black" : "text-white"
                          }`}
                        >
                          Works
                        </Link>
                        {/* <ul
                          className={`pointer-events transition-all absolute border-0 left-0 translate-x-[-24px] p-0 bg-[0 0] rounded-[24px] overflow-hidden shadow-lg float-none top-[100%] min-w-[10rem] text-black text-left list-none before:absolute before:bg-white before:z-[-20] ${
                            isDropdownOpenWorks
                              ? "mt-[-20px] opacity-100 visible block"
                              : "invisible opacity-0 mt-[15px]"
                          }`}
                          onMouseEnter={handleMouseEnterWorks}
                          onMouseLeave={handleMouseLeaveWorks}
                        >
                          <li className="block m-0 min-h-0 text-left relative transition-all">
                            <Link
                              href="/"
                              className="m-0 p-16px24px bg-white block transition-all relative text-black hover:text-[#00aeef]"
                            >
                              Production Inventory
                            </Link>
                          </li>
                          <li className="block m-0 min-h-0 text-left relative transition-all">
                            <Link
                              href="/"
                              className="m-0 p-16px24px bg-white block transition-all relative text-black hover:text-[#00aeef]"
                            >
                              Flexible Budget
                            </Link>
                          </li>
                          <li className="block m-0 min-h-0 text-left relative transition-all">
                            <Link
                              href="/"
                              className="m-0 p-16px24px bg-white block transition-all relative text-black hover:text-[#00aeef]"
                            >
                              Poster Delivery
                            </Link>
                          </li>
                          <li className="block m-0 min-h-0 text-left relative transition-all">
                            <Link
                              href="/"
                              className="m-0 p-16px24px bg-white block transition-all relative text-black hover:text-[#00aeef]"
                            >
                              Health Care
                            </Link>
                          </li>
                          <li className="block m-0 min-h-0 text-left relative transition-all">
                            <Link
                              href="/"
                              className="m-0 p-16px24px bg-white block transition-all relative text-black hover:text-[#00aeef]"
                            >
                              ERP
                            </Link>
                          </li>
                        </ul> */}
                      </div>
                    </li>

                    <li className="ml-[1.7vw] relative min-h-[80px] transition-all text-center flex justify-center items-center">
                      <div
                        className={`m-auto`}
                        onMouseEnter={handleMouseEnterTech}
                        onMouseLeave={handleMouseLeaveTech}
                      >
                        <Link
                          href="/technologies"
                          className={`hover:text-[#00aeef] transition-all pr-0 pl-0 inline-flex text-[16px] font-bold  ${
                            isScrolled ? "text-black" : "text-white"
                          }`}
                        >
                          Technologies
                        </Link>
                      </div>
                    </li>
                    <li className="ml-[1.7vw] relative min-h-[80px] transition-all text-center flex justify-center items-center">
                      <Link
                        href="/about-us"
                        className={`hover:text-[#00aeef] transition-all pr-0 pl-0 inline-flex text-[16px] font-bold  ${
                          isScrolled ? "text-black" : "text-white"
                        }`}
                      >
                        About us
                      </Link>
                    </li>
                    {/* <li className="ml-[1.7vw] relative min-h-[80px] transition-all text-center flex justify-center items-center">
                      <Link
                        href="/careers"
                        className={`hover:text-[#00aeef] transition-all pr-0 pl-0 inline-flex text-[16px] font-bold  ${
                          isScrolled ? "text-black" : "text-white"
                        }`}
                      >
                        Careers
                      </Link>
                    </li>
                    <li className="ml-[1.7vw] relative min-h-[80px] transition-all text-center flex justify-center items-center">
                      <div
                        className={`m-auto`}
                        onMouseEnter={handleMouseEnterThinkWith}
                        onMouseLeave={handleMouseLeaveThinkWith}
                      >
                        <Link
                          href="/#"
                          className={`hover:text-[#00aeef] transition-all pr-0 pl-0 inline-flex text-[16px] font-bold  ${
                            isScrolled ? "text-black" : "text-white"
                          }`}
                        >
                          Think with Tien Phong
                        </Link>
                      </div>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="flex justify-end sm:hidden lg:flex md:ml-[10px]">
                <ul className="mb-0 flex items-center p-0 break-words">
                  <li className="inline-block ml-4">
                    <Link
                      href="/contact-us"
                      className={`leading-[36px] pl-[20px] pr-[20px] min-w-[auto] table-cell
                     w-auto h-[40px] p-[0 30px] rounded-[25px] text-center
                     align-middle font-bold cursor-pointer bg-[#00aeef]
                     text-white border-transparent 
                     max-w-[244px] overflow-x-hidden
                     whitespace-nowrap border-[2px] outline-0
                     relative isolate

                     lg:text-[12px]
                     lg:h-[30px]
                     lg:leading-[28px]
                     lg:px-[16px]

                     xl:text-[14px]
                     xl:h-[40px]
                     xl:leading-[36px]
                     xl:px-[20px]

                     before:z-[-1]
                     before:content['']
                     before:absolute
                     before:duration-[0.5s]
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
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <span
              className="lg:hidden absolute
          right-[10px] top-[20px] cursor-pointer z-30
          transform rotate-0 translate-z-0
          transition-transform duration-[3s] 
          w-[24px] h-[24px]
          ease-out   
          transition-color 
          -webkit-transition-transform 
          after:absolute 
          after:block 
          after:left-[-40%]
             after:right-[-40%] 
             after:top-[-40%] 
             after:bottom-[-40%]
             after:content-[' ']
             
"
            >
              <span
                onClick={handleClick}
                className={`block absolute h-[3px]
             top-[8px] w-full z-[90]
             
             before:content-[' ']
             before:transform 
             before:rotate-0 before:translate-y-[-6px] 
             before:translate-z-0
             before:absolute
             before:left-[0]
             before:top-[0]
             before:right-[0]
             before:bottom-[0]
             before:origin-toggleNav
             before:w-full
             before:transition-all
             before:duration-[0.3s]
             before:ease-out
             before:z-[100]
             
             after:content-[' ']
             
             after:rotate-0 after:translate-y-[6px] 
             after:translate-z-0
             after:absolute
             after:left-[0]
             after:top-[0]
             after:right-[0]
             after:bottom-[0]
             after:origin-toggleNav
             after:w-full
             after:transition-all
             after:duration-[0.3s]
             after:ease-out 
             after:z-[100]
             ${
               isActive
                 ? "after:rotate-[-45deg] after:translate-y-[3px] before:translate-y-[2px] before:rotate-[45deg]"
                 : "after:rotate-0 before:rotate-0"
             }
             ${
               isScrolled
                 ? "after:bg-black before:bg-black"
                 : "after:bg-white before:bg-white"
             } z-50`}
              ></span>
            </span>
          </div>
        </nav>
      </header>
      <HeaderContentMobile isActive={isActive} />
    </div>
  );
}

export default dynamic(() => Promise.resolve(Header), {
  ssr: false,
});
