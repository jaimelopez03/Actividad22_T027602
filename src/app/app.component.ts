import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor() {}
  total = null;
  transactions = [];
  ngOnInit() {
    $('.modal').modal();
  }
  incomeamount(myInput: HTMLInputElement): void {
    const value = myInput.value;
    if (value === '' || value < '0') {
      alert('Ingresar un valor NUMERICO mayor a 0');
    } else {
      this.transactions.unshift(value);
      this.total = this.total + (+myInput.value);
      myInput.value = '';
    }
  }
  expenseamount(myInput: HTMLInputElement): void {
    const value = myInput.value;
    if (value === '' || value < '0') {
      alert('Ingresar un valor NUMERICO mayor a 0');
    } else {
      this.transactions.unshift(value);
      this.total = this.total - (+myInput.value);
      myInput.value = '';
    }
  }

}
