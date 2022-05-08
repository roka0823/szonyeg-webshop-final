import { Component, OnInit } from '@angular/core';
import {Rug} from "../../shared/model/Rug";
import {RugService} from "../../shared/services/rug.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
