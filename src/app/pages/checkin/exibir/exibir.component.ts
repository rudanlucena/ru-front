import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/services/aluno.service';
import { Aluno } from 'src/app/models/aluno';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-exibir',
  templateUrl: './exibir.component.html',
  styleUrls: ['./exibir.component.css']
})
export class ExibirComponent implements OnInit {
  aluno: Aluno

  color = 'primary';
  buscandoAluno = false;
  constructor(private alunoService: AlunoService) {
    this.aluno = new Aluno()
  }

  ngOnInit() {
  }

  qrResultString: string;

  clearResult(): void {
    this.qrResultString = null;
  }

  onCodeResult(resultString: string) {
    if (this.qrResultString != resultString) {
      this.qrResultString = resultString;
      this.buscandoAluno = true
      this.getAluno(resultString)
    }
  }

  public async getAluno(resultString: string) {
    try {
      let r = await this.alunoService.getMatricula(resultString)
      console.log("*Aluno Encontrado:");
      this.playAudioSuccess();
      this.aluno = r
    } catch (e) {
      this.playAudioFail();
      console.log("*Aluno Não Encontrado:");
      this.clearResult();
    }
    this.buscandoAluno = false
  }

  playAudioSuccess() {
    let audio = new Audio();
    audio.src = "../../../assets/success.mp3";
    //audio.src = 
    audio.load();
    audio.play();
  }

  playAudioFail() {
    let audio = new Audio();
    audio.src = "../../../assets/error.mp3";
    //audio.src = 
    audio.load();
    audio.play();
  }

}
