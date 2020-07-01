import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8000/api/v1/scenarios/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token fc023e18e5ca72fabf756eed67e4a4e8c05fc008'
  })

  constructor(
    private httpClient: HttpClient
  ) { }

  getScenarios(){
    return this.httpClient.get(this.baseUrl, 
      {headers: this.headers});
  }

  rateScenario(rate: number, scenarioId: number){
    const body = JSON.stringify({stars: rate});
    return this.httpClient.post(
      `${this.baseUrl}${scenarioId}/rate_scenario/`, 
      body, 
      {headers: this.headers});
  }
}
