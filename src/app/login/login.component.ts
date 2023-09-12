import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from '../services/toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(4), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    passWord: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z0-9]*')]],
  })

  constructor(private api: ApiService, private fb: FormBuilder, private transit: Router, private toster: ToasterService) {
  }

  login() {
    console.log();

    console.log(this.loginForm.value.email, this.loginForm.value.passWord);

    if (this.loginForm.valid) {

      const email = this.loginForm.value.email
      const password = this.loginForm.value.passWord


      this.api.login(email, password).subscribe({
        next: (response: any) => {
          const preuser = response

          localStorage.setItem("firstName", preuser.firstName)
          localStorage.setItem("lastName", preuser.lastName)
          localStorage.setItem("email", preuser.email)
          this.toster.showSuccess(`${preuser.firstName} logged in successfully`, 'Success')

          setTimeout(() => { this.transit.navigateByUrl(`vehicles`) }, 2000)
        },
        error: (err: any) => {
          this.toster.showWarning(`please enter valid mail id or password`, "Error")
          alert("enter valid username and password")
        }
      })

    } else {
      this.toster.showError("Invalid Form", "Error")
      alert("Invalid Form")
    }



  }

}
