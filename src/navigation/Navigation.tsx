"use client"

import { Link } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {Separator} from "@/components/ui/separator";

export function MainNavigationMenuList() {
  return (
      <NavigationMenu viewport={false} className="bg-black text-white sticky">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link to="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <Separator orientation="vertical" className="h-6 w-px bg-white/20 mx-2" />
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link to="/tech-articles">Tech Articles</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <Separator orientation="vertical" className="h-6 w-px bg-white/20 mx-2" />
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link to="/language-learning">Language Learning Articles</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
  )
}
