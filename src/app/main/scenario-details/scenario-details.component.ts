import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-scenario-details',
  templateUrl: './scenario-details.component.html',
  styleUrls: ['./scenario-details.component.css'],
  
})

export class ScenarioDetailsComponent implements OnInit {

  @Input() scenario;
  rateHovered = 0;

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
  }
  rateHover(rate){
    this.rateHovered = rate;
  }

  rateClicked(rate){
    this.apiService.rateScenario(rate, this.scenario.id).subscribe(
      result => {
},
      error => console.log(error)
    );
  }

}
