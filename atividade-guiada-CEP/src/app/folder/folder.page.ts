import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// Importando o módulo de busca de cep
import { CepproviderService } from '../services/cepprovider.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public cep : string = '';
  private activatedRoute = inject(ActivatedRoute);

  // injetando ao construtor private cepProvider : CepproviderService
  constructor(private router: Router, private cepProvider : CepproviderService) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  pesquisar(){
    console.log(this.cep);
    // if(this.cep == '11704-900' || this.cep == '11704900') {
    //   console.log('Praia Grande')
    //   this.router.navigate(['/teste2'])
    // }
    // if(this.cep == '11088-190'|| this.cep == '11088190') {
    //   console.log('Santos')
    //   this.router.navigate(['/teste'])
    // }    
    
    // =>   Simbolo para criar uma function anônima  
    // subscribe: Aguarda o retorno da api e manda como parametro (data), para fazer a consulta
    this.cepProvider.consultarCEP(this.cep).subscribe((data) =>{
      
      // apresenta no console os dados recebidos (data)
      console.warn(data)
      
      // criando váriaveis strings para ser atribuidas os valores 
      var uf = 'SP', cidade ='São Vicente'
      

      //object.entries(data): retorna uma array dos próprios pares [chave,valor] do nosso objeto (data)
      // for para atribuição dos valores da api na variavel [valor,chave] // criando um array com o parametro (data) que foi atribuido acima
      for(const[chave,valor] of Object.entries(data)){
        console.log(chave, valor)
        switch(chave){
              //chave  : valor
          case 'state' : uf = valor 
              break
          case 'city' : cidade = valor
              break
        }
        
      }
      
      // mandamos as duas váriaveis | uf,cidade | para a função redirecionar logo abaixo 
      this.redirecionar(uf,cidade)
    })

  }
  //usando a função que puxamos as váriaveis
  // Adicionando os parametros uf:string, cidade:string /para podermos utilizar na função,  
  redirecionar(uf:string, cidade:string )
  {
     
    if(uf !='SP' ){
      //Mensagem de Erro 
      console.log('O CEP não é da RMBS - ' + this.cep)
      return
    }
    //else{
     // this.router.navigate(['/'+cidade])     
   // }
  
    //Usando a váriavel cidade para ser consultada no switch
    switch (cidade) {

      case 'Praia Grande':
        console.log('Praia Grande')
        
        // encaminha para a aba teste2 
        this.router.navigate(['/teste2'])        
        break;

      case '11088190':
      case '11088-190':
      case 'Santos':
  
        console.log('Santos')
        this.router.navigate(['/santos'])
              
      break;
        
      default:
        console.log('O CEP não é da RMBS - ' + this.cep)
        break;
    }

  }


}
