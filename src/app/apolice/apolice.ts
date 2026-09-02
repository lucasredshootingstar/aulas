import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  standalone: false,
  templateUrl: './apolice.html',
  styleUrl: './apolice.css',
})
export class Apolice {

  nome: string = '';
  sexo: string = '';
  idade: number = 0;
  valorAutomovel: number = 0;

  percentual: number = 0;
  valorApolice: number = 0;

  calcularApolice(): void {

    if (this.sexo === 'masculino') {

      if (this.idade <= 25) {
        this.percentual = 15;
      } else {
        this.percentual = 10;
      }

    } else if (this.sexo === 'feminino') {

      this.percentual = 8;

    }

    this.valorApolice =
      this.valorAutomovel * (this.percentual / 100);
  }
}


