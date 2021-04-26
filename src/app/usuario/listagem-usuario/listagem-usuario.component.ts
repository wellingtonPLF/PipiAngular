import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../Shared/model/usuario';
import {UsuarioService} from '../../Shared/service/usuario.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.scss']
})
export class ListagemUsuarioComponent implements OnInit {

  usuarios!: Array<Usuario>;

  constructor(private usuarioService: UsuarioService, private roteador: Router) {
  }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

  editar(usuario: Usuario): void {
    this.roteador.navigate(['cadastrarusuario', usuario.id]);
  }

  remover(usuario: Usuario): void {
    this.usuarioService.remover(usuario.id).subscribe(
      rtrn => {
        const indexToRemove = this.usuarios.findIndex(u => u.cpf === usuario.cpf);
        if (indexToRemove > -1){
          this.usuarios.splice(indexToRemove, 1);
        }
      }
    );
  }
}
