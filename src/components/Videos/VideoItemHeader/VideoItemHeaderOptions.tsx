import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import { MdOutlineDelete } from "react-icons/md";
import { RiMore2Fill } from "react-icons/ri";

interface VideoItemHeaderOptionsProps {
  videoId: string;
}

export const VideoItemHeaderOptions = ({
  videoId,
}: VideoItemHeaderOptionsProps) => {
  return (
    <Menu
      menuButton={
        <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-900/50 rounded-lg transition-colors ml-auto">
          <RiMore2Fill />
        </MenuButton>
      }
      align="center"
      arrow
      arrowClassName="bg-secondary-100"
      transition
      menuClassName="bg-secondary-100 p-4 group"
    >
      <MenuItem className="p-0 hover:bg-transparent">
        <button className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1">
          <MdOutlineDelete className="group-hover:animate-[bounce_1s_ease-in-out_infinite]" />{" "}
          Delete
        </button>
      </MenuItem>
    </Menu>
  );
};
