import { useTranslation } from "react-i18next";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";

type item = {
  name: string;
  image: string;
  link: string;
};

interface Props {
  items: Array<item>;
}

export const NavItemsMenu = (props: Props) => {
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = useState(0);
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-2">
        {props.items.map((item, index) => (
          <NavigationMenuItem key={index} onClick={() => setActiveLink(index)}>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "flex flex-col gap-5 text-foreground",
                index === activeLink &&
                  `border-b-2 border-black h-28 rounded-none`
              )}
              href={`#${item.link}`}
            >
              <img
                src={item.image}
                className="w-24 rounded-full object-cover"
              />
              {t(item.name)}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
