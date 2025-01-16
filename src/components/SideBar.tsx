// import { useState } from "react";
import { FiPlus, FiSearch, FiTrash } from "react-icons/fi";
import { GrAddCircle } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { RiExpandUpDownLine } from "react-icons/ri";

export const SideBar = () => {
   return (
    <section className="w-[16rem]">
      <div className="p-4">
        <div className="flex items-center gap-4 mb-3">
          <div>
            {}
          </div>
          <div>Chukwuemeka ...</div>
          <div>
            <RiExpandUpDownLine />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <div>
              <FiSearch />
            </div>
            <div>Search</div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <div>
              <IoSettingsOutline />
            </div>
            <div>Setting</div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <div>
              <GrAddCircle />
            </div>
            <div>New Page</div>
          </div>
          <div className="my-6">
            <div className="flex items-center gap-2">
              <div>
                <FiPlus />
              </div>
              <div>Add a Page</div>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <div>
              <FiTrash />
            </div>
            <div>Trash</div>
          </div>
        </div>
      </div>
    </section>
  );
};
