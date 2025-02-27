import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductCardComponent {
  // @Input() imageSrc: string = '../../../assets/default-product.webp';
  // @Input() productName: string = 'Default Product';
  // @Input() productPrice: string = '0.00';

  products: Product[] = [];

  constructor(private productService: ProductService) {}
  
  ngOnInit(): void {
    
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data; 
        this.products.forEach(product => product.description.slice(0,5));
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

}
