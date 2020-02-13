import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { WebcamImage } from 'ngx-webcam';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AlunoService } from 'src/app/services/aluno.service';
import { Aluno } from 'src/app/models/aluno';

@Component({
  selector: 'app-edita-aluno',
  templateUrl: './edita-aluno.component.html',
  styleUrls: ['./edita-aluno.component.css']
})
export class EditaAlunoComponent implements OnInit {
  webcamCaptute
  aluno:Aluno;
  mostrarFoto = false
  // latest snapshot
  public webcamImage: WebcamImage = null;

  constructor(private router:Router, private alunoService:AlunoService) {
    this.aluno = JSON.parse(sessionStorage.getItem("alunoEdit"));
    if(this.aluno.image!=null){
      this.webcamCaptute = false
      this.mostrarFoto = true
      //webcamImage = true
    }
    else{
      this.webcamCaptute = true
    }
   }

  ngOnInit() {
  }

  public seconds: number;
  private trigger: Subject<void> = new Subject<void>();
  

  

  public triggerSnapshot(): void {
    this.seconds = 1;
    setTimeout(() => {
      this.seconds = 2;
      setTimeout(() => {
        this.seconds = 1
        setTimeout(() => {
          this.trigger.next();
          this.seconds = null;
        })
      })
    })

  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info("received webcam image", webcamImage);
    this.webcamImage = webcamImage;
    this.aluno.image = this.webcamCaptute.imageAsDataUrl
    this.webcamCaptute = false
    this.mostrarFoto = true
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  novaImagem(){
    this.webcamCaptute = true
    this.webcamImage = null
    this.mostrarFoto = false
  }

  async salvarAluno() {
    
    this.aluno.image = this.webcamImage.imageAsDataUrl;
    //
    try {
      await this.alunoService.atualizar(this.aluno).subscribe(
        res => {
          Swal.fire({
            html: `<h3>Salvo com sucesso!</h3>`,
            type: 'success',
            width: 400,
            heightAuto: true,
            confirmButtonColor: '#39B54A'
          }).then((result) => {
            this.router.navigate(['/aluno/lista']);
          })
        }

      );


    } catch (error) {
      console.log(error)
      console.log("asdasdas")
      Swal.fire({
        html: `<h3>Não foi possível salvar o Aluno!</h3>`,
        type: 'error',
        width: 400,
        heightAuto: true,
        confirmButtonColor: '#C1272D'
      })
    }

  }

}
