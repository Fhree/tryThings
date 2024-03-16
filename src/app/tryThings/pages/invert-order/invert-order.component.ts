import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'tt-invert-order',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './invert-order.component.html',
  styleUrl: './invert-order.component.css'
})
export class InvertOrderComponent {
  source: string = '';
  resultFor: string = '';
  resultReverse: string = '';

  invert(): void{
    this.invertWithFor();
    this.invertWithReverse();
  }

  invertWithFor(): void{
    let aux: string = '';
    Array.from(this.source).forEach(x => {
      aux = x + aux;
    });
    this.resultFor = aux;
  }

  invertWithReverse() :void{
    let aux: string = this.source;
    this.resultReverse = Array.from(aux).reverse().toString().replaceAll(',','');
  }

  clean(): void{
    this.source = '';
    this.resultFor = '';
    this.resultReverse = '';
  }
}
