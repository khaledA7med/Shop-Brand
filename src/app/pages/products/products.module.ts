import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsComponent } from "./products.component";
import { RouterModule, Routes } from "@angular/router";
import { NgSelectModule } from "@ng-select/ng-select";

export const routes: Routes = [{ path: "", component: ProductsComponent }];

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgSelectModule],
})
export class ProductsModule {}
