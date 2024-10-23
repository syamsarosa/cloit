import { Link } from "react-router-dom";
import FolderIcon from "../assets/icons/folder";
import FolderFillIcon from "../assets/icons/folder-fill";
import GridIcon from "../assets/icons/grid";
import WidgetIcon from "../assets/icons/widget";

function Sidebar() {
  return (
    <nav className="sticky m-4 box-border h-[calc(100%_-_2rem)] w-64 rounded-2xl bg-slate-900 p-6 font-bold text-gray-500">
      <div className="inline-flex w-full flex-grow content-center">
        <img
          src="../assets/images/cloit-logo.png"
          alt="Cloit Logo"
          className="w-16"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z" />
        </svg>
      </div>
      <ul>
        <li className="mt-8 rounded-2xl bg-gray-800">
          <a
            href=""
            className="inline-flex w-full content-center gap-2 p-3 text-white"
          >
            <FolderFillIcon className="fill-white"></FolderFillIcon>
            <span>Systems</span>
          </a>
          <ul>
            <li className="p-3">
              <a href="" className="inline-flex gap-2">
                <FolderIcon></FolderIcon>
                <span>System Code</span>
              </a>
            </li>
            <li className="p-3">
              <a href="" className="inline-flex gap-2">
                <GridIcon></GridIcon>
                <span>Properties</span>
              </a>
            </li>
            <li className="grid content-center rounded-2xl bg-green-400 p-3">
              <Link to="/menu" className="inline-flex gap-2">
                <WidgetIcon className="fill-slate-900"></WidgetIcon>
                <span className="text-slate-900">Menus</span>
              </Link>
            </li>
            <li className="p-3">
              <Link to="/api-list" className="inline-flex gap-2">
                <GridIcon></GridIcon>
                <span>API List</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="group rounded-2xl p-3 hover:bg-gray-500">
          <a href="" className="inline-flex gap-2">
            <FolderIcon></FolderIcon>
            <span className="group-hover:text-gray-900">Users & Group</span>
          </a>
        </li>
        <li className="p-3">
          <a href="" className="inline-flex gap-2">
            <FolderIcon></FolderIcon>
            <span>Competition</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
