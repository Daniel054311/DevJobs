import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Job } from './job';
import { Subject, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private apiUrl = 'https://64281ee346fd35eb7c4bfc31.mockapi.io/dev';
  private readonly STORAGE_KEY = 'jobDetails';

  // variable to filter the jobs
  position: string = '';
  location: string = '';
  fullTimeOnly: boolean = false;


  constructor(private http: HttpClient) { }

  applyFilter(position: string, location: string, fullTimeOnly: boolean) {
    // Update filter criteria
    this.position = position;
    this.location = location;
    this.fullTimeOnly = fullTimeOnly;
  }


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
