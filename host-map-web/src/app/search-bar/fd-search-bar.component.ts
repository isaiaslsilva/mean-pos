import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClientService} from '../http-client.service';
import {Localizacao} from '../model/localizacao.model';

@Component({
  selector: 'fd-search-bar',
  templateUrl: './fd-search-bar.component.html',
  styleUrls: ['./fd-search-bar.component.css']
})
export class FdSearchBarComponent implements OnInit {

  @Input()
  dominio: String;

  @Output()
  localizacao: EventEmitter<Localizacao> = new EventEmitter<Localizacao>();

  constructor(private httpCliente: HttpClientService) { }

  ngOnInit() {
    if (this.dominio) {
      this.pesquisar();
    }
  }

  pesquisar(): void {
    this.httpCliente
        .get('http://ip-api.com/json/' + this.dominio)
        .subscribe( (data) => {
            data.dominio = this.dominio;
            data.dataHora = Date.now();
            console.log(data);
            this.localizacao.emit(data);
          }, (error) => {console.log(error); }
        );
  }
}
