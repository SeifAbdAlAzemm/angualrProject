export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string
}

// Using a class to modify the description
export class ProductModel implements Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  
    constructor(product: Product) {
      this.id = product.id;
      this.title = this.truncateTitle(product.title);
      this.description = this.truncateDescription(product.description);
      this.price = product.price;
      this.image = product.image;
    }
  
    private truncateTitle(desc: string, length: number = 20): string {
        return desc.length > length ? desc.slice(0, length) + '...' : desc;
      }

    private truncateDescription(desc: string, length: number = 100): string {
      return desc.length > length ? desc.slice(0, length) + '...' : desc;
    }
  }