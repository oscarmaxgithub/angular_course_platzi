import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.scss']
})
export class PruebasComponent implements OnInit {

  title = 'platzi-store';
  items = ['uno', 'dos', 'tres'];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(): any{
    this.items.push('cuatro nuevo');
  }

  deleteItem(index: number): any{
    this.items.splice(index, 1);
  }

}
