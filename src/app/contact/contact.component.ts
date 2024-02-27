import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormsModule, ReactiveFormsModule, FormControl,AbstractControl } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  emailId: any = "payalkatekhaye5@gmail.com";
  public editorValue: string = '';    //ck editor
  emailForm!: FormGroup;     //declaring form group
  ApiResult: any;
  submitted = false;
  email!: AbstractControl;
  message!:AbstractControl;
  subject!:AbstractControl;
  // loginForm = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  // })

  constructor(
    private fb: FormBuilder, private mainService: MainService, private router: Router) { }

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      email: ['',[Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      Name: ['', Validators.required],
       subject: ['', Validators.required],
       message: ['', Validators.required]
    });
    this.email=this.emailForm.controls['email'];
    this.message=this.emailForm.controls['message'];
    this.subject=this.emailForm.controls['subject'];
  }
  get f() { return this.emailForm.controls; }

  Email_send() {
    debugger
    this.submitted = true;
    {
      // stop here if form is invalid
      // if (this.emailForm.invalid) {
      // /  return;
      // console.log(this.emailForm.value)
    }
    var name = this.emailForm.get("Name")!.value;
    var message = this.emailForm.get("message")!.value;
    var subject = this.emailForm.get("subject")!.value;
    var email = this.emailForm.get("email")!.value;
    var EmailBodyMsg = "<table ><thead><tr><th>payal katekhaye</th></tr></thead><tbody><tr><td>Name:</td><td>" + name + "</td></tr><tr><td>Email</td><td>" + email + "</td></tr><tr><td>Message:</td><td>" + message + "</td></tr><tr><td>Subject:</td><td>" + subject + "</td></tr></tbody></table>";
    var Moobj: any = {};
    Moobj.EmailSubject = "For Contact Us";
    Moobj.EmailTo = this.emailId;
    Moobj.PkSystemEmailSetting = 4;
    Moobj.message = EmailBodyMsg;
    this.mainService.emailMethod(Moobj).subscribe((value: any) => {
      debugger
      this.ApiResult = value;
      console.log(this.emailForm.value);
    });
    alert("Send Request Successfully")


  }

  loginUser() {
    console.warn(this.emailForm.value);
  }
}
