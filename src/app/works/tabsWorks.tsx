"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Image from "next/image";

function TabsWorks() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabSelect = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <div className="min-h-[80vh] bg-white">
      <Tabs
        selectedIndex={selectedTab}
        onSelect={handleTabSelect}
        className={
          "xl:px-[120px] sm:px-[24px] lg:px-[64px] mx-auto max-w-maxContainer"
        }
      >
        <TabList
          className={
            "m-0 p-0 list-none overflow-hidden inline-flex flex-nowrap max-w-full overflow-x-auto"
          }
        >
          <Tab
            className={
              "inline-block bottom-[-1] relative mr-[24px] flex-none text-center list-none p-tabsWorks cursor-pointer max-w-full text-[16px] leading-[76px] px-[10px] whitespace-nowrap mb-0"
            }
            selectedClassName="text-[#00aeef] border-b-2 border-[#00aeef]"
          >
            ALL
          </Tab>
          <Tab
            className={
              "inline-block bottom-[-1] relative mr-[24px] flex-none text-center list-none p-tabsWorks cursor-pointer max-w-full text-[16px] leading-[76px] px-[10px] whitespace-nowrap mb-0"
            }
            selectedClassName="text-[#00aeef] border-b-4 border-[#00aeef]"
          >
            Real Estate
          </Tab>
          <Tab
            className={
              "inline-block bottom-[-1] relative mr-[24px] flex-none text-center list-none p-tabsWorks cursor-pointer max-w-full text-[16px] leading-[76px] px-[10px] whitespace-nowrap mb-0"
            }
            selectedClassName="text-[#00aeef] border-b-4 border-[#00aeef]"
          >
            Construction
          </Tab>
          <Tab
            className={
              "inline-block bottom-[-1] relative mr-[24px] flex-none text-center list-none p-tabsWorks cursor-pointer max-w-full text-[16px] leading-[76px] px-[10px] whitespace-nowrap mb-0"
            }
            selectedClassName="text-[#00aeef] border-b-4 border-[#00aeef]"
          >
            Education
          </Tab>
          <Tab
            className={
              "inline-block bottom-[-1] relative mr-[24px] flex-none text-center list-none p-tabsWorks cursor-pointer max-w-full text-[16px] leading-[76px] px-[10px] whitespace-nowrap mb-0"
            }
            selectedClassName="text-[#00aeef] border-b-4 border-[#00aeef]"
          >
            Marketplace
          </Tab>
          <Tab
            className={
              "inline-block bottom-[-1] relative mr-[24px] flex-none text-center list-none p-tabsWorks cursor-pointer max-w-full text-[16px] leading-[76px] px-[10px] whitespace-nowrap mb-0"
            }
            selectedClassName="text-[#00aeef] border-b-4 border-[#00aeef]"
          >
            Data Management
          </Tab>
          <Tab
            className={
              "inline-block bottom-[-1] relative mr-[24px] flex-none text-center list-none p-tabsWorks cursor-pointer max-w-full text-[16px] leading-[76px] px-[10px] whitespace-nowrap mb-0"
            }
            selectedClassName="text-[#00aeef] border-b-4 border-[#00aeef]"
          >
            Procurement
          </Tab>
          <Tab
            className={
              "inline-block bottom-[-1] relative mr-[24px] flex-none text-center list-none p-tabsWorks cursor-pointer max-w-full text-[16px] leading-[76px] px-[10px] whitespace-nowrap mb-0"
            }
            selectedClassName="text-[#00aeef] border-b-4 border-[#00aeef]"
          >
            Marketing
          </Tab>
          <Tab
            className={
              "inline-block bottom-[-1] relative mr-[24px] flex-none text-center list-none p-tabsWorks cursor-pointer max-w-full text-[16px] leading-[76px] px-[10px] whitespace-nowrap mb-0"
            }
            selectedClassName="text-[#00aeef] border-b-4 border-[#00aeef]"
          >
            Recruitment
          </Tab>
          <Tab
            className={
              "inline-block bottom-[-1] relative mr-[24px] flex-none text-center list-none p-tabsWorks cursor-pointer max-w-full text-[16px] leading-[76px] px-[10px] whitespace-nowrap mb-0"
            }
            selectedClassName="text-[#00aeef] border-b-4 border-[#00aeef]"
          >
            ERP
          </Tab>
        </TabList>
        <TabPanel className={"flex flex-wrap mx-[-15px]"}>
          <div className="basis-[0%] grow max-w-full relative w-full px-[15px]">
            <div className="p-tabsWorksInside sm:px-0 md:px-[unset]">
              <div className="flex flex-wrap mx-[-15px]">
                <div className="basis-[0%] flex-grow max-w-full relative w-full px-[15px]">
                  <div className="p-tabsWorksInside2 relative min-h-[150px]">
                    <div className="flex flex-wrap justify-between px-0">
                      {/* Clone nội dung ở đây */}
                      <div
                        className="lg:flex-FooterBigRow lg:max-w-worksAll
                        bg-white hover:shadow-lg duration-75 pb-worksAll 
                        sm:flex-WhySM sm:max-w-full block
                      shadow-2xl rounded-[16px] overflow-hidden relative sm:mb-[50px] sm:p-ServicesP3 text-[#222428]"
                      >
                        <div>
                          <a
                            href=""
                            className="
                           mx-[-16px] relative sm:h-0 pb-[59.9%] overflow-hidden block mb-[16px]"
                          >
                            <Image
                              width={958}
                              height={623}
                              alt="Works Photo"
                              src={"/images/layout/works-1.jpg"}
                              className=" object-cover w-full h-full transition-all ease-out top-0 left-0 max-w-full absolute"
                            />
                          </a>
                          <div className="md:mb-4 sm:mb-[16]">
                            <a
                              href=""
                              className="md:font-bold text-[20px] sm:font-[500]"
                            >
                              Employees & Contractor Portals (CPM)
                            </a>
                          </div>
                          <div className="font-LightCus sm:text-[4vw] md:text-[3vw] lg:text-[1vw]">
                            A custom construction management system (CPM) which
                            helps to manage employees, contractors, equipment
                            and also streamline operation and inspection
                            processes.
                          </div>
                          <div className="bottom-[16px] left-[16px] absolute">
                            <a
                              href=""
                              className="text-[#00aeef] leading-[24px] lg:text-[16px] font-bold"
                            >
                              Read more →
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="lg:flex-FooterBigRow lg:max-w-worksAll
                        bg-white hover:shadow-lg duration-75 pb-worksAll 
                        sm:flex-WhySM sm:max-w-full block
                      shadow-2xl rounded-[16px] overflow-hidden relative sm:mb-[50px] sm:p-ServicesP3 text-[#222428]"
                      >
                        <div>
                          <a
                            href=""
                            className="
                           mx-[-16px] relative sm:h-0 pb-[59.9%] overflow-hidden block mb-[16px]"
                          >
                            <Image
                              width={958}
                              height={623}
                              alt="Works Photo"
                              src={"/images/layout/works-1.jpg"}
                              className=" object-cover w-full h-full transition-all ease-out top-0 left-0 max-w-full absolute"
                            />
                          </a>
                          <div className="md:mb-4 sm:mb-[16]">
                            <a
                              href=""
                              className="md:font-bold text-[20px] sm:font-[500]"
                            >
                              Employees & Contractor Portals (CPM)
                            </a>
                          </div>
                          <div className="font-LightCus sm:text-[4vw] md:text-[3vw] lg:text-[1vw]">
                            A custom construction management system (CPM) which
                            helps to manage employees, contractors, equipment
                            and also streamline operation and inspection
                            processes.
                          </div>
                          <div className="bottom-[16px] left-[16px] absolute">
                            <a
                              href=""
                              className="text-[#00aeef] leading-[24px] lg:text-[16px] font-bold"
                            >
                              Read more →
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="lg:flex-FooterBigRow lg:max-w-worksAll
                        bg-white hover:shadow-lg duration-75 pb-worksAll 
                        sm:flex-WhySM sm:max-w-full block
                      shadow-2xl rounded-[16px] overflow-hidden relative sm:mb-[50px] sm:p-ServicesP3 text-[#222428]"
                      >
                        <div>
                          <a
                            href=""
                            className="
                           mx-[-16px] relative sm:h-0 pb-[59.9%] overflow-hidden block mb-[16px]"
                          >
                            <Image
                              width={958}
                              height={623}
                              alt="Works Photo"
                              src={"/images/layout/works-1.jpg"}
                              className=" object-cover w-full h-full transition-all ease-out top-0 left-0 max-w-full absolute"
                            />
                          </a>
                          <div className="md:mb-4 sm:mb-[16]">
                            <a
                              href=""
                              className="md:font-bold text-[20px] sm:font-[500]"
                            >
                              Employees & Contractor Portals (CPM)
                            </a>
                          </div>
                          <div className="font-LightCus sm:text-[4vw] md:text-[3vw] lg:text-[1vw]">
                            A custom construction management system (CPM) which
                            helps to manage employees, contractors, equipment
                            and also streamline operation and inspection
                            processes.
                          </div>
                          <div className="bottom-[16px] left-[16px] absolute">
                            <a
                              href=""
                              className="text-[#00aeef] leading-[24px] lg:text-[16px] font-bold"
                            >
                              Read more →
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="lg:flex-FooterBigRow lg:max-w-worksAll
                        bg-white hover:shadow-lg duration-75 pb-worksAll 
                        sm:flex-WhySM sm:max-w-full block
                      shadow-2xl rounded-[16px] overflow-hidden relative sm:mb-[50px] sm:p-ServicesP3 text-[#222428]"
                      >
                        <div>
                          <a
                            href=""
                            className="
                           mx-[-16px] relative sm:h-0 pb-[59.9%] overflow-hidden block mb-[16px]"
                          >
                            <Image
                              width={958}
                              height={623}
                              alt="Works Photo"
                              src={"/images/layout/works-1.jpg"}
                              className=" object-cover w-full h-full transition-all ease-out top-0 left-0 max-w-full absolute"
                            />
                          </a>
                          <div className="md:mb-4 sm:mb-[16]">
                            <a
                              href=""
                              className="md:font-bold text-[20px] sm:font-[500]"
                            >
                              Employees & Contractor Portals (CPM)
                            </a>
                          </div>
                          <div className="font-LightCus sm:text-[4vw] md:text-[3vw] lg:text-[1vw]">
                            A custom construction management system (CPM) which
                            helps to manage employees, contractors, equipment
                            and also streamline operation and inspection
                            processes.
                          </div>
                          <div className="bottom-[16px] left-[16px] absolute">
                            <a
                              href=""
                              className="text-[#00aeef] leading-[24px] lg:text-[16px] font-bold"
                            >
                              Read more →
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="lg:flex-FooterBigRow lg:max-w-worksAll
                        bg-white hover:shadow-lg duration-75 pb-worksAll 
                        sm:flex-WhySM sm:max-w-full block
                      shadow-2xl rounded-[16px] overflow-hidden relative sm:mb-[50px] sm:p-ServicesP3 text-[#222428]"
                      >
                        <div>
                          <a
                            href=""
                            className="
                           mx-[-16px] relative sm:h-0 pb-[59.9%] overflow-hidden block mb-[16px]"
                          >
                            <Image
                              width={958}
                              height={623}
                              alt="Works Photo"
                              src={"/images/layout/works-1.jpg"}
                              className=" object-cover w-full h-full transition-all ease-out top-0 left-0 max-w-full absolute"
                            />
                          </a>
                          <div className="md:mb-4 sm:mb-[16]">
                            <a
                              href=""
                              className="md:font-bold text-[20px] sm:font-[500]"
                            >
                              Employees & Contractor Portals (CPM)
                            </a>
                          </div>
                          <div className="font-LightCus sm:text-[4vw] md:text-[3vw] lg:text-[1vw]">
                            A custom construction management system (CPM) which
                            helps to manage employees, contractors, equipment
                            and also streamline operation and inspection
                            processes.
                          </div>
                          <div className="bottom-[16px] left-[16px] absolute">
                            <a
                              href=""
                              className="text-[#00aeef] leading-[24px] lg:text-[16px] font-bold"
                            >
                              Read more →
                            </a>
                          </div>
                        </div>
                      </div>

                      <div
                        className="lg:flex-FooterBigRow lg:max-w-worksAll
                        bg-white hover:shadow-lg duration-75 pb-worksAll 
                        sm:flex-WhySM sm:max-w-full block
                      shadow-2xl rounded-[16px] overflow-hidden relative sm:mb-[50px] sm:p-ServicesP3 text-[#222428]"
                      >
                        <div>
                          <a
                            href=""
                            className="
                           mx-[-16px] relative sm:h-0 pb-[59.9%] overflow-hidden block mb-[16px]"
                          >
                            <Image
                              width={958}
                              height={623}
                              alt="Works Photo"
                              src={"/images/layout/works-1.jpg"}
                              className=" object-cover w-full h-full transition-all ease-out top-0 left-0 max-w-full absolute"
                            />
                          </a>
                          <div className="md:mb-4 sm:mb-[16]">
                            <a
                              href=""
                              className="md:font-bold text-[20px] sm:font-[500]"
                            >
                              Employees & Contractor Portals (CPM)
                            </a>
                          </div>
                          <div className="font-LightCus sm:text-[4vw] md:text-[3vw] lg:text-[1vw]">
                            A custom construction management system (CPM) which
                            helps to manage employees, contractors, equipment
                            and also streamline operation and inspection
                            processes.
                          </div>
                          <div className="bottom-[16px] left-[16px] absolute">
                            <a
                              href=""
                              className="text-[#00aeef] leading-[24px] lg:text-[16px] font-bold"
                            >
                              Read more →
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* Clone nội dung ở đây */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="basis-[0%] grow max-w-full relative w-full px-[15px]">
            <div className="p-tabsWorksInside sm:px-0 md:px-[unset]">
              <div className="flex flex-wrap mx-[-15px]">
                <div className="basis-[0%] flex-grow max-w-full relative w-full px-[15px]">
                  <div className="p-tabsWorksInside2 relative min-h-[150px]">
                    <div className="flex flex-wrap justify-between px-0">
                      {/* Clone nội dung ở đây */}
                      <div
                        className="md:p-12 flex-WhySM max-w-full bg-white hover:shadow-lg duration-75 
                      shadow-2xl rounded-[16px] overflow-hidden relative sm:mb-[50px] sm:p-ServicesP3 text-[#222428]"
                      >
                        <div className="md:relative md:min-h-[350px] lg:pl-ServicesP2">
                          <a
                            href=""
                            className="md:h-full lg:pb-0 lg:w-ServicePhoto md:left-0 md:mx-0 md:rounded-ServicesPhoto lg:absolute
                            sm:mx-[-16px] relative sm:h-0 sm:pb-[59.9%] sm:mb-[16px] sm:overflow-hidden sm:text-[#222428] block"
                          >
                            <Image
                              width={1024}
                              height={649}
                              alt="Works Photo"
                              src={"/images/layout/works-1.jpg"}
                              className=" object-cover w-full h-full transition-all ease-out top-0 left-0 max-w-full absolute"
                            />
                          </a>
                          <div className="md:mb-4 sm:mb-[16]">
                            <a
                              href=""
                              className="md:font-bold md:text-[48px] sm:leading-[1.3] sm:text-[5.1vw] sm:font-[500]"
                            >
                              Employees & Contractor Portals (CPM)
                            </a>
                          </div>
                          <div className="md:mb-[24px] font-LightCus sm:text-[4vw] md:text-[3vw] lg:text-[1vw]">
                            A custom construction management system (CPM) which
                            helps to manage employees, contractors, equipment
                            and also streamline operation and inspection
                            processes.
                          </div>
                          <div className="font-bold sm:bottom-[16px] sm:left-[16px] sm:text-[3.8vw] md:relative md:left-[inherit] md:bottom-[inherit]">
                            <a
                              href=""
                              className="text-[#00aeef] leading-[24px] lg:text-[16px] font-bold"
                            >
                              Read more →
                            </a>
                          </div>
                        </div>
                      </div>

                      <div
                        className="md:p-12 flex-WhySM max-w-full bg-white hover:shadow-lg duration-75 
                      shadow-2xl rounded-[16px] overflow-hidden relative sm:mb-[50px] sm:p-ServicesP3 text-[#222428]"
                      >
                        <div className="md:relative md:min-h-[350px] lg:pl-ServicesP2">
                          <a
                            href=""
                            className="md:h-full lg:pb-0 lg:w-ServicePhoto md:left-0 md:mx-0 md:rounded-ServicesPhoto lg:absolute
                            sm:mx-[-16px] relative sm:h-0 sm:pb-[59.9%] sm:mb-[16px] sm:overflow-hidden sm:text-[#222428] block"
                          >
                            <Image
                              width={1024}
                              height={649}
                              alt="Works Photo"
                              src={"/images/layout/works-1.jpg"}
                              className=" object-cover w-full h-full transition-all ease-out top-0 left-0 max-w-full absolute"
                            />
                          </a>
                          <div className="md:mb-4 sm:mb-[16]">
                            <a
                              href=""
                              className="md:font-bold md:text-[48px] sm:leading-[1.3] sm:text-[5.1vw] sm:font-[500]"
                            >
                              Employees & Contractor Portals (CPM)
                            </a>
                          </div>
                          <div className="md:mb-[24px] font-LightCus sm:text-[4vw] md:text-[3vw] lg:text-[1vw]">
                            A custom construction management system (CPM) which
                            helps to manage employees, contractors, equipment
                            and also streamline operation and inspection
                            processes.
                          </div>
                          <div className="font-bold sm:bottom-[16px] sm:left-[16px] sm:text-[3.8vw] md:relative md:left-[inherit] md:bottom-[inherit]">
                            <a
                              href=""
                              className="text-[#00aeef] leading-[24px] lg:text-[16px] font-bold"
                            >
                              Read more →
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* Clone nội dung ở đây */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <h2>Content for Tab 4</h2>
          <p>This is the content for Tab 4</p>
        </TabPanel>

        <TabPanel>
          <h2>Content for Tab 5</h2>
          <p>This is the content for Tab 5</p>
        </TabPanel>

        <TabPanel>
          <h2>Content for Tab 6</h2>
          <p>This is the content for Tab 6</p>
        </TabPanel>

        <TabPanel>
          <h2>Content for Tab 7</h2>
          <p>This is the content for Tab 7</p>
        </TabPanel>

        <TabPanel>
          <h2>Content for Tab 7</h2>
          <p>This is the content for Tab 7</p>
        </TabPanel>

        <TabPanel>
          <h2>Content for Tab 8</h2>
          <p>This is the content for Tab 8</p>
        </TabPanel>

        <TabPanel>
          <h2>Content for Tab 9</h2>
          <p>This is the content for Tab 9</p>
        </TabPanel>

        <TabPanel>
          <h2>Content for Tab 10</h2>
          <p>This is the content for Tab 10</p>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default TabsWorks;
