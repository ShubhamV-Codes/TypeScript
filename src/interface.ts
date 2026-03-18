interface User{
    firstName:string;
    lastName:string;
    address :{
        pincode:number;
        city:string;
        country:string;
    }
}

function willu(users:User[]):User[]{
    return users;
}

const users : User[] = [{
    firstName:"shubham",
    lastName:"vishwakarma",
    address:{
        pincode:230402,
        city:"Pratapgarh",
        country:"India"
    }
},
{
    firstName:"Krish",
    lastName:"Patel",
    address:{
        pincode:222022,
        city:"Mirzapur",
        country:"India"
    }
}]

 const result = willu(users);
 result.forEach(people=>{
    console.log(`Hi, This is ${people.firstName} ${people.lastName} and my HomeTown is ${people.address.city}. `);
 });
 