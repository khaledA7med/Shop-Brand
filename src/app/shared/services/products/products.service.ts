import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ApiRoutes } from "../../app/routers/ApiRoutes";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  private readonly env = environment.baseURL;
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get<any[]>(this.env + ApiRoutes.Products.allProducts);
  }

  getAllCategories(): Observable<any> {
    return this.http.get<any[]>(this.env + ApiRoutes.Products.categories);
  }

  getProductsByCategory(type: string): Observable<any> {
    return this.http.get<any[]>(
      this.env + ApiRoutes.Products.filterProducts + "/" + type
    );
  }
}
