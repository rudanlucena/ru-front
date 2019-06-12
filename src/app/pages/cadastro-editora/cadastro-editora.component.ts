import { Component, OnInit } from '@angular/core';
import { EditoraService } from 'src/app/services/editora.service';
import { Editora } from 'src/app/models/editora';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-editora',
  templateUrl: './cadastro-editora.component.html',
  styleUrls: ['./cadastro-editora.component.css']
})
export class CadastroEditoraComponent implements OnInit {

  editora: Editora = new Editora();

  constructor(
    private editoraService: EditoraService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  salvarEditora() {
    this.editoraService.salvar(this.editora).subscribe(res => {
      swal.fire({
        html: `<h3>Salvo com sucesso!</h3>`,
        type: 'success',
        width: 400,
        heightAuto: true,
        confirmButtonColor: '#39B54A'
      }).then((result) => {
        this.router.navigate(['/pages/inicio']);
      })
    })
  }
}
