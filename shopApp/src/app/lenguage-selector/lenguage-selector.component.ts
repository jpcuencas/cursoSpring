import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lenguage-selector',
  templateUrl: './lenguage-selector.component.html',
  styleUrls: ['./lenguage-selector.component.css']
})
export class LenguageSelectorComponent implements OnInit {
  private _lenguage: string;
  constructor() { }

  // defines evento de salida
    // instancias el evento de salida
@Output() lenguageChange : EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }


  onLanguageChange(language: string) {
    console.log(language)
    console.log(`lenguaje selecionado: ${language}`)
  }

}
