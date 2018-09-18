import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public getQueryParamObservable(key: string): Observable<string> {
    return this.route.queryParamMap.pipe(
      map((params: ParamMap) => {
        const value = params.get(key);
        return value ? value : null;
      })
    );
  }

  public getMultiValuesQueryParamObservable(key: string): Observable<string[]> {
    return this.getQueryParamObservable(key).pipe(
      map((value: string) => {
        return value ? value.split(',') : [];
      })
    );
  }

  public updateQueryParam(key: string, value: string) {
    this.updateMultiValuesQueryParam(key, [value]);
  }

  public updateMultiValuesQueryParam(key: string, values: string[]) {
    const updateParam = {};
    updateParam[key] = values.join(',');
    this.router.navigate([], {
      relativeTo: this.route, queryParams: {
        ...this.route.snapshot.queryParams,
        ...updateParam
      }
    });
  }

}
