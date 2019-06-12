import { Component, OnInit } from '@angular/core';
import { EditoraService } from 'src/app/services/editora.service';
import { Editora } from 'src/app/models/editora';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-editora',
  templateUrl: './cadastro-editora.component.html',
  styleUrls: ['./cadastro-editora.component.css']
})
export class CadastroEditoraComponent implements OnInit {

  editora: Editora = new Editora();

  constructor(private editoraService: EditoraService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  salvarEditora() {
    console.log(this.editora);
    this.editoraService.salvar(this.editora).subscribe(res => {
      console.log('salvou');
      this.router.navigate(['/pages/inicio']);
    })
  }

}
