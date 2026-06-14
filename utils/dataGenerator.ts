export function generateUser(){
    const num=Date.now()
    return{
        firstName:'Shruti',
        lastName:'Jaiswal',
        address:'ShastriNagar',
        city:'Bhilwara',
        state:'Rajasthan',
        zipCode:'311001',
        phone:'123456789',
        ssn:String(num).slice(-9),
        username: 'user' +num,
        password:'Test@123'
    }
}