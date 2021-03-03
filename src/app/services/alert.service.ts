import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  success(){
    Swal.fire(
      'Sucesso!',
      'Operação realizada com sucesso.',
      'success'
    )
  }

  error(){
    Swal.fire(
      'Erro!',
      'Não foi possivel realizar a operaçaõ.',
      'error'
    )
  }
  
}
