import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SigninService } from 'src/app/service/signin/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  accountName = '';
  password = '';

  constructor(
    private router: Router,
    private messageService: MessageService,
    private signinService: SigninService
  ) { }

  login() {
    this.signinService.
    signin(this.accountName, this.password)
      .subscribe({
        next: (res: any) => {
          localStorage.setItem('user', JSON.stringify(res));
          this.messageService.add({
            severity: 'success',
            summary: 'สำเร็จ',
            detail: 'เข้าสู่ระบบสำเร็จ'
          });
          let user = JSON.parse(localStorage.getItem('user')!);
          this.router.navigate(['/home']);
        },
        error: (err: any) => {
          this.messageService.add({
            severity: 'error',
            summary: 'ล้มเหลว',
            detail: err.error.error
          });
        }
      });
  }
}
