import { Injectable } from '@angular/core';
import { CoreService } from '../../core/services/core.service';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Policy } from '../models/policy';

@Injectable()
export class PoliciesService {
  constructor(private service: CoreService) {}

  getPolicies(): Observable<Policy[]> {
    return this.service.get('policies').pipe(map(policies => policies || []));
  }

  getPolicy(id: string): Observable<Policy> {
    return this.service
      .get(`policies/${id}`)
      .pipe(switchMap(policy => policy || {}));
  }

  updatePolicy(updatedPolicy: Policy): Observable<Policy> {
    return this.service.update(`policies/${updatedPolicy.id}`, updatedPolicy);
  }

  createPolicy(newPolicy: Policy): Observable<Policy> {
    return this.service.post(`policies`, newPolicy);
  }

  removePolicy(deletedPolicy: Policy): Observable<Policy> {
    return this.service.delete(`policies/${deletedPolicy.id}`);
  }
}
