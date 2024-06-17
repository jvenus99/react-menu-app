import { useTranslation } from "react-i18next";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

import { Link } from "react-router-dom";

export const AppNavMenu = () => {
  const { t } = useTranslation();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t("menu")}
            </NavigationMenuLink>
          </Link>
          <div className="bg-white w-full h-0.5" />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t("login")}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t("contact")}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
