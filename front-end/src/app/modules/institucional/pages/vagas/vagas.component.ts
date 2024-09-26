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
      localizacao: 'Ipojuca',
      descricao:
        'Estamos buscando um desenvolvedor front-end com experiência em Angular e TypeScript.',
      salario: 'R$ 1.900 - R$ 2.100',
      data: 'Publicado há 3 dias',
      logo: 'https://aomoto.com.br/uploads/files/marca/85/shineray.jpg',
    },
    {
      titulo: 'Operador Técnico de Logística ',
      empresa: 'Aché',
      localizacao: 'Cabo de Santo Agostinho',
      descricao: 'Preencher check-list para os processos de recebimento e expedição; Cumprir os procedimentos e as normas de segurança, utilizando todos os equipamentos de proteção',
      salario: 'R$ 1.808 - R$ 3.208',
      data: 'Publicado há 2 dias',
      logo: 'https://sbdfl.org.br/wp-content/uploads/2019/03/Ache-300x268.png',
    },
    {
      titulo: 'Técnico em Elétrica',
      empresa: 'Tecon',
      localizacao: 'Ipojuca',
      descricao:
        'Realizar as atividades de manutenção elétrica preventiva, preditiva e corretiva em equipamentos de pequeno, médio e grande porte, subestações, quadros de distribuição, bem como auxiliar os Técnicos de Mecânica em suas atividades.',
      salario: 'A combinar',
      data: 'Publicado há 7 dias',
      logo: 'https://www.acusticadan.com.br/imagem/logo-tecon.png',
    },
    {
      titulo: 'Assistente de Logística',
      empresa: 'Copa Energia',
      localizacao: 'Cabo de Santo Agostinho',
      descricao:
        'Atender as demandas administrativas da área logística da filial, garantindo o fluxo de documentos e processos do departamento.',
      salario: 'R$ 1.804 - R$ 3.257',
      data: 'Publicado há 7 dias',
      logo: 'https://raichu-uploads.s3.amazonaws.com/logo_copa-energia_1SGIAj.png',
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