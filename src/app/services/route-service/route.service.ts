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

  public getQueryParam(key: string): string {
    return this.route.snapshot.queryParamMap.get(key);
  }

  public getMultiValuesQueryParamObservable(key: string): Observable<string[]> {
    return this.route.queryParamMap.pipe(
      map((params: ParamMap) => {
        const selectedIngredients = params.get(key);
        return selectedIngredients ? selectedIngredients.split(',') : null;
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
