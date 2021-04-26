import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ListagemUsuarioComponent } from './listagem-usuario/listagem-usuario.component';
import { ListagemUsuarioTabelaComponent } from './listagem-usuario-tabela/listagem-usuario-tabela.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {PipesModule} from '../Shared/pipes/pipes.module';



@NgModule({
  declarations: [
    CadastroUsuarioComponent,
    ListagemUsuarioComponent,
    ListagemUsuarioTabelaComponent
  ],
  exports: [
    CadastroUsuarioComponent,
    ListagemUsuarioComponent,
    ListagemUsuarioTabelaComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    PipesModule
  ]
})
export class UsuarioModule { }
