import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Job } from './job';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private apiUrl = 'http://localhost:3000/jobs';
  private readonly STORAGE_KEY = 'jobDetails';

  constructor(private http: HttpClient) {}

  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}`);
  }

  getJobDetails(jobId: number): Observable<Job> {
    // Check if job details are cached in local storage
    const cachedJobDetails = localStorage.getItem(`${this.STORAGE_KEY}_${jobId}`);
    if (cachedJobDetails) {
      return of(JSON.parse(cachedJobDetails));
    } else {
      return this.http.get<Job>(`${this.apiUrl}/${jobId}`).pipe(
        map(job => {
          // Cache job details in local storage
          localStorage.setItem(`${this.STORAGE_KEY}_${jobId}`, JSON.stringify(job));
          return job;
        }),
        catchError((error: any) => {
          // Handle error if API request fails
          console.error('Error fetching job details:', error);
          throw error;
        })
      );
    }
  }


}
