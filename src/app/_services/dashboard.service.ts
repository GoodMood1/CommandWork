import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  getTables() {
    return this.http.get<[]>(`${environment.apiUrl}/dashboard/table`);
  }
  getStatistics() {
    return this.http.get<[]>(`${environment.apiUrl}/dashboard/statistics`);
  }
}
