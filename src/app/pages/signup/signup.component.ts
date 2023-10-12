import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SigninService } from 'src/app/service/signin/signin.service';
import { SignupService } from 'src/app/service/signup/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  formData: FormGroup = new FormGroup({
    custName: new FormControl('', [Validators.required]),
    custSurname: new FormControl('', [Validators.required]),
    custEmail: new FormControl('', [Validators.required]),
    custPhone: new FormControl('', [Validators.required]),
    accountName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private messageService: MessageService,
    private signupService: SignupService
  ) { }

  signup() {
    let form = this.formData;
    if (form.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'ล้มเหลว',
        detail: 'กรุณากรอกข้อมูลให้ครบถ้วน'
      });
      return;
    }

    this.signupService
      .signup(form.value)
      .subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'สำเร็จ',
          detail: 'สมัครสมาชิกสำเร็จ'
        });
        form.reset();
        this.router.navigateByUrl('/signin');
      });
  }
}
