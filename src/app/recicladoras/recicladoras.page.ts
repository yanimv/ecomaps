import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRefresher, ToastController } from '@ionic/angular';
import { Recicladoras } from '../interfaces/recicladoras.interface';
import { RecicladoraService } from '../servicios/recicladora.service';

@Component({
  selector: 'app-recicladoras',
  templateUrl: './recicladoras.page.html',
  styleUrls: ['./recicladoras.page.scss'],
})
export class RecicladorasPage implements OnInit {

  @ViewChild(IonRefresher) refresher!: IonRefresher;

  public listaRecicladoras: Recicladoras[] = [];
  public cargandoRecicladoras: boolean = false;
  private idmaterial: number[] = [];

  private iconPaga: boolean = false;

  constructor(
    private servicioRecicladoras:RecicladoraService,
    private servicioToast: ToastController,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idmaterial=this.activatedRoute.snapshot.queryParamMap.getAll("idmaterial")
    .filter(idm => !Number.isNaN(Number(idm)))
    .map(idm => Number(idm));
    this.cargarRecicladoras();
  }

  public cargarRecicladoras(){
    this.cargandoRecicladoras = true;
    if(this.idmaterial.length > 0){
      this.servicioRecicladoras.cargarPorMaterial(this.idmaterial).subscribe({
        next: (recicladoras) => {
          this.listaRecicladoras = recicladoras;
          this.cargandoRecicladoras =false;
        },
        error: (e)=>{
          console.log('Error al cargar recicladoras', e);
          this.cargandoRecicladoras = false;
        }
      })
    }else{
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

  public mostrarIconPaga(){
    
  }

}
