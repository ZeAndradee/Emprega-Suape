import { Component } from '@angular/core';

@Component({
  selector: 'app-qualificacoes',
  templateUrl: './qualificacoes.component.html',
  styleUrls: ['./qualificacoes.component.css']
})
export class QualificacoesComponent {
  aulas = [
    {
      titulo: 'Aux. de serviços diversos',
      descricao: 'Atuando com o intuito de realizar tarefas voltadas para atendimento, recepção, limpeza, vigilância, secretarias e outras finalidades.',
      link: 'https://igarassu.pe.gov.br/portugues',
      imagem: '/assets/images/portugues.png',
      vagas: '60 vagas',
      tipo: 'Online',
      categoria: 'Língua Portuguesa'
    },
    {
      titulo: 'Aulas de Lógica',
      descricao: 'Desenvolva seu raciocínio lógico com exercícios práticos e desafios.',
      link: 'https://igarassu.pe.gov.br/logica',
      imagem: '/assets/images/logica.jpg',
      vagas: 'Intermediário',
      tipo: 'Presencial',
      categoria: 'Lógica'
    },
    {
      titulo: 'Aulas de Matemática',
      descricao: 'Aprenda matemática de forma fácil e divertida com nossos professores experientes.',
      link: 'https://igarassu.pe.gov.br/matematica',
      imagem: '/assets/images/mathclass.jpg',
      vagas: 'Avançado',
      tipo: 'Online',
      categoria: 'Matemática'
    },
    {
      titulo: 'Aulas de Ética',
      descricao: 'Compreenda a importância da ética no dia a dia e em sua carreira profissional.',
      link: 'https://igarassu.pe.gov.br/etica',
      imagem: '/assets/images/etica.jpg',
      vagas: 'Iniciante',
      tipo: 'Presencial',
      categoria: 'Ética'
    }
  ];

  filtros = {
    vagas: ['Todas', 'Iniciante', 'Intermediário', 'Avançado'],
    tipo: ['Todos', 'Online', 'Presencial'],
    categoria: ['Todas', 'Língua Portuguesa', 'Lógica', 'Matemática', 'Ética']
  };

  filtroSelecionado = {
    vagas: 'Todas',
    tipo: 'Todos',
    categoria: 'Todas'
  };

  filtrarAulas() {
    return this.aulas.filter(aula => {
      return (this.filtroSelecionado.vagas === 'Todas' || aula.vagas === this.filtroSelecionado.vagas) &&
             (this.filtroSelecionado.tipo === 'Todos' || aula.tipo === this.filtroSelecionado.tipo) &&
             (this.filtroSelecionado.categoria === 'Todas' || aula.categoria === this.filtroSelecionado.categoria);
    });
  }
}
