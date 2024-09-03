import MenuList from "./menu-list";
import "./styles.css";

// menus probu sağlanmazsa default olarak boş bir array gönderilecek
export default function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-container">
      {/* // MenuList componentine menus propu gönderiliyor.  */}
      {/* // MenuList componenti içerisinde list propu ile menus propu alınıyor. */}
      <MenuList list={menus} />
    </div>
  );
}
