import { Component, OnInit } from '@angular/core';
import { IbgeService } from '@app/core/services/ibge.service';
import { SelectComponentOption } from '@app/shared/components/select/select.component';
import { IBGEUFResponse } from '@app/shared/interfaces/ibge';
import { first } from 'rxjs';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css'],
})
export class VagasComponent implements OnInit {
  ufs: Array<SelectComponentOption> = [];
  city: Array<SelectComponentOption> = [];
  vagasData: Array<any> = [];

  vagas = [
    {

      titulo: 'Assistente de Almoxarifado',
      empresa: 'Shineray',
      localizacao: 'Igarassu, PE',
      descricao:
        'Estamos buscando um desenvolvedor front-end com experiência em Angular e TypeScript.',
      salario: 'R$ 1.900 - R$ 2.100',
      data: 'Publicado há 3 dias',
      logo: '/assets/images/logo1.png',
    },
    {
      titulo: 'Auxiliar de Produção',
      empresa: 'Seara',
      localizacao: 'Igarassu, PE',
      descricao: 'Analista de Dados com experiência em SQL e Python.',
      salario: 'R$ 5.000 - R$ 7.000',
      data: 'Publicado há 5 dias',
      logo: '/assets/images/logo1.png',
    },
    {
      titulo: 'Gestão Portuária',
      empresa: 'Porto de Suape',
      localizacao: 'Goiana, PE',
      descricao:
        'Procuramos um designer UX/UI para criar experiências de usuário incríveis.',
      salario: 'R$ 4.500 - R$ 6.500',
      data: 'Publicado há 7 dias',
      logo: '/assets/images/logo1.png',
    },
    {
      titulo: 'Eletricista',
      empresa: 'Creative Agency',
      localizacao: 'Goiana, PE',
      descricao:
        'Procuramos um líder técnico para liderar nossa equipe de desenvolvimento.',
      salario: 'R$ 8.000 - R$ 10.000',
      data: 'Publicado há 7 dias',
      logo: '/assets/images/logo1.png',
    },
  ];

  constructor(private ibgeService: IbgeService) {}

  ngOnInit(): void {
    this.getUf();
    this.getCity();
  }

  // Utiliza o serviço de IBGE para buscar as UFs
  getUf() {
    this.ibgeService
      .getUf()
      .pipe(first())
      .subscribe({
        next: (response: Array<IBGEUFResponse>) => {
          const data = response.map(
            (uf: IBGEUFResponse): SelectComponentOption => {
              return {
                id: uf.id,
                value: uf.sigla,
                selected: false,
              };
            }
          );

          this.ufs = data;

        },
        error: (error) => {
          console.error('Ocorreu um erro ao buscar as UFs', error);
        },
      });
  }

  getCity() {
    this.ibgeService
    .getCity('PE')
    .pipe(first())
    .subscribe({
      next: (response: Array<IBGEUFResponse>) => {
        const data = response.map(
          (city: IBGEUFResponse): SelectComponentOption => {
            return {
              id: city.id,
              value: city.nome,
              selected: false,
            };
          }
        );

        this.city = data;
      },
      error: (error) => {
        console.error('Ocorreu um erro ao buscar as cidades', error);
      },
    });
  }
}