import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../product.model';
import { ProductRepository } from '../repository.model';

@Component({
  selector: 'app',
  templateUrl: "product.component.html",
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // email="email@sadikturan.com";


  model:ProductRepository=new ProductRepository();//artık productrepository üzerinden metodlara ulaşabiliriz

  newProduct:Product=new Product();

  get jsonProduct(){
    return JSON.stringify(this.newProduct);
  }

  addProduct(p:Product){
    console.log("New product: "+this.jsonProduct);
  }

  log(x){
    console.log(x);
  }

  getValidationErrors(state:any,key:string){
    let ctrlName:string=state.name ||key;
    let messages:String[]=[];
    if(state.errors){
      for(let errorName in state.errors){
        switch(errorName){
          case "required":messages.push(`You Must Enter A ${ctrlName}`);
          break;
          case "minlength":messages.push(`Min. 3 character for ${ctrlName}`);
          break;
          case "pattern":messages.push(`${ctrlName} contains illegal characters`);
          break;
        }
      }
    }
    return messages;
  }

  formSubmitted:Boolean=false;

  submitForm(form:NgForm){
    console.log(form);
    this.formSubmitted=true;
    if(form.valid){
      this.addProduct(this.newProduct);
      this.newProduct=new Product();
      form.reset();
      this.formSubmitted=false;
    }
  }

  getFormValidationErrors(form:NgForm):String[]{
    let messages:String[]=[];
    Object.keys(form.controls).forEach(k=>{
      console.log(k)//namei verir
      console.log(form.controls[k]);//formcontrolleri verir
      this.getValidationErrors(form.controls[k],k).forEach(message=>messages.push(message));
    })
    return messages;
  }










  // productName: string= this.model.getProductsById(1).name;

  // addProduct(){
  //   this.model.addProduct(new Product(5,"samsung s9","iyi telefon","5.jpg",5000)
  //   )
  // }

  // deleteProduct(product:Product)
  // {
  //   this.model.deleteProduct(product);
  // }

  // product:Product=this.model.getProductsById(1);
  // disabled=false;

  // getClasses(id: number): string {
  //   let product = this.model.getProductsById(id);
  //   return (product.price <= 1000 ? "bg-info": "bg-secondary")+ " m-2 p-2 text-white";
  // }

  // getClassMap(id:number):Object{
  //   let product = this.model.getProductsById(id);
  //   return{
  //     "bg-info":product.price <= 1000,
  //     "bg-secondary":product.price>1000,
  //     "text-center text-white":product.name=="samsung s6"
  //   }
  // }

  // // color:string="red";
  // color:string=this.model.getProductsById(1).price <=1000 ? "green" : "red";
  // fontSize:string="25px";

  // getStyles(id:number){
  //   let product = this.model.getProductsById(id);
  //   return {
  //     fontSize:"25px",
  //     color:product.price <=1000 ? "green" : "red"
  //   }
  // }

  // onSubmit($event){
  //   $event.stopPropagation();
  //   console.log($event);
  // }

  // onDivClicked(){
  //   console.log('div was clicked');
  // }

  // onKeyUp(value){
  //   // if($event.keyCode===13){
  //   //   console.log('Enter was pressed');
  //   // }
  //   // console.log($event.target.value);
  //   console.log(value)
  // }

  // onKeyUp(){
  //   console.log(this.email);
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
