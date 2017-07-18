import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer, Vehicle, EnquiryRequest, ContactUsRequest } from './Modals';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateField } from '../Common/Directives';
import { CustomValidationRules, ValidationMessages, ApplicationConstants } from '../Common/Constants';
import { APIService } from '../Api/Services';
@Component(
    {
        templateUrl: 'Views/Home.html'
    })
export class HomeComponent {

    public EnquiryRequest: EnquiryRequest;
    public enquiryForm: FormGroup;
    public IsCabRequest: boolean = true;
    private Submitted: boolean = false;
    private ValidationMessages = ValidationMessages;
    constructor(private formBuilder: FormBuilder) {
        this.EnquiryRequest = new EnquiryRequest(new Customer('', '', ''), '', '', '', '', '', new Vehicle('', '', 0, 0, '', ''));
    }
    ngOnInit() {
        this.buildForm();
    }

    buildForm(): void {
        this.createForm();
    }

    createForm = function () {
        this.enquiryForm = this.formBuilder.group({
            'FullName': [this.EnquiryRequest.Customer.FullName, [Validators.required, validateField(new CustomValidationRules('FullName'), this.enquiryForm)]],
            'PhoneNumber': [this.EnquiryRequest.Customer.PhoneNumber, [Validators.required, validateField(new CustomValidationRules('PhoneNumber'), this.enquiryForm)]],
            'TravelDate': [this.EnquiryRequest.TravelDate, [Validators.required, validateField(new CustomValidationRules('TravelDate'), this.enquiryForm)]],
            'Cab_FromPlace': [this.EnquiryRequest.Cab_FromPlace, [Validators.required, validateField(new CustomValidationRules('Cab_FromPlace'), this.enquiryForm)]],
            'Cab_ToPlace': [this.EnquiryRequest.Cab_ToPlace, [Validators.required, validateField(new CustomValidationRules('Cab_ToPlace'), this.enquiryForm)]],
            'Trip_NumberOfDays': [this.EnquiryRequest.Trip_NumberOfDays, [Validators.required, validateField(new CustomValidationRules('Trip_NumberOfDays'), this.enquiryForm)]],
            'Trip_Places': [this.EnquiryRequest.Trip_Places, [Validators.required, validateField(new CustomValidationRules('Trip_Places'), this.enquiryForm)]],
            'Vehicle': [this.EnquiryRequest.Vehicle.ID, [Validators.required, validateField(new CustomValidationRules('Vehicle'), this.enquiryForm)]]

        });
    }

    ToggleService = function (requestType: string) {
        this.Submitted = false;
        if (requestType === ApplicationConstants.RequestType.CAB) {
            this.IsCabRequest = true;
        }
        else {
            this.IsCabRequest = false;
        }
        this.createForm();
    }

    ReturnValid = function (controlName: string) {
        var returnValue = '';
        if (controlName !== "") {
            if (this.enquiryForm.controls[controlName].errors !== null) {
                if (this.enquiryForm.controls[controlName].errors.message !== undefined) {
                    return this.enquiryForm.controls[controlName].errors.message;
                }
                else if (this.enquiryForm.controls[controlName].errors.required === true && this.Submitted) {
                    return this.ValidationMessages.Messages[controlName + '_Required'];
                }
                else {
                    '';
                }
            }
        }
    }



    SubmitEnquiryRequest = function (action: string) {
        if (action === ApplicationConstants.CustomerAction.SUBMIT) {
            this.Submitted = true;
            if (this.enquiryForm.valid) {
                this.EnquiryRequest = this.enquiryForm.value;
                this.EnquiryRequest.Customer = new Customer(this.EnquiryRequest.FullName, this.EnquiryRequest.PhoneNumber);
            }
        }
        else if (action === ApplicationConstants.CustomerAction.CLEAR) {
            this.createForm();
        }
        console.log(this.EnquiryRequest);
        return;
    }
}