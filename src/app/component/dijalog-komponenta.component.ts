import {Component, Inject, OnInit} from '@angular/core';
import {MasterServisService} from '../service/master-servis.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {PodaciOOsobi} from '../command/podaciOOsobi';

@Component({
  selector: 'app-dijalog-komponenta',
  templateUrl: './dijalog-komponenta.component.html',
  styleUrls: ['../styles/dijalog-komponenta.component.css']
})
export class DijalogKomponentaComponent implements OnInit {


  constructor(private service: MasterServisService,
              public dialogRef: MatDialogRef<DijalogKomponentaComponent>) {
  }

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    gender: new FormControl(0),
    birthDate: new FormControl('')
  });

  minDate = new Date(1910, 1, 1);
  maxDate = new Date(2001, 6, 1);

  listaMogucihSpolovila = [
    {value: 'Muško'},
    {value: 'Žensko'},
    {value: 'Ostalo'}
  ];

  //onSpremi(): void {
    //const osoba: PodaciOOsobi = new PodaciOOsobi(
      //this.form.controls.name.value,
      //this.form.controls.surname.value,
      //this.form.controls.email.value,
      //this.form.controls.gender.value,
      //this.form.controls.birthDate.value
      //);
    //this.service.spremiOsobu(osoba);
    //this.resetirajUnose();
    //this.dialogRef.close(this.form.value);
    //console.log('dijalog sprema', osoba);
  //}

  onSpremi(): void {
    this.dialogRef.close(this.form.value);
    const osoba: PodaciOOsobi = new PodaciOOsobi(
      this.form.controls.name.value,
      this.form.controls.surname.value,
      this.form.controls.email.value,
      this.form.controls.gender.value,
      this.form.controls.birthDate.value
    );
    this.service.spremiOsobu(osoba);
    console.log('dijalog sprema', osoba);
  }

  resetirajUnose() {
    this.form.setValue({
      name: '',
      surname: '',
      email: '',
      gender: '1',
      birthDate: 0,
    });
  }

  onZatvori() {
    this.resetirajUnose();
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
