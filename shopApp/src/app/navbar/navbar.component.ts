import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() language: string;
  // defines evento de salida
    // instancias el evento de salida
    @Output() lenguageChanged : EventEmitter<string>;
  constructor() {
    this.lenguageChanged = new EventEmitter()
   }

  ngOnInit() {
  }

  languageChange(language: string) {
    console.log(`lenguaje selecionado: ${language}`)
  }
}
