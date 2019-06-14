import { Injectable } from '@angular/core';
import {PodaciOOsobi} from '../command/podaciOOsobi';
import {FilterPodaci} from '../command/filterPodaci';


@Injectable({providedIn: 'root'})
export class MasterServisService {

  spremiOsobu(osoba: PodaciOOsobi) {
    console.log('Ovo šaljem iz faking servisa', osoba);
  }
  spremiFilter(podaciZaFilter: FilterPodaci) {
    console.log('Ovo su podaci za filter', podaciZaFilter);
  }
}
