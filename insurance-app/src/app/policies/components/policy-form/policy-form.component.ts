import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const enum FormMode {
  New,
  Edit,
}
@Component({
  selector: 'app-policy-form',
  templateUrl: './policy-form.component.html',
  styleUrls: ['./policy-form.component.css'],
})
export class PolicyFormComponent implements OnInit {
  id: string;
  mode: FormMode;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
