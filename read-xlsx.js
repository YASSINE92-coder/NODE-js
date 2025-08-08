const xlsx = require('xlsx');

// Load the workbook
const workbook = xlsx.readFile('employee_data_.xlsx');

// Get the first sheet name
const sheetName = workbook.SheetNames[0];

// Get the worksheet
const worksheet = workbook.Sheets[sheetName];

// Convert the worksheet to JSON
const data = xlsx.utils.sheet_to_json(worksheet);
//console.log(data);

function BonusAmount(data) {
    return data.map((item) => {
        let bonus = 0;
        let Percentage = 0;
        if (item.AnnualSalary < 50000) {
          bonus = item.AnnualSalary * 0.05;
          Percentage= 5;
        } else if (item.AnnualSalary >= 50000 && item.AnnualSalary < 100000) {
          bonus = item.AnnualSalary * 0.07;
          Percentage= 7;
        } else  {
          bonus = item.AnnualSalary * 0.10;
          Percentage= 10;
        }
  return {
    ...item,
    BonusAmount: bonus,
    BonusPercentage: Percentage
  };
});
}

 // console.log(BonusAmount(data));
 
  const updatedData=BonusAmount(data)
  const newworksheet = updatedData ? xlsx.utils.json_to_sheet(updatedData) : (() => { throw new Error("Invalid or empty data") })();

  // 2. Create a new workbook and append the worksheet
  const newworkbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(newworkbook, newworksheet, 'Sheet1');
  
  // 3. Write to a file
  xlsx.writeFile(newworkbook, 'EmployeeBonus.xlsx');

  console.log('Excel file created: EmployeeBonus.xlsx');
 
//events: 
/*
const EventEmitter = require('events');

// Create an event emitter instance
const eventEmitter = new EventEmitter();

// Define an event handler function
const eventHandler = (data) => {
  console.log('Event occurred:', data);
};

// Register the event handler for the custom event
eventEmitter.on('customEvent', eventHandler);

// Simulate an event occurrence
eventEmitter.emit('customEvent', 'Event data');
//console.log(eventHandler(data)) 
  */

