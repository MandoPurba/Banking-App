var {category} = require('./category');
var customerList=[];

const addCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      // Write the Logic here
      const newCustomer = [CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category];

      const findCustomer = customerList.find(arr=>arr[0]==CustomerId)

      if (findCustomer === undefined) {
            customerList.push(newCustomer) 
      }
}

const updateCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      // Write the Logic here
      const newCustomer = [CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category];
      const findCustomer = customerList.find(arr=>arr[0]==CustomerId);
      for (let i = 0; i < findCustomer.length; i++) {
            findCustomer[i] = newCustomer[i]
      }

}

const getAllCustomers=()=>{
  // Write the Logic here
  const data = customerList.map(i => i);
  return data;

}

console.log(getAllCustomers());


module.exports={addCustomer,updateCustomer,getAllCustomers}