import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormControl, FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CanComponentDeactivate } from 'src/app/shared/unsavedchanges.guard';

@Component({
  selector: 'app-create-claim',
  templateUrl: './create-claim.component.html',
  styleUrls: ['./create-claim.component.css']
})
export class CreateClaimComponent implements OnInit, CanComponentDeactivate {

  addClaimForm: FormGroup;
  datePickerConfig: Partial<BsDatepickerConfig>;

  countries: any[] = [
    { id: 1, name: 'Canada' },
    { id: 2, name: 'United States' }
  ];

  states: any[] = [
    { id: 1, name: 'Indiana' },
    { id: 2, name: 'Maine' },
    { id: 3, name: 'Mississippi' },
    { id: 4, name: 'Nevada' },
    { id: 5, name: 'North Carolina' },
    { id: 6, name: 'Idaho' },
    { id: 7, name: 'Illinois' },
    { id: 8, name: 'Wisconsin' },
    { id: 9, name: 'Ohio' },
  ];

  canDeactivate(): boolean {
    if (this.addClaimForm.dirty || this.addClaimForm.touched) {
      return window.confirm('Are you sure you want to discard changes.?');
    }
    return true;
  }

  constructor(private fb: FormBuilder) {

    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        dateInputFormat: 'YYYY/MM/DD'
      });
  }

  ngOnInit(): void {

    this.addClaimForm = this.fb.group({
      invoiceDate: ['', Validators.required],
      purchaseOrderNumber: [''],
      invoiceNumbers: this.fb.array([
       this.initInvoiceNumberFormGroup()
      ]),
      companyName: ['', Validators.required],
      street1: ['', Validators.required],
      street2: [''],
      city: ['', Validators.required],
      stateProvince: ['Select State', Validators.required],
      postalCode: ['', Validators.required],
      country: ['Select Country', Validators.required],
      contactPerson: [''],
      phoneNumber: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
      endUserInvoiceTotalAmount: ['', Validators.required]

    });
  }

  getValidationError(grp: FormGroup = this.addClaimForm): void {
    Object.keys(grp.controls).forEach((key: string) => {

      const abstractControl = grp.get(key);

      if (abstractControl && !abstractControl.valid &&
         (abstractControl.touched || abstractControl.dirty || abstractControl.value !== '')) {

        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            // tslint:disable-next-line: no-debugger
            debugger;
          }
        }
      }
    });
  }

  getFormItems(): FormArray{
    return this.addClaimForm.get('invoiceNumbers') as FormArray;
  }

  getSelectedState(stateId: number): void{ }

  initInvoiceNumberFormGroup(): FormGroup{
    return  this.fb.group({
      invoiceNum: ['', Validators.required],
    });
  }

  onAddClaimFormSubmit(): void {console.log(this.addClaimForm.value); }

  addNewInvoiceNumber(): void{
    this.getFormItems().push(this.initInvoiceNumberFormGroup());
  }

  removeInvoiceNumber(index: number): void{
    const invoiceFormArray = this.getFormItems();
    invoiceFormArray.removeAt(index);
    invoiceFormArray.markAsTouched();
    invoiceFormArray.markAsDirty();
  }

}
