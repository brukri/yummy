import {NgModule} from '@angular/core';

import {
  MatChipsModule, 
  MatFormFieldModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatExpansionPanel,
  MatExpansionModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatChipsModule, 
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatExpansionModule
  ],
  exports: [
    MatChipsModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatExpansionModule
  ]
})
export class MaterialModule {}
