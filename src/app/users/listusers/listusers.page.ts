import { Component, OnInit } from '@angular/core';

// Serviço de acesso à API
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.page.html',
  styleUrls: ['./listusers.page.scss'],
})

export class ListusersPage implements OnInit {

  // "Infinite Scrool") Variáveis
  itemsPage: any = [];
  private readonly offset: number = 10;
  private index = 0;

  // Variável que indentifica se temos usuários
  noUsers = false;

  // Variável com a array de usuários obtidos
  data: Array<any> = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {

    // Obtendo os dados da API
    this.usersService.getUsers().subscribe((res: any) => {

      // Se falhou ao obter os dados
      if (res.status !== 'success') {
        console.log(`Falha: ${res.result}`);
        return false;
      }

      // Loop para descartar usuários removidos (null) da listagem
      res.result.forEach((value) => {
        if (value !== null) {
          this.data.push(value);
        }
      });

      // Se não existem usuários
      if (this.data.length === 0) {
        this.noUsers = true;

        // Se existem usuários
      } else {

        // "Infinite Scrool") Página atual da listagem
        this.itemsPage = this.data.slice(this.index, this.offset + this.index);

        // "Infinite Scrool") Próxima página
        this.index += this.offset;
      }
    });
  }

  // Infinite Scrool
  loadData(event) {

    setTimeout(() => {

      // Paginação a cada rolagem
      const news = this.data.slice(this.index, this.offset + this.index);
      this.index += this.offset;

      // Ao rolar, adiciona próximos ítens aos itens existentes
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < news.length; i++) {
        this.itemsPage.push(news[i]);
      }

      // Concluir o tratamento do evento "rolagem"
      event.target.complete();

      // Encerra a rolagem se atingiu o total de elementos
      if (this.itemsPage.length === this.data.length) {
        event.target.disabled = true;
      }

      // Atraso em milissegundos para exibir o spinner e rolagem mais suave
    }, 800);


  }
}
