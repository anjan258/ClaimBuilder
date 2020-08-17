import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormControl, FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CanComponentDeactivate } from 'src/app/shared/unsavedchanges.guard';
import { ClaimsService } from '../claims.service';
import { Claim } from '../claim';
import { CatalogItem  } from '../catalog-item';

@Component({
  selector: 'app-create-claim',
  templateUrl: './create-claim.component.html',
  styleUrls: ['./create-claim.component.css']
})
export class CreateClaimComponent implements OnInit, CanComponentDeactivate {

  claim: Claim;
  catalogItem: CatalogItem;
  addClaimForm: FormGroup;
  datePickerConfig: Partial<BsDatepickerConfig>;
  listSkus: any[];
  showHideDistributor: boolean = false;

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

  distributorsList: Array<any> = [
    { name: 'Arrow', value: 0 },
    { name: 'D&H', value: 6 },
    { name: 'Ingram Micro', value: 1 },
    { name: 'ScanSource', value: 2 },
    { name: 'Synnex', value: 3 },
    { name: 'Tech Data', value: 4 },
    { name: 'HPE', value: 5 },
    { name: 'Other Distributor', value: 7 }
  ];

  canDeactivate(): boolean {
    if (this.addClaimForm.dirty || this.addClaimForm.touched) {
      return window.confirm('Are you sure you want to discard changes.?');
    }
    return true;
  }

  constructor(private fb: FormBuilder, private claimService: ClaimsService) {

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
      distributors: this.fb.array([]),
      companyName: ['', Validators.required],
      street1: ['', Validators.required],
      street2: [''],
      city: ['', Validators.required],
      stateProvince: ['Select State', Validators.required],
      postalCode: ['', Validators.required],
      country: ['Select Country', Validators.required],
      contactPerson: [''],
      phoneNumber: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
      endUserInvoiceTotalAmount: ['', Validators.required],
      otherDistributor: ['']

    });

    this.claimService.getAllSkus().subscribe(data =>
      {
        this.listSkus =  data;
      });
  }

  getValidationError(grp: FormGroup = this.addClaimForm): void {
    Object.keys(grp.controls).forEach((key: string) => {

      const abstractControl = grp.get(key);

      if (abstractControl && !abstractControl.valid &&
         (abstractControl.touched || abstractControl.dirty || abstractControl.value !== '')) {

        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
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

  onAddClaimFormSubmit(): void {

    this.claim = this.addClaimForm.value;
    this.claim.UserId = 322534;
    this.claim.DistributorIds = [1, 2];
    this.claim.CatalogItem = { Points: 44, SerialNumber: '2111111', SkuId: 21348 };
    this.claimService.createClaim(this.claim).subscribe(
    () => alert('claim created successfully'),
    (err) => console.log(err)
    );
  }

  addNewInvoiceNumber(): void{
    this.getFormItems().push(this.initInvoiceNumberFormGroup());
  }

  removeInvoiceNumber(index: number): void{
    const invoiceFormArray = this.getFormItems();
    invoiceFormArray.removeAt(index);
    invoiceFormArray.markAsTouched();
    invoiceFormArray.markAsDirty();
  }

  onCheckboxChange(e): void{
    const distributorsArray: FormArray = this.addClaimForm.get('distributors') as FormArray;

    if (e.target.value === '7' && e.target.checked)
    {
      this.showHideDistributor = true;
    }
    else{
      this.showHideDistributor = false;
    }

    if (e.target.checked) {
      distributorsArray.push(new FormControl(e.target.value));
    } else {
      let i = 0;
      distributorsArray.controls.forEach((item: FormControl) => {
        if (item.value === e.target.value) {
          distributorsArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

}
