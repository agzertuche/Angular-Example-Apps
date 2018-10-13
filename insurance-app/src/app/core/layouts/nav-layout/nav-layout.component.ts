import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../store';
import * as LayoutActions from '../../store/actions/layout.actions';
@Component({
  selector: 'app-nav-layout',
  templateUrl: './nav-layout.component.html',
  styleUrls: ['./nav-layout.component.css'],
})
export class NavLayoutComponent {
  showSidenav: Observable<boolean>;
  loading: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.showSidenav = this.store.pipe(select(fromRoot.getShowSidenav));
    this.loading = this.store.pipe(select(fromRoot.getLoading));
  }

  closeSidenav() {
    this.store.dispatch(new LayoutActions.CloseSidenav());
  }

  openSidenav() {
    this.store.dispatch(new LayoutActions.OpenSidenav());
  }
}
