import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-scenario-list',
  templateUrl: './scenario-list.component.html',
  styleUrls: ['./scenario-list.component.css']
})
export class ScenarioListComponent implements OnInit {

  @Input() scenarios = [];
  @Output() selectScenario = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  scenarioClicked(scenario){
    this.selectScenario.emit(scenario);
  }
}
