import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Characters } from 'src/app/futuruma.interface';
import { FuturumaService } from 'src/app/services/futuruma.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  id: number = 1;

  character$: Observable<Characters>;

  constructor(
    private futurumaService: FuturumaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
      console.log(params.get('id'));
      this.character$ = this.futurumaService.fetchCharacter(this.id);
      this.character$.subscribe((data) => console.log(data));
    });
  }
}
