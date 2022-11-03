import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRefresher, ToastController } from '@ionic/angular';
import { Recicladora } from '../interfaces/recicladora.interface';
import { RecicladoraService } from '../servicios/recicladora.service';

@Component({
  selector: 'app-recicladoras',
  templateUrl: './recicladoras.page.html',
  styleUrls: ['./recicladoras.page.scss'],
})
export class RecicladorasPage implements OnInit {

  @ViewChild(IonRefresher) refresher!: IonRefresher;

  public listaRecicladoras: Recicladora[] = [];
  public cargandoRecicladoras: boolean = false;

  constructor(
    private servicioRecicladoras:RecicladoraService,
    private servicioToast: ToastController
  ) { }

  ngOnInit() {
    this.cargarRecicladoras();
  }

  public cargarRecicladoras(){
    this.cargandoRecicladoras = true;
    this.servicioRecicladoras.get().subscribe({
      next: (recicladora) =>{
        this.listaRecicladoras = recicladora;
        this.cargandoRecicladoras = false;
      },
      error: (e) => {
        console.error("Error al consultar Recicladoras", e);
        this.cargandoRecicladoras = false;
        this.servicioToast.create({
          header: 'Error al cargar Recicladoras',
          message: e.message,
          duration: 3000,
          position: 'bottom',
          color: 'danger'
        }).then(toast => toast.present()); 
      }
    });
  }

}
