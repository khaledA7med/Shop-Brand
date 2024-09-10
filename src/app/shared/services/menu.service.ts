import { Injectable } from "@angular/core";
import { MenuItem } from "src/app/layouts/sidebar/menu.model";
import { AppRoutes } from "../app/routers/appRouters";

@Injectable({
  providedIn: "root",
})
export class MenuService {
  getMenu(): MenuItem[] {
    return [
      {
        id: 1,
        label: "MENUITEMS.HOME.TEXT",
        link: AppRoutes.Home.base,
        icon: "ri-dashboard-line",
      },
      {
        id: 2,
        label: "MENUITEMS.PRODUCTS.TEXT",
        link: AppRoutes.Products.base,
        icon: "ri-shopping-bag-line",
      },
      {
        id: 3,
        label: "MENUITEMS.CART.TEXT",
        link: AppRoutes.Cart.base,
        icon: "ri-shopping-cart-2-line",
      },
      {
        id: 4,
        label: "MENUITEMS.ABOUT.TEXT",
        link: AppRoutes.About.base,
        icon: "ri-information-line",
      },
      {
        id: 5,
        label: "MENUITEMS.CONTACTUS.TEXT",
        link: AppRoutes.ContactUs.base,
        icon: "ri-contacts-book-2-line",
      },
    ];
  }
}
