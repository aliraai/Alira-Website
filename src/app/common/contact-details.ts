export class ContactDetails {
     private mobile:String; 
     private address:String; 
     private email:String;
    constructor(){
        this.mobile = "+91 98900 77818";
        this.address = `
        204, 2nd floor, Nyati Eureka, \n
        Mundhwa-Kharadi Road, Kharadi, \n
        Pune - 411014
        Maharashtra
        India
        `;
        this.email = "hello@alira.ai";
    }
    public getMobile():String{
        return this.mobile;
    }
    public getAddress():String{
        return this.address;
    }
    public getEmail():String{
        return this.email;
    }
}
