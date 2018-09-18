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

  public updateQueryParam(key: string, value: string) {
    const updateParam = {};
    updateParam[key] = value;
    this.router.navigate([], { relativeTo: this.route, queryParams: {
      ...this.route.snapshot.queryParams,
      ...updateParam
    }
  });
  }

}
