import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm, FormControl, FormArray } from '@angular/forms'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-materialangular-reactiveform',
  templateUrl: './materialangular-reactiveform.component.html',
  styleUrls: ['./materialangular-reactiveform.component.css']
})
export class MaterialangularReactiveformComponent  {

  forma: FormGroup;
  area= ['it', 'rh']

  usuarios = [];

  usuario: any = {

    nombrecompleto: {
      nombre: "asinu",
      apellidop: "garcia",
      apellidom: "krinis",
    },
    rfc: "GAKA870814A06",
      username: "asik3",
      celular: "1324231232",
      correo: "asinug@hotmail.com",
      privacidad: true
  }

  constructor() {

    console.log(this.usuario);
    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        'apellidop': new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        'apellidom': new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
      }),
      'rfc': new FormControl('', [
        Validators.required,
        
      ]),
      'celular': new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]),
      'correo': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'privacidad': new FormControl('', [
      ]),
      'username': new FormControl('', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[0-9])[a-z0-9]+$")]),
    });

    // this.forma.setValue( this.usuario );
    this.forma.controls['username'].valueChanges
      .subscribe(data => {
        // console.log(data);
      })
    this.forma.controls['username'].statusChanges
      .subscribe(data => {
        // console.log(data);
      })
  }



  existeUsuario(control: FormControl): Promise<any> | Observable<any> {
    let promesa = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === "strider") {
            resolve({ existe: true })
          } else {
            resolve(null)
          }
        }, 3000)
      }
    )
    return promesa;
  }

  // On Change evento de Privacidad 
  onChange(event:any)  
  {  
    if (event.checked == true) {  
      this.usuario.Privacidad = 1;  
    } else {  
      this.usuario.privacidad = 0;  
    }  
  }  
  
  

  guardarCambios() {
    
    this.usuarios.push(this.forma.value);
   


    
    // this.forma.reset(
    // {
    //   nombrecompleto:{
    //     nombre: "",
    //    apellidop: "",
    //      apellidom: ""  
    //  },
    //     rfc: "",
    //     username: "",
    //     celular: "",
    //     correo:"",
    //     privacidad: 0
    //  });
  }


  }

