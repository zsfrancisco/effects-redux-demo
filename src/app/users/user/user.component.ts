import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, of, Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducers";
import {loadUser} from "../../store/actions";
import {User} from "../../models";
import {selectErrorUser, selectIsLoadingUser, selectUser} from "../../store/selectors/user.selectors";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit, OnDestroy {

  something = 'francisco';
  routerParamsSubscription: Subscription;
  user$: Observable<User> = of();
  isLoading$: Observable<boolean> = of(false);
  error$: Observable<any> = of();

  constructor(private activatedRoute: ActivatedRoute,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.getUserInformation();
  }

  ngOnDestroy(): void {
    this.routerParamsSubscription?.unsubscribe();
  }

  getUserInformation(): void {
    this.routerParamsSubscription = this.activatedRoute.params.subscribe(({id}) => {
      this.store.dispatch(loadUser({userId: id}));
      this.getSubscriptions();
    });
  }

  getSubscriptions(): void {
    this.user$ = this.store.select(selectUser);
    this.isLoading$ = this.store.select(selectIsLoadingUser);
    this.error$ = this.store.select(selectErrorUser);
  }

}
