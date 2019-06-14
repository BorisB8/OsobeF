import {Component, Inject, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/of';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {DijalogKomponentaComponent} from './dijalog-komponenta.component';
import {MasterServisService} from '../service/master-servis.service';
import {FilterPodaci} from '../command/filterPodaci';

@Component({
  selector: 'app-glavna-komponenta',
  templateUrl: './glavna-komponenta.component.html',
  styleUrls: ['../styles/glavna-komponenta.component.css']
})
export class GlavnaKomponentaComponent implements OnInit {

  name: string;
  surname: string;
  birthDate: string;
  gender: string;
  email: string;
  ime: string;
  prezime: string;

  ELEMENT_DATA: PersonsData[] = [
    {name: 'Boris', surname: 'Ćirić', birthDate: '31/07/1988', gender: 'muško', email: 'borkabcc@gmail.com'},
    {name: 'Dino', surname: 'Ćurić', birthDate: '28/01/1989', gender: 'muško', email: 'dino.curic@gmail.com'}
  ];

  displayedColumns: string[] = ['name', 'surname', 'birthDate', 'gender', 'email'];

  dataSource: TableDataSource = new TableDataSource(this.ELEMENT_DATA);
  constructor(private service: MasterServisService,
              private dialog: MatDialog) {
  }

  onDodaj() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    const referencaNaDialog = this.dialog.open(DijalogKomponentaComponent, dialogConfig);
    referencaNaDialog.afterClosed().subscribe(osoba => {
      console.log('ovo je iz tablice da vidim prvi puta', osoba);
      this.ELEMENT_DATA.push(osoba);
      this.dataSource = new TableDataSource(this.ELEMENT_DATA);
      console.log('ovo je iz tablice da vidim', osoba);
    });
  }

  onFilter() {
    let podaciZaFilter: FilterPodaci = {
      ime: this.ime,
      prezime: this.prezime
    };
    this.service.spremiFilter(podaciZaFilter);
  }

  ngOnInit() {
  }
}

export class PersonsData {
  name: string;
  surname: string;
  birthDate: string;
  gender: string;
  email: string;
}

export interface Data {
}

export class TableDataSource extends DataSource<any> {

  constructor(public _data: any) {
    super();
  }

  connect(): Observable<Data[]> {
    return Observable.of(this._data);
  }

  disconnect(): void {
  }
}
