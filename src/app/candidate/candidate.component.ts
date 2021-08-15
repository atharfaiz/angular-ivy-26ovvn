import { Component, Input, VERSION } from '@angular/core';
import { Candidate } from '../candidate';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'candidate-app',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent {
  public condidates: Candidate[] = [];
  public tempCondidates: Candidate[] = [];
  public searchTerm: string;
  public maleClick: boolean = false;
  public femaleClick: boolean = false;
  public condidate: Candidate = new Candidate();

  public firstNameAscSearch: boolean = false;
  public lastNameAscSearch: boolean = false;

  // we need to get dynamically
  public tempId: number = 4;

  constructor() {
    this.condidates = [
      {
        id: 1,
        first_name: 'Jeanette',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: 'Female'
      },
      {
        id: 2,
        first_name: 'Giavani',
        last_name: 'Frediani',
        email: 'gfrediani1@senate.gov',
        gender: 'Male'
      },
      {
        id: 3,
        first_name: 'Noell',
        last_name: 'Bea',
        email: 'nbea2@imageshack.us',
        gender: 'Female'
      },
      {
        id: 4,
        first_name: 'Willard',
        last_name: 'Valek',
        email: 'wvalek3@vk.com',
        gender: 'Male'
      }
    ];

    this.tempCondidates = this.condidates;
  }

  public performSearch() {
    if (this.searchTerm) {
      console.log(this.searchTerm);
      this.tempCondidates = [];
      this.tempCondidates.push(
        ...this.condidates.filter(cod => {
          return (
            this.searchTerm === cod.first_name ||
            this.searchTerm === cod.last_name ||
            this.searchTerm === cod.email
          );
        })
      );
      console.log(this.tempCondidates);
    } else {
      this.tempCondidates = this.condidates;
    }
  }

  public filterByMale() {
    this.maleClick = !this.maleClick;
    if (this.maleClick) {
      if (this.femaleClick) {
        this.tempCondidates = this.condidates;
      } else {
        this.tempCondidates = [];
        this.tempCondidates.push(
          ...this.condidates.filter(cod => cod.gender == 'Male')
        );
      }
    } else {
      if (this.femaleClick) {
        this.femaleClick = !this.femaleClick;
        this.filterByFeMale();
      } else {
        this.tempCondidates = this.condidates;
      }
    }
  }

  public filterByFeMale() {
    this.femaleClick = !this.femaleClick;
    if (this.femaleClick) {
      if (this.maleClick) {
        this.tempCondidates = this.condidates;
      } else {
        //perform sorting
        this.tempCondidates = [];
        this.tempCondidates.push(
          ...this.condidates.filter(cod => cod.gender == 'Female')
        );
      }
    } else {
      if (this.maleClick) {
        this.maleClick = !this.maleClick;
        this.filterByMale();
      } else {
        this.tempCondidates = this.condidates;
      }
    }
  }

  public onSubmit() {
    this.tempId = this.tempId + 1;
    this.condidate.id = this.tempId;
    let condidatetemp: Candidate = new Candidate();
    condidatetemp = this.condidate;
    this.condidate = <Candidate>{};
    this.condidates.push(condidatetemp);
  }

  public sortByFirstName() {
    this.firstNameAscSearch = !this.firstNameAscSearch;
    if (this.firstNameAscSearch) {
      this.tempCondidates = this.tempCondidates.sort((a, b) =>
        a.first_name.localeCompare(b.first_name)
      );
    } else {
      this.tempCondidates = this.tempCondidates.sort((a, b) =>
        b.first_name.localeCompare(a.first_name)
      );
    }
  }
  public sortByLastName() {
    this.lastNameAscSearch = !this.lastNameAscSearch;
    if (this.lastNameAscSearch) {
      this.tempCondidates = this.tempCondidates.sort((a, b) =>
        a.last_name.localeCompare(b.last_name)
      );
    } else {
      this.tempCondidates = this.tempCondidates.sort((a, b) =>
        b.last_name.localeCompare(a.last_name)
      );
    }
  }
}
