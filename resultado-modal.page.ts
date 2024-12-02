import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CalculoService } from '../services/calculo.service';
@Component({
  selector: 'app-resultado-modal',
  templateUrl: './resultado-modal.page.html',
  styleUrls: ['./resultado-modal.page.scss'],
})
export class ResultadoModalPage {
  @Input() valorPregunta1: number = 0;
  @Input() valorPregunta2: number = 0;
  @Input() valorPregunta3: number = 0;

  resultadoFinal: number = 0;
  mensaje: string = '';

  constructor(public calculoService: CalculoService, private router: Router ,private readonly modalController: ModalController,) {}

  ngOnInit() {
    this.calcularPromedio();  // Llamamos al método para calcular el promedio cuando se inicia el modal
  }
  siguientePregunta() {
    const seleccionados = this.calculoService.materialesInternos.filter(
      (item) => item.seleccionado
    );

    // Ir a la siguiente página
    this.router.navigate(['/pregunta1']);
  }

  calcularPromedio() {
    // Aplicamos los pesos de cada pregunta
    const porcentajePregunta1 = 0.15;  // 15%
    const porcentajePregunta2 = 0.50;  // 50%
    const porcentajePregunta3 = 0.35;  // 35%

    // Calculamos el promedio ponderado
    this.resultadoFinal = Math.round(
      (this.valorPregunta1 * porcentajePregunta1) +
      (this.valorPregunta2 * porcentajePregunta2) +
      (this.valorPregunta3 * porcentajePregunta3)
    );

    // Asignamos un mensaje según el valor del resultado
    this.asignarMensaje(this.resultadoFinal);
  }

  asignarMensaje(resultado: number) {
    switch (resultado) {
      case 0:
        this.mensaje = 'Sin peligro, edificación no inflamable.';
        break;
      case 1:
        this.mensaje = 'Peligro leve, su edificación requiere calor significativo para encenderse.';
        break;
      case 2:
        this.mensaje = 'Peligro moderado, su edificación se enciende fácilmente a temperaturas normales.';
        break;
      case 3:
        this.mensaje = 'Peligro grave, su edificación es muy inflamable, se enciende a temperaturas normales.';
        break;
      case 4:
        this.mensaje = 'Peligro extremo, su edificación se enciende con facilidad, incluso con una pequeña chispa.';
        break;
      default:
        this.mensaje = 'Resultado no válido.';
    }
  }

  // Método para cerrar el modal
  cerrarModal() {
    this.modalController.dismiss();
  }
}
