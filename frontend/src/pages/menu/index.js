import FolderFillIcon from "../../assets/icons/folder-fill";
import WidgetFill from "../../assets/icons/widget-fill";
import { useQuery } from "react-query";
import axios from "axios";
import { Item } from "./item";

const retrieveMenus = async () => {
  const response = await axios.get("http://cloit.test/api/menu");

  return response.data;
};

function Menu() {
  const {
    data: menus,
    error,
    isLoading,
  } = useQuery("menusData", retrieveMenus);

  if (isLoading) return <div>Fetching menus...</div>;

  return (
    <div className="grid h-[calc(100%_-_2rem)] grid-cols-2 px-4 py-6">
      <div className="w-full">
        <div className="flex gap-2">
          <FolderFillIcon className="fill-gray-400"></FolderFillIcon>
          <span className="text-gray-600">/</span>
          <span className="text-gray-800">Menus</span>
        </div>
        <div className="flex items-center gap-2 pt-8">
          <WidgetFill className="size-10 rounded-full bg-blue-700 fill-white p-2"></WidgetFill>
          <h2 className="text-2xl font-bold">Menus</h2>
        </div>
        <div className="mt-6">
          <div className="text-sm text-gray-600">Menu</div>
          <select
            name="menu"
            id="menu"
            className="mt-2 rounded-lg bg-slate-200 p-3 text-slate-700"
          >
            <option value="">Select Menu</option>
            {menus.map((menu) => {
              if (menu.parent_id == 0) {
                return (
                  <option value={menu.uuid} key={menu.uuid}>
                    {menu.title}
                  </option>
                );
              }
            })}
          </select>
        </div>
        <div className="mt-6 flex gap-2">
          <button className="rounded-full bg-slate-900 px-6 py-3 font-bold text-white hover:bg-gray-800">
            Expand All
          </button>
          <button className="rounded-full border border-slate-900 px-6 py-3 font-bold text-slate-900 hover:bg-gray-200">
            Collapse All
          </button>
        </div>
        <div class="mt-4 rounded-2xl border border-slate-300 p-4">
          <ul>
            {menus.map((menu) => {
              console.log(menu);
              return <Item menu={menu} key={menu.title} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
