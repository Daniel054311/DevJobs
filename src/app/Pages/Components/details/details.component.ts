import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../../jobs.service';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../../../job';
import { FooterComponent } from "../../Shared/footer/footer.component";

@Component({
    selector: 'app-details',
    standalone: true,
    templateUrl: './details.component.html',
    styleUrl: './details.component.css',
    imports: [FooterComponent]
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
