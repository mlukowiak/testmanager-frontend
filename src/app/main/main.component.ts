import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  scenarios: any = [];
  selectedScenario = null;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getScenarios().subscribe(
      data => {
        this.scenarios = data;
      },
      error => console.log(error)
    );
  }

  selectScenario(scenario){
    this.selectedScenario = scenario;
  }

}
