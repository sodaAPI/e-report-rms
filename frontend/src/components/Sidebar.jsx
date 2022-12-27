import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import {
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  UserIcon,
  EnvelopeIcon,
  InformationCircleIcon,
  HomeIcon,
  BriefcaseIcon,
  ChatBubbleLeftIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import {
  PresentationChartLineIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import Logo from "../image/logobtn.png";
import SmallLogo from "../image/logo.png";

export default function Sidebars() {
  //User
  const { user } = useSelector((state) => state.auth);

  const menu = [
    {
      name: "Home",
      icon: <HomeIcon />,
      href: "/dashboard",
    },
    {
      name: "Reports",
      icon: <ChartBarIcon />,
      href: "/dashboard/report",
    },
    {
      name: "Discussion",
      icon: <ChatBubbleLeftRightIcon />,
      href: "/dashboard/discussion",
    },
    {
      name: "Meeting",
      icon: <UserGroupIcon />,
      href: "/dashboard/meeting",
    },
  ];

  const personal = [
    {
      name: "Profile",
      icon: <UserIcon />,
      href: "/dashboard/profile",
    },
    {
      name: "My Task",
      icon: <BriefcaseIcon />,
      href: "/dashboard/task",
    },
  ];

  const settings = [
    {
      name: "FAQ",
      icon: <ChatBubbleLeftIcon />,
      href: "/dashboard/faq",
    },
  ];

  return (
    <section className="flex min-h-screen">
      <Sidebar
        transitionDuration={750}
        collapsedWidth="75px"
        backgroundColor="white"
        className="text-gray-900">
        <Menu>
          <div className="flex md:pl-0 pl-5 md:items-center md:justify-center">
            <Link to="/dashboard">
              <img
                className="md:block hidden w-40 h-20 py-5"
                alt="logo"
                src={Logo}
              />
              <img
                className="md:hidden block w-10 py-5"
                alt="logos"
                src={SmallLogo}
              />
            </Link>
          </div>

          {/* Dashboard Menu */}

          <SubMenu
            defaultOpen
            label="Dashboard"
            icon={<PresentationChartLineIcon className="w-6" />}>
            {menu.map((val, index) => {
              return (
                <MenuItem key={index} routerLink={<Link to={val.href} />}>
                  <div
                    className="flex flex-row items-center gap-3">
                    <div className="w-5">{val.icon}</div>
                    <div>{val.name}</div>
                  </div>
                </MenuItem>
              );
            })}
            {user && user.roles === "admin" && (
              <MenuItem routerLink={<Link to="/dashboard/user"/>}>
                <div className="flex flex-row items-center gap-3">
                  <div className="w-5">
                    <UsersIcon />
                  </div>
                  <div>Users</div>
                </div>
              </MenuItem>
            )}
          </SubMenu>

          {/* Personal Menu */}

          <SubMenu
            defaultOpen
            label="Personal"
            icon={<UserCircleIcon className="w-6" />}>
            {personal.map((val, index) => {
              return (
                <MenuItem key={index} routerLink={<Link to={val.href} />}>
                  <div
                    className="flex flex-row items-center gap-3">
                    <div className="w-5">{val.icon}</div>
                    <div>{val.name}</div>
                  </div>
                </MenuItem>
              );
            })}
          </SubMenu>

          {/* Settings Menu */}

          <SubMenu
            defaultOpen
            label="Info"
            icon={<InformationCircleIcon className="w-6" />}>
            {settings.map((val, index) => {
              return (
                <MenuItem key={index} routerLink={<Link to={val.href} />}>
                  <div
                    className="flex flex-row items-center gap-3">
                    <div className="w-5">{val.icon}</div>
                    <div>{val.name}</div>
                  </div>
                </MenuItem>
              );
            })}
          </SubMenu>
        </Menu>
      </Sidebar>
    </section>
  );
}
