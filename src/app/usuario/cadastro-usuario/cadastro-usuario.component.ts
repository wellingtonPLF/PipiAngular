import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../Shared/model/usuario';
import {UsuarioService} from '../../Shared/service/usuario.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  usuario: Usuario;

  operacaoCadastro = true;

  constructor(private usuarioService: UsuarioService, private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.usuario = new Usuario();
    if(this.rotaAtual.snapshot.paramMap.has('id') ){
      this.operacaoCadastro = false;
      const idEdit = Number(this.rotaAtual.snapshot.paramMap.get('id'));
      this.usuarioService.pesquisarPorId(idEdit).subscribe(
        usuarioReturn => this.usuario = usuarioReturn
      );
    }
  }

  ngOnInit(): void {
  }

  inserirUsuario(): void {
    if (this.usuario.id){
      this.usuarioService.atualizar(this.usuario).subscribe(
          usuarioReturn => {
            this.roteador.navigate(['listarusuarios']);
        }
      );
    }
    else {
      this.usuarioService.inserir(this.usuario).subscribe(
        usuario => {
          console.log(usuario);
          this.roteador.navigate(['listarusuarios']);
        }
      );
    }
    // this.usuario = new Usuario();
  }
}
