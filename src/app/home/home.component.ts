import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Info } from '../futuruma.interface';
import { FuturumaService } from '../services/futuruma.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  info$: Observable<Info[]> = this.futurumaService.fetchInfo();

  constructor(private futurumaService: FuturumaService) {}

  ngOnInit(): void {
    this.info$.subscribe((info) => {
      console.log(info);
    });
  }
}
