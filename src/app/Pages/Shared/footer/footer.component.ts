import { Component } from '@angular/core';
import { Job } from '../../../job';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../../../jobs.service';
import { ThemeService } from '../../../theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  job: Job | undefined;

  constructor(private route: ActivatedRoute, private jobsService: JobsService,
    private themeService: ThemeService,) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const jobId = +params['id'];
      this.jobsService.getJobDetails(jobId).subscribe(job => {
        this.job = job;
      });
    });
  }


  get isDarkMode(): boolean {
    return this.themeService.getCurrentTheme();
  }
}
