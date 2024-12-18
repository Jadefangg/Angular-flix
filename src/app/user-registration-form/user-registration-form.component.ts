// src/app/user-registration-form/user-registration-form.component.ts
import { Component, OnInit, Input } from '@angular/core';

// You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// This import brings in the API calls we created in 6.2
import { FetchApiDataService } from '../fetch-api-data.service';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({                                                                    //Because of the selector the form component can be used in this HTML file and elsewhere, as follows:
//<app-user-registration-form>...</app-user-registration-form>
  selector: 'app-user-registration-form',                                       //this allows the component to be called in the html file and other components
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss'] 
})
export class UserRegistrationFormComponent implements OnInit {                  //This class will hold the data the user inputs in the form

  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };  //decorators that allow data to be passed into the component from the parent module

constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar) { }                                             //This shows the form component that it will be using the FetchApiDataService and MatSnackBar classes

ngOnInit(): void {
}

// This is the function responsible for sending the form inputs to the backend

registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe((result) => {
// Logic for a successful user registration goes here! (To be implemented)

     this.dialogRef.close();                                                       // This will close the modal on success!
     console.log(result); 
     this.snackBar.open(result, 'OK', {                                             //This will open a snackbar to show the user the registration was successful
        duration: 2500                                                              //OK is the label for the button the user will press. The snackbar will be displayed for 2 seconds
     });
    }, (result) => {
      console.log(result);
      this.snackBar.open(result, 'OK', {                                            //this shows the user the registration was unsuccessful
        duration: 3000
      });
    });
  }

  }