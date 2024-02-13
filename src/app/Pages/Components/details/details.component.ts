import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../../jobs.service';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../../../job';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{

  job: Job | undefined;

  constructor(private route: ActivatedRoute, private jobsService: JobsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const jobId = +params['id'];
      this.jobsService.getJobDetails(jobId).subscribe(job => {
        this.job = job;
        console.log(job)
      });
    });
  }


}
