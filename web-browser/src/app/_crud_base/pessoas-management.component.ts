import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Pessoa } from '../pessoa.entity';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoas-management',
  templateUrl: './pessoas-management.component.html',
  styleUrls: ['./pessoas-management.component.scss'],
})
export class PessoasManagementComponent implements OnInit {
  pessoaInput: FormGroup;
  pessoasList = new MatTableDataSource<Pessoa>([
    {
      id: 1,
      nome: 'Pessoa 1',
      idade: 20
    }
  ])
  displayedColumns: string[] = ['id', 'nome', 'idade'];

  constructor(private pessoaService: PessoaService) {
    
    this.pessoaInput = new FormGroup({
      nome: new FormControl(''),
      idade: new FormControl(0),
    });
  }

  ngOnInit(): void {
    // this.fetchList()
  }

  fetchList() {
    this.pessoaService.listPessoas().then(pessoas => {
      this.pessoasList.data = pessoas
    })
  }

  async createPessoa() {
    const pessoa = new Pessoa(
      undefined,
      this.pessoaInput.value.nome,
      this.pessoaInput.value.idade,
    )
    await this.pessoaService.createPessoa(pessoa)
    debugger
    this.fetchList()
  }

  async deletePessoa(id: number) {
    await this.pessoaService.deletePessoa(id)
    this.fetchList()
  }


}
