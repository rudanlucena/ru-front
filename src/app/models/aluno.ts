import { Curso } from './curso';
import { Auxilio } from './auxilio';

export class Aluno {
    public uuid:string;
	public nome:string;
	public matricula:string
	public situacao:string
	public cota:string
	public curso:Curso
	public image?:any

	public auxilio:Auxilio
}