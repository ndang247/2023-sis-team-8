//add imports

export default function Menu(props: MenuProps) {
  return (
    <div className={`${props.className} menu-menu`} style={props.style}>
      <div className="menu-box_12671262126012551251x">
        <div className="menu-box_box_127112721269x">
          <div className="menu-box_12711272x">
            <div className="menu-ellipse-6x" />
            <div className="menu-line-1x" />
          </div>
          <p className="menu-search">Search</p>
        </div>
        <Notifications_none
          className="menu-notifications_none-1"
         />
        <MoonSolid1 className="menu-moon-solid-1x-1" />
        <Info_outline className="menu-info_outline-1" />
        <Avatar className="menu-avatar-1" />
      </div>
      <p className="menu-utshandbook">UTS HANDBOOK</p>
    </div>
  );
}

Menu.defaultProps = {
  className: "",
  style: {},
};

interface MenuProps {
  className: string;
  style: Object;
}
