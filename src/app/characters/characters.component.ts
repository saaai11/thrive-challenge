import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Characters } from '../futuruma.interface';
import { FuturumaService } from '../services/futuruma.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters$: Observable<Characters[]> =
    this.futurumaService.fetchCharacters();
  constructor(
    private futurumaService: FuturumaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.futurumaService.fetchCharacters().subscribe((characters) => {
      console.log(characters);
    });
  }

  navigate(id: number) {
    console.log(id);
    this.router.navigate(['./info', id + 1]);
  }
}
