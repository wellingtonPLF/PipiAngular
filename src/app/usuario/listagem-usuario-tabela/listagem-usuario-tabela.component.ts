import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../Shared/model/usuario';
import {UsuarioService} from '../../Shared/service/usuario.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-listagem-usuario-tabela',
  templateUrl: './listagem-usuario-tabela.component.html',
  styleUrls: ['./listagem-usuario-tabela.component.scss']
})
export class ListagemUsuarioTabelaComponent implements OnInit {

  usuarios!: MatTableDataSource<Usuario>;
  mostrarColunas = ['id', 'nome', 'cpf', 'idade', 'acoes', 'telefone'];

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuarios => this.usuarios = new MatTableDataSource(usuarios)
    );
  }

  filtrar(texto: string): void {
    this.usuarios.filter = texto.trim().toLowerCase();
  }

  apagar(id: number): void {
    this.usuarioService.remover(id).subscribe(
      apagado => {
        const indx = this.usuarios.data.findIndex(usuario => usuario.id === id);
        if (indx > -1) {
          this.usuarios.data.splice(indx, 1);
          this.usuarios = new MatTableDataSource<Usuario>(this.usuarios.data);
        }
      }
    );
  }
}
