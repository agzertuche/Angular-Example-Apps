import { Injectable } from '@angular/core';
import { CoreService } from '../../core/services/core.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PoliciesService {
  constructor(private service: CoreService) {}

  getPolicies(): Observable<any> {
    return this.service.get('policies').pipe(map(policies => policies || []));
  }
}
