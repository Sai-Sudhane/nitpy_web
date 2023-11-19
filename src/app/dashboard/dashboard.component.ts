import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // Import your DataService

interface UserData {
  name: string;
  roll_no: string;
}
interface Department{
  department_name: string;
  subjects:[string];
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
  
  userData: UserData = {
    name: '',
    roll_no: '',
    
  };

  department: Department={
    department_name: '',
    subjects:['']
  }

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Retrieve the data from the DataService
    const jsonDataOrString1 = this.dataService.getSharedData1();
    const jsonDataOrString2 = this.dataService.getSharedData2();

    // Check if jsonDataOrString1 is a JSON string
   if (typeof jsonDataOrString1 === 'string') {
      try {
        // Attempt to parse the JSON string into an object of the expected type
        const parsedData = JSON.parse(jsonDataOrString1) as UserData;
        


        // Assign the parsed data to userData
        this.userData = parsedData;

        // You can log or process the shared data here
        console.log('Parsed Data (from JSON string):', parsedData);
      } catch (error) {
        console.error('Error parsing JSON data:', error);
      }
    } else if (typeof jsonDataOrString1 === 'object' && jsonDataOrString1 !== null) {
      // jsonDataOrString1 is already an object
      // Check if it matches the expected structure
      if (
        'name' in jsonDataOrString1 &&
        'roll_no' in jsonDataOrString1 &&
        'department' in jsonDataOrString1
      ) {
        // Assign the object to userData
        this.userData = jsonDataOrString1;

        // You can log or process the shared data here
        console.log('Shared Data (direct object):', jsonDataOrString1);
      } else {
        console.error('Invalid JSON object structure:', jsonDataOrString1);
      }
    } else {
      console.error('Invalid JSON data:', jsonDataOrString1);
    }

    if (typeof jsonDataOrString2 === 'string') {
      try {
        // Attempt to parse the JSON string into an object of the expected type
        const parsedData1 = JSON.parse(jsonDataOrString2) as Department;
        
    
    
        // Assign the parsed data to userData
        this.department = parsedData1;
    
        // You can log or process the shared data here
        console.log('Parsed Data (from JSON string):', parsedData1);
      } catch (error) {
        console.error('Error parsing JSON data:', error);
      }
    } else if (typeof jsonDataOrString2 === 'object' && jsonDataOrString2 !== null) {
      // jsonDataOrString1 is already an object
      // Check if it matches the expected structure
      if (
        'department_name' in jsonDataOrString2 &&
        'subjects' in jsonDataOrString2
        
      ) {
        // Assign the object to userData
        this.department = jsonDataOrString2;
    
        // You can log or process the shared data here
        console.log('Shared Data (direct object):', jsonDataOrString2);
      } else {
        console.error('Invalid JSON object structure:', jsonDataOrString2);
      }
    } else {
      console.error('Invalid JSON data:', jsonDataOrString1);
    }
  }
}



