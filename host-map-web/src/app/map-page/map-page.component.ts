import {Component, OnInit} from '@angular/core';
import {Localizacao} from '../model/localizacao.model';
import {HttpClientService} from '../http-client.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'fd-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {

  dominio: String;

  localizacao: Localizacao = new Localizacao();

  constructor(private _route: ActivatedRoute, private httpService: HttpClientService) {
  }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.dominio = params['dominio'];
    });
  }

  exibirLocalizacao(localizacao): void {
    this.localizacao = localizacao;
    console.log(localizacao);

    this.httpService
      .post('http://localhost:3000/api/localizacao', localizacao)
      .subscribe((data) => console.log(data));
  }
}
