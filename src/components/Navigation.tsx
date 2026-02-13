import { Item, List, Root, Link } from "@radix-ui/react-navigation-menu";

import { NavLink } from "react-router";
import "./Navigation.css";
import { HomeIcon } from "@radix-ui/react-icons";

function Navigation() {
  return (
    <>
      <Root className="NavigationMenuRoot">
        <List className="NavigationMenuList">
          <Item className="NavigationMenuItem">
            <Link asChild>
              <NavLink to="./" className="NavigationMenuLink">
                <HomeIcon className="NavigationIcon"/>
                <span>Dashboard</span>
                {/* Dashboard */}
              </NavLink>
            </Link>
          </Item>
          <Item className="NavigationMenuItem">
            <Link asChild>
              <NavLink to="./stock" className="NavigationMenuLink">
                Stock
              </NavLink>
            </Link>
          </Item>
        </List>
      </Root>
    </>
  );
}

export default Navigation;
