import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  // templateUrl: './product-list.component.html',
  templateUrl: './product-list-table.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  // inject ProductService
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // similar to @PostConstruct
    this.listProducts();
  }
  listProducts() {
    // Method is invoked once subscribe; integrating service with angular component
    this.productService.getProductList().subscribe(
      data => {
        // Assign results to the Product array
        this.products = data;
      }
    )
  }

}
