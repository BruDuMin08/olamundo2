import { Component, OnInit } from '@angular/core';

// 1) Rotas dinâmicas
import { ActivatedRoute } from '@angular/router';

// 2) Importa modelo dos dados
import { User } from '../../models/users.model';

// 2) Importa o service dos usuários
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  // 1) Obtém o Id do usuário da URL
  id: string = this.route.snapshot.paramMap.get('id');

  // 2) Variável que indentifica se temos usuários
  noUser = false;

  // 2) Variável com a array de usuários obtidos
  data: User;

  constructor(

    // 1) Inicializa rotas dinâmicas para obter o Id
    private route: ActivatedRoute,

    // 2) Inicializa o service
    private usersService: UsersService

  ) { }

  ngOnInit() {

    // console.log('ID: ', this.id);

    // 2) Consultar a API para o Id informado
    this.usersService.getUser(this.id).subscribe(

      (res: any) => {
        // console.log(res);

        // 2) Caso a consulta à API falhe...
        if (res.status !== 'success') {
          console.error(`Erro: ${res.result}`);
          return false;
        }

        // 2) Se não retornou ninguém
        if (res.result === 'No record found') {

          // Informa ao HTML que ususário não existe
          this.noUser = true;
          return false;

          // Se usuário existe
        } else {

          // Mostra no HTML os dados do ususário
          this.data = res.result;
          console.log(this.data);

        }
      }
    );
  }

  // Ação do botão Editar
  editUser(id: string) {
    alert(`Editando ${id}...`);
  }

  // Ação do botão Apagar
  delUser(id: string, name: string) {
    alert(`Apagando ${name}`);
  }
}
