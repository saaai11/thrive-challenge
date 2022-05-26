import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Characters, Info, Questions } from '../futuruma.interface';

@Injectable({
  providedIn: 'root',
})
export class FuturumaService {
  url: string = 'https://api.sampleapis.com/futurama';

  constructor(private httpClient: HttpClient) {}

  public fetchInfo(): Observable<Info[]> {
    return this.httpClient
      .get<Info[]>(`${this.url}/info`, {
        headers: { Accept: 'application/json' },
        params: {},
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  public fetchCharacters(): Observable<Characters[]> {
    return this.httpClient
      .get<Characters[]>(`${this.url}/characters`, {
        headers: { Accept: 'application/json' },
        params: {},
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  public fetchCharacter(id: number): Observable<Characters> {
    return this.httpClient
      .get<Characters>(`${this.url}/characters/${id}`, {
        headers: { Accept: 'application/json' },
        params: {},
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  public fetchQuestions(): Observable<Questions[]> {
    return this.httpClient
      .get<Questions[]>(`${this.url}/questions`, {
        headers: { Accept: 'application/json' },
        params: {},
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
