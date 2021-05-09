import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
  
  //add alert service to constructor and object name is alert
  //usage snippet for alert
    // this.alert.saveALert()
    //   .then((selection) => {
    //     if (selection.value) {
    //      ..yes
    //     }
    //     else {
    //       ..no
    //     }
    // });

    //usage snippet for toast
    // this.alert.successToast(title,text);
    

  saveALert(){    
    return swal.fire({
      title: "Confirm",
      text: "Please confirm do you want to save the information !",
      confirmButtonText: 'Yes',
      cancelButtonText: "No",
      showCancelButton: true,
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
      icon:'info'
    })
  }
  updateAlert(){    
    return swal.fire({
      title: "Confirm",
      text: "Please confirm do you want to update the information !",
      confirmButtonText: 'Yes',
      cancelButtonText: "No",
      showCancelButton: true,
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
      icon:'info'
    })
  }
  deleteAlert(options){
    return swal.fire({
      title: "Confirm",
      text: "Please confirm do you want to delete the information !",
      confirmButtonText: 'Yes',
      cancelButtonText: "No",
      showCancelButton: true,
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
      icon:'warning'
    })
  }
  customAlert(options){
    return swal.fire(options)
  }

  successToast(toastTitle:string='Success !',toastText:string='Complete successfully !')
  {
    swal.fire({ toast: true, position: 'top-right', showConfirmButton: false, timer: 3000, title: toastTitle, text: toastText, icon: 'success', });

  }

  errorToast(toastTitle:string='Error !',toastText:string='Somthing went wrong !'){
    swal.fire({ toast: true, position: 'top-right', showConfirmButton: false, timer: 3000, title: toastTitle, text: toastText, icon: 'error', });

  }

  infoToast(toastTitle:string='Information !',toastText:string='For your information !'){
    swal.fire({ toast: true, position: 'top-right', showConfirmButton: false, timer: 3000, title: toastTitle, text: toastText, icon: 'info', });

  }

  warningToast(toastTitle:string='Warning !',toastText:string='You have warning !'){
    swal.fire({ toast: true, position: 'top-right', showConfirmButton: false, timer: 3000, title: toastTitle, text: toastText, icon: 'warning', });

  }
}
