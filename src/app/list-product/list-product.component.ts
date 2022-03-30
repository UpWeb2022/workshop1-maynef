import { Component, OnInit } from '@angular/core';
import{Product} from '../model/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public titleApp: string;
  public listProduct:Product[];
  public priceMax: number=100;

  constructor() {
  }
  ngOnInit(): void {
    this.titleApp= 'First Angular App';
    this.listProduct=[
      {id:12,
        title:'T-shirt',
        price:120,
        quantity:1,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT13vbNqg4ZhgxVW_5LD5bIcvaFDji4dHQ0Lg&usqp=CAU',
        like:12,
        description:'description1'
      },
      {id:13,
        title:'Pants',
        price:90,
        quantity:0,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsfCtQdcZYiUJ2f8VklDoesYjL3_JzjRuHTg&usqp=CAU',
        like:18,
        description:'description2'
      },
      {id:14,
        title:'Hat',
        price:45,
        quantity:17,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVEu95VtDl83gdOFSOkAnN63p4mWsHfi6PA&usqp=CAU',
        like:10,
        description:'description3'
      }
    ];
  }
  public incrementLike(p:Product):void{
    let i= this.listProduct.indexOf(p);
    if(i!=-1){
      this.listProduct[i].like++;
    }
  }

  public buyProduct(p:Product):void {
    let i = this.listProduct.indexOf(p);
    if (i != -1) {
      this.listProduct[i].quantity--;
    }
  }


}
