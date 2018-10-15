import {
  SimpleChanges,
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { Policy } from '../../models/policy';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-policy-form',
  templateUrl: './policy-form.component.html',
  styleUrls: ['./policy-form.component.css'],
})
export class PolicyFormComponent implements OnChanges {
  @Input()
  policy: Policy;
  @Output()
  save = new EventEmitter<Policy>();

  policyForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  buildForm() {
    this.policyForm = this.formBuilder.group({
      id: [''],
      alias: ['', Validators.required],
      type: [''],
      indent: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['policy'] && changes['policy'].currentValue) {
      this.policyForm.patchValue(this.policy);
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
