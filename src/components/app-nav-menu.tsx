import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

import { Link } from "react-router-dom";

export const AppNavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              menu
            </NavigationMenuLink>
          </Link>
          <div className="bg-white w-full h-0.5" />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              entrar
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              contato
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
