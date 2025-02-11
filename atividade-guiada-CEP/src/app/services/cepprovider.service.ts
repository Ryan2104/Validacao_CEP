import { Injectable } from '@angular/core';

//Adicionar a importação do HttpClient
//Ry-- importamos para usar as funções dele 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepproviderService {

  //Vamos injetar o cliente HTTP no construtor de nossa classe
  //Ry -- injetamos o HttpClient no construtor

  constructor(private httpClient : HttpClient) { }

  //Endpoint do Serviço / Provedor do BrasilAPI
  // declaramos a api(brasilapi) como apiEndpoint, para podermos usar ela 
  private apiEndpoint : string = 'https://brasilapi.com.br/api/cep/v2/'


  //Este método realiza uma consulta na API utilizando o método get do httpClient
  //Ela depende do parâmetro CEP 
  private getCEP (cep : string) {
    
    // Utilizando a API para buscar o cep e já apresentar no console
    console.log(`${this.apiEndpoint}${cep}`)

    return this.httpClient.get(`${this.apiEndpoint}${cep}`)
  }

  public consultarCEP(cep : string){

    return this.getCEP(cep)
  }

}
