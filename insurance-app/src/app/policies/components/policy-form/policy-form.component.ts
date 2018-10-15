import {
  SimpleChanges,
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
} from '@angular/core';
import { Policy } from '../../models/policy';
import {
  Validators,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-policy-form',
  templateUrl: './policy-form.component.html',
  styleUrls: ['./policy-form.component.css'],
})
export class PolicyFormComponent implements OnInit, OnChanges {
  @Input()
  policy: Policy = {
    id: undefined,
    alias: '',
    type: '',
    indent: -1,
    start_date: '',
    end_date: '',
  };
  @Output()
  save = new EventEmitter<Policy>();

  policyForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.policyForm = this.formBuilder.group({
      id: [this.policy.id],
      alias: [this.policy.alias, Validators.required],
      type: [this.policy.type],
      indent: [this.policy.indent, Validators.required],
      start_date: [this.policy.start_date, Validators.required],
      end_date: [this.policy.end_date, Validators.required],
    });
    // this.policyForm = this.formBuilder.group({
    //   alias: ['', Validators.required],
    //   type: [''],
    //   indent: ['', Validators.required],
    //   start_date: ['', Validators.required],
    //   end_date: ['', Validators.required],
    // });
  }

  ngOnInit() {
    if (this.policy) {
      this.policyForm.patchValue({ ...this.policy });
    }
  }

  ngOnChanges() {
    if (this.policy) {
      this.policyForm.patchValue({ ...this.policy });
    }
  }

  savePolicy() {
    const { value, valid, touched } = this.policyForm;
    if (!touched || !valid) {
      return;
    }

    this.save.emit(value);
  }

  reset() {
    this.policyForm.reset();
  }
}
