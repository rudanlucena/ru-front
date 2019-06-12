import { Endereco } from './endereco';

export class InstituicaoEnsino{
    idInstituicaoEnsino ?: number;
    nome ?: string;
    cnpj ?: string;
    endereco ?: Endereco;
    telefoneFixo ?: string;
    telefoneCelular ?: string;
}