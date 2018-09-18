import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  public getMultiValuesQueryParam(key: string): string[] {
    const values = this.route.snapshot.queryParamMap.get(key);
    return values ? values.split(',') : null;
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
