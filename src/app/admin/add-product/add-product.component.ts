import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl, FormArray } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-manage-products',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  @Input() product: Product = {
    description: '',
    picture: '',
    price: 0,
    discountEligible: false,
    count: 0,
    couponCodes: [],
    category: ''
  };
  @Input() action: string = 'Add';
  productForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}
  
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      description: [this.product.description, Validators.required],
      picture: [this.product.picture, Validators.required],
      price: [this.product.price, Validators.required],
      discountEligible: [this.product.discountEligible, Validators.required],
      count: [this.product.count, Validators.required],
      couponCodes: this.formBuilder.array(this.product.couponCodes),
      category: [this.product.category, Validators.required]
    })
  }

  showRequiredError( key:string ) {
    return this.productForm.controls[`${key}`].touched
      && this.productForm.controls[`${key}`].invalid
      && !!this.productForm?.controls[`${key}`].errors?.['required']
  }

  get discountEligible() {
    return this.productForm.controls['discountEligible'].value
  }

  get couponCodes() {
    return this.productForm.controls['couponCodes'] as FormArray
  }

  addCouponCode() {
    const couponCodeForm = this.formBuilder.group({
      couponCode: ['']
    });
    this.couponCodes.push(couponCodeForm.controls['couponCode'])
  }

  deleteCouponCode(index: number) {
    this.couponCodes.removeAt(index);
  }

  submit() {
    if (!this.productForm?.valid) {
      return;
    }
    // Do submit stuff here
  }

}
