import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ExtinctAnimalsService {
  constructor(private readonly httpService: HttpService) {}

  // Fetch extinct animals data
  getAllAnimals(): Observable<any> {
    return this.httpService
      .get('https://extinct-api.herokuapp.com/api/v1/animal/')
      .pipe(map(response => response.data));
  }

  // Fetch single animal data by ID
  getAnimalById(id: string): Observable<any> {
    return this.httpService
      .get(`https://extinct-api.herokuapp.com/api/v1/animal/${id}`)
      .pipe(map(response => response.data));
  }
}