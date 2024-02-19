import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../../service/job/jobs.service';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../../../service/job/job';
import { FooterComponent } from '../../Shared/footer/footer.component';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  imports: [FooterComponent],
})
export class DetailsComponent implements OnInit {
  job: Job | undefined;
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private jobsService: JobsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.loading = true;
      const jobId = +params['id'];
      this.jobsService.getJobDetails(jobId).subscribe((job) => {
        this.job = job;
        this.loading = false;
      });
    });
  }
}
