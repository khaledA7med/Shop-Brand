import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutes } from "../shared/app/routers/appRouters";

// Component pages

const routes: Routes = [
  {
    path: AppRoutes.Home.base,
    data: {
      title: "Dashboard",
    },
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
  {
    path: AppRoutes.Products.base,
    data: {
      title: "Products",
    },
    loadChildren: () =>
      import("./products/products.module").then((m) => m.ProductsModule),
  },
  {
    path: AppRoutes.Cart.base,
    data: {
      title: "Cart",
    },
    loadChildren: () => import("./cart/cart.module").then((m) => m.CartModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
