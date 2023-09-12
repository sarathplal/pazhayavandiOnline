import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { ToasterService } from '../services/toaster.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = this.formBuilder.group({

    email: ['', [Validators.required, Validators.minLength(4), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
    lastName: ['', [Validators.required, Validators.minLength(1), Validators.pattern('[a-zA-Z ]*')]],
    passWord: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z0-9]*')]]

  })

  constructor(private formBuilder: FormBuilder, private api: ApiService, private route: Router, private toster: ToasterService) {

  }

  register() {
    if (this.registerForm.valid) {

      let email = this.registerForm.value.email
      let passWord = this.registerForm.value.passWord
      let firstName = this.registerForm.value.firstName
      let lastname = this.registerForm.value.lastName

      this.api.register(email, passWord, firstName, lastname).subscribe({
        next: (res: any) => {
          alert(res)
          this.toster.showSuccess(`${res}`, "Success")
          setTimeout(() => {
            this.route.navigateByUrl("login")

          }, 2000)
        }, error: (err) => {
          this.toster.showWarning(`${err}`, "Warning")
          console.log(err);
        }
      })
    } else {
      this.toster.showError("Invalid Form", "Error")
      alert("invalid form")
    }
  }

}
