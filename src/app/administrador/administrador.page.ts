import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonRefresher, ToastController } from '@ionic/angular';
import { Recicladoras } from '../interfaces/recicladoras.interface';
import { RecicladoraService } from '../servicios/recicladora.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage implements OnInit {

  @ViewChild(IonRefresher) refresher!: IonRefresher;

  public listaRecicladoras: Recicladoras[] = [];
  public cargandoRecicladoras: boolean = false;
  public modalVisible: boolean = false;

  private recicladoraSeleccionada: Recicladoras | null = null;
  public modoFormulario: 'Registrar' | 'Editar' = 'Registrar';

  constructor(
    private servicioRecicladoras:RecicladoraService,
    private servicioToast: ToastController,
    private servicioAlert: AlertController
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

  public nuevo(){
    this.modoFormulario = 'Registrar';
    this.recicladoraSeleccionada = null;
    this.modalVisible = true;
  }

  public editar(recicladora: Recicladoras){
    this.recicladoraSeleccionada = recicladora;
    this.modoFormulario = 'Editar';
    this.modalVisible = true;
  }

  //CAMBIAR
  /*
  public cargarDatosEditar(){
    if(this.modoFormulario === 'Editar'){
      this.formularioLibro.modo = this.modoFormulario;
      this.formularioLibro.form.controls.idCtrl.setValue(this.libroSeleccionado.id);
    this.formularioLibro.form.controls.tituloCtrl.setValue(this.libroSeleccionado.titulo);
    this.formularioLibro.form.controls.idautorCtrl.setValue(this.libroSeleccionado.idautor);
    this.formularioLibro.form.controls.paginasCtrl.setValue(this.libroSeleccionado.paginas);
    }
  }

  public confirmarEliminacion(libro: Libro){
    this.servicioAlert.create({
      header: "Confirmar eliminación",
      subHeader: '¿Realmente desea eliminar el libro?',
      message: `${libro.id} - ${libro.titulo} (${libro.autor})`,
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Eliminar',
          handler: () => this.eliminar(libro)
        }
      ]
    }).then(a => a.present());
  }

  private eliminar(libro: Libro){
    this.servicioLibros.delete(libro).subscribe({
      next: () => {
        this.cargarLibros();
         this.servicioToast.create({
          header: 'Éxito.',
          message: 'El libro de elimino correctamente.',
          duration: 2000,
          position: 'bottom',
          color: 'success'
         }).then(t => t.present());
      },
      error: (e) => {
        console.error('Error al eliminar libro', e);
        this.servicioToast.create({
          header: 'Error al eliminar.',
          message: e.message,
          duration: 3000,
          position: 'bottom',
          color: 'danger'
        }).then(toast => toast.present());
      }
    })
  }*/

}
