import * as React from 'react';
import tw, { css } from 'twin.macro';
import { Link } from 'gatsby';
import {
  HiOutlineTemplate,
  HiOutlineClipboardCheck,
  HiOutlineViewGrid,
  HiOutlineShoppingCart,
  HiOutlineCog,
} from 'react-icons/hi';
import { BiFoodMenu } from 'react-icons/bi';
import { MdAttachMoney } from 'react-icons/md';

const sidebarItems = [
  {
    to: '/dashboard',
    icon: <HiOutlineTemplate tw="h-5 w-5" />,
    text: 'Dashboard',
  },
  {
    to: '/team',
    icon: <MdAttachMoney tw="h-5 w-5" />,
    text: 'Team',
  },
  {
    to: '/player',
    icon: <BiFoodMenu tw="h-5 w-5" />,
    text: 'Player',
  },
  {
    to: '/stats',
    icon: <HiOutlineClipboardCheck tw="h-5 w-5" />,
    text: 'Stats',
  },
  {
    to: '/data',
    icon: <HiOutlineShoppingCart tw="h-5 w-5" />,
    text: 'Data',
  },
  {
    to: '/settings',
    icon: <HiOutlineCog tw="h-5 w-5" />,
    text: 'Settings',
  },
];

const NavItem = (props) => {
  const { to, icon, text, active } = props;
  return (
    <li
      css={[
        tw`hover:text-gray-200 cursor-pointer py-3`,
        active && tw`text-gray-200`,
      ]}
    >
      <Link to={to} tw="flex">
        {icon}
        <span tw="pl-2">{text}</span>
      </Link>
    </li>
  );
};

const SideBar = (props) => {
  const { mobileNav, onClickMenu } = props;
  return (
    <>
      <div
        css={[
          tw`h-full w-full m-0 p-0 fixed opacity-50 z-20`,
          mobileNav ? tw`block lg:hidden` : tw`hidden`,
        ]}
        onClick={onClickMenu}
      ></div>
      <div
        css={[
          tw`fixed left-0 top-0 px-4 h-screen z-30 lg:z-10 overflow-auto overflow-x-hidden w-64 transition-all duration-300 ease-linear`,
          mobileNav ? tw`ml-0 lg:-ml-64` : tw`-ml-64 lg:ml-0`,
        ]}
      >
        <div tw="flex justify-center h-16 items-center mb-5">
          <span tw="text-2xl font-medium">NBA Data</span>
        </div>
        <ul tw="text-gray-400 px-3">
          {sidebarItems.map((item) => (
            <NavItem
              key={item.text}
              active={window.location.pathname === '/dashboard'}
              to={item.to}
              icon={item.icon}
              text={item.text}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
