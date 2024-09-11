import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ProductsService } from "src/app/shared/services/products/products.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  categories: any[] = [];
  products: any[] = [];
  subscribes: Subscription[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  getProducts() {
    let sub = this.productsService.getAllProducts().subscribe({
      next: (res) => (this.products = res),
    });

    this.subscribes.push(sub);
  }
  getCategories() {
    let sub = this.productsService.getAllCategories().subscribe({
      next: (res) => (this.categories = res),
    });

    this.subscribes.push(sub);
  }

  filterProducts(event: any) {
    let sub = this.productsService.getProductsByCategory(event).subscribe({
      next: (res) => (this.products = res),
    });

    this.subscribes.push(sub);
  }

  ngOnDestroy(): void {
    this.subscribes && this.subscribes.forEach((s) => s.unsubscribe());
  }
}
