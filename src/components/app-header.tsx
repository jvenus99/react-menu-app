import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AppNavMenu } from "@/components/app-nav-menu";
import { Outlet } from "react-router-dom";

export const AppHeader = () => {
  return (
    <>
      <header className="bg-primary flex flex-col">
        <div className="py-5 px-4 md:px-10 md:py-0 flex justify-center items-center">
          <div className="hidden md:block">
            <AppNavMenu />
          </div>
          <span className="md:hidden text-primary-foreground w-full text-center">
            Menu
          </span>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <div className="space-y-1" role="button">
                <span className="block ml-2 h-0.5 w-4 bg-primary-foreground" />
                <span className="block ml-2 h-0.5 w-4 bg-primary-foreground" />
                <span className="block ml-2 h-0.5 w-4 bg-primary-foreground" />
              </div>
            </SheetTrigger>
            <SheetContent side="right" className="w-[200px] sm:w-[340px]">
              <SheetHeader className="content-center">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="pl-5 pt-5">Entrar</div>
              <div className="pl-5 pt-5">Contato</div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="h-40">
          <img
            src="src/assets/header.svg"
            alt="header"
            className="w-full h-full object-cover"
          />
        </div>
      </header>
      <Outlet />
    </>
  );
};
