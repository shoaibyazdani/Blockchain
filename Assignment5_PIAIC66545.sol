pragma solidity ^0.8.0;

contract StudentEnrolment{
    
    address  payable private myAddress;
    
    enum Gender{Male, Female}
    enum Class{Onsite, Online}
    
    struct Student{
        string name;
        uint age;
        address addr;
        bool degree;
        Gender gender;
        string class;
        uint rollNumber;
    }
    uint public noOfStudents;
    
    mapping(uint => Student)studentData;
    
    function setMyAddress(address payable _myAddress)public{
        myAddress = _myAddress;
    }
    
    function enrollStudent(string memory _name, uint _age, address _address, bool _haveDegree, Gender _gender, string memory _class, uint _rollNumber)public payable{
        
        require(msg.value >= 2 ether);
       
        Student memory myStudent = Student(_name, _age, _address, _haveDegree, _gender, _class, _rollNumber);
        
        myAddress.transfer(msg.value);
        
        studentData[_rollNumber] = myStudent;
        noOfStudents++;
    }
    
    function getStudentData(uint _rollNumber)public view returns(string memory, uint, address, bool,Gender,string memory,uint){
        return(
            studentData[_rollNumber].name,
            studentData[_rollNumber].age,
            studentData[_rollNumber].addr,
            studentData[_rollNumber].degree,
            studentData[_rollNumber].gender,
            studentData[_rollNumber].class,
            studentData[_rollNumber].rollNumber
             );
    }
    
    function balance()public view returns(uint){
        return myAddress.balance;
    }

    function hasDegree(uint _rollNumber)public view returns(bool){
        return studentData[_rollNumber].degree;
    }
    
}