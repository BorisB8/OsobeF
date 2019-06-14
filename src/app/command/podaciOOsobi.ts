export class PodaciOOsobi {
  name: string;
  prezime: string;
  email: string;
  datumRodjenja: string;
  spol: string;

  constructor(ime: string, prez: string, email: string, datum: string, spol: string) {
    this.name = ime;
    this.prezime = prez;
    this.email = email;
    this.datumRodjenja = datum;
    this.spol = spol;
  }
}
