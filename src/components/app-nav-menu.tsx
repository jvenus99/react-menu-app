import { useTranslation } from "react-i18next";
import {
  NavigationMenu,
  NavigationMenuItem,
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
          <Link to="" className={navigationMenuTriggerStyle()}>
            {t("menu")}
          </Link>
          <div className="bg-white w-full h-0.5" />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="" className={navigationMenuTriggerStyle()}>
            {t("login")}
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="" className={navigationMenuTriggerStyle()}>
            {t("contact")}
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
