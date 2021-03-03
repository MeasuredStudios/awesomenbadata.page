import * as React from 'react';
import { Link } from 'gatsby';
import tw, { css } from 'twin.macro';
import ThemeToggle from './themeToggle';
import {
  HiMenu,
  HiOutlineChevronDown,
  HiOutlineCog,
  HiOutlineUserCircle,
} from 'react-icons/hi';
import { BiExit } from 'react-icons/bi';

const NavBar = (props) => {
  const [avatarDropdown, toggleAvatarDropDown] = React.useState(false);
  return (
    <div tw="flex items-center justify-between bg-white shadow-sm px-5 h-16 flex items-center">
      <div tw="lg:hidden block">
        <HiMenu tw="h-8 w-8" onClick={props.onClickMenu} />
      </div>
      <div tw="flex ml-auto">
        <div tw="relative">
          <div
            tw="flex items-center cursor-pointer hover:text-gray-800"
            onClick={() => toggleAvatarDropDown(!avatarDropdown)}
          >
            <span>Jovani Pink </span>
            <div tw="mr-2 w-9 h-9 rounded-full bg-purple-200 flex items-center justify-center font-bold">
              JP
            </div>
            <HiOutlineChevronDown tw="h-4 w-4" />
          </div>
          <div
            css={[
              tw`h-full w-full fixed top-0 right-0 z-10 bg-black opacity-20`,
              avatarDropdown ? tw`block` : tw`hidden`,
            ]}
            onClick={() => toggleAvatarDropDown(!avatarDropdown)}
          ></div>
          <div
            css={[
              tw`absolute right-0 mt-1 border rounded-sm py-2 bg-white shadow w-44 z-20`,
              avatarDropdown ? tw`block` : tw`hidden`,
            ]}
          >
            <ul tw="text-gray-500">
              <li tw="flex items-center cursor-pointer px-4 py-2 hover:bg-gray-100">
                <HiOutlineUserCircle tw="h-5 w-5" />
                <Link to="/" tw="ml-3">
                  Profile
                </Link>
              </li>
              <li tw="flex items-center cursor-pointer px-4 py-2 hover:bg-gray-100">
                <HiOutlineCog tw="h-5 w-5" />
                <Link to="/" tw="ml-3">
                  Settings
                </Link>
              </li>
              <li tw="flex items-center cursor-pointer px-4 py-2 hover:bg-gray-100">
                <BiExit tw="h-5 w-5" />
                <Link to="/" tw="ml-3">
                  Sign Out
                </Link>
              </li>
              <li tw="flex items-center cursor-pointer px-4 py-2 hover:bg-gray-100">
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
