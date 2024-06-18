import { NavItemsMenu } from "@/components/nav-items-menu";
import { Input } from "@/components/ui/input";

import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";

function MenuPage() {
  const { t } = useTranslation();
  return (
    <div className="p-5 flex flex-col gap-2">
      <form>
        <div className="relative">
          <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder={t("search")} className="pl-8" />
        </div>
      </form>
      <div className=" w-full h-40">
        <NavItemsMenu
          items={[
            {
              name: "Burgers",
              image:
                "https://preodemo.gumlet.io/usr/venue/7602/section/646fbe4c64a6f.png",
              link: "242403",
            },
            {
              name: "Drinks",
              image:
                "https://preodemo.gumlet.io/usr/venue/7602/section/646fbe5dc1bf3.png",
              link: "242404",
            },
            {
              name: "Desserts",
              image:
                "https://preodemo.gumlet.io/usr/venue/7602/section/646fbe93cb615.png",
              link: "242677",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default MenuPage;
