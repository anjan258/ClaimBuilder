import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-claim',
  templateUrl: './create-claim.component.html',
  styleUrls: ['./create-claim.component.css']
})
export class CreateClaimComponent implements OnInit {

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
      invoiceNumber: ['', Validators.required],
      companyName: ['', Validators.required],
      street1: ['', Validators.required],
      street2: [''],
      city: ['', Validators.required],
      stateProvince: ['Select State', Validators.required],
      postalCode: ['', Validators.required],
      country: ['Select Country', Validators.required],
      contactPerson: [''],
      phoneNumber: [''],
      endUserInvoiceTotalAmount: ['', Validators.required]

    });
  }

  onAddClaimFormSubmit(): void{}

}
