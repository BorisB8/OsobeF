export class FilterPodaci {
  ime: string;
  prezime: string;

  static fromObject(data: any): FilterPodaci {
    const komanda = new FilterPodaci();
    komanda.ime = data.ime;
    komanda.prezime = data.prezime;
    return komanda;
  }
}
