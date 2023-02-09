import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
  menuClasses,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import {
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  UserIcon,
  InformationCircleIcon,
  HomeIcon,
  BriefcaseIcon,
  ChatBubbleLeftIcon,
  UsersIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import {
  PresentationChartLineIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import Logo from "../image/logobtn.png";
import SmallLogo from "../image/logo.png";

const themes = {
  dark: {
    sidebar: {
      backgroundColor: "#1E293B",
      color: "#e8f4ff",
    },
    menu: {
      menuContent: "#192333",
      icon: "#59d0ff",
      hover: {
        backgroundColor: "#0e3052",
        color: "#e8f4ff",
      },
      active: {
        backgroundColor: "#13395e",
        color: "#e8f4ff",
      },
      disabled: {
        color: "#3e5e7e",
      },
    },
  },
};

export default function Sidebars() {
  const { collapsed } = useProSidebar();

  //User
  const { user } = useSelector((state) => state.auth);

  //Menu
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
    {
      name: "Document",
      icon: <DocumentTextIcon />,
      href: "/dashboard/doc/mid/add",
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

  //Sidebar Settings - Theme
  const [theme] = React.useState("dark");

  const menuItemStyles = {
    root: {
      fontSize: "15px",
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: {
      backgroundColor: themes[theme].menu.menuContent,
    },
    button: {
      [`&.${menuClasses.active}`]: {
        backgroundColor: themes[theme].menu.active.backgroundColor,
        color: themes[theme].menu.active.color,
      },
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
      "&:hover": {
        backgroundColor: themes[theme].menu.hover.backgroundColor,
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <section className="flex min-h-screen ">
      <Sidebar
        transitionDuration={900}
        collapsedWidth="78px"
        backgroundColor={themes[theme].sidebar.backgroundColor}
        rootStyles={{
          color: themes[theme].sidebar.color,
        }}>
        <Menu menuItemStyles={menuItemStyles}>
          <div className="flex pl-0  items-center justify-center">
            <Link to="/dashboard">
              {!collapsed ? (
                <img className="w-40 h-20 py-5" alt="logo" src={Logo} />
              ) : (
                <img className=" w-10 py-5" alt="logos" src={SmallLogo} />
              )}
            </Link>
          </div>

          {/* Dashboard Menu */}

          <SubMenu
            defaultOpen
            label="Dashboard"
            icon={<PresentationChartLineIcon className="w-6" />}>
            {menu.map((val, index) => {
              return (
                <MenuItem key={val.name} component={<Link to={val.href} />}>
                  <div className="flex flex-row items-center gap-3">
                    <div className="w-5">{val.icon}</div>
                    <div>{val.name}</div>
                  </div>
                </MenuItem>
              );
            })}
            {user && user.roles === "admin" && (
              <MenuItem component={<Link to="/dashboard/user" />}>
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
                <MenuItem key={val.name} component={<Link to={val.href} />}>
                  <div className="flex flex-row items-center gap-3">
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
                <MenuItem key={val.name} component={<Link to={val.href} />}>
                  <div className="flex flex-row items-center gap-3">
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
