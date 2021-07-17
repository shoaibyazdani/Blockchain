pragma solidity ^0.8.0;


//STEP 1:

contract ParentVehicle {
    
    function start() public pure returns(string memory){
        string memory A = "The Vehicle has just started";
        return A;
    }
    
    function accelerate() public pure returns(string memory){
        string memory B = "The Vehicle has just Accelerated";
        return B;
    }
    
    function stop() public pure returns(string memory){
        string memory C = "The Vehicle has just Stopped";
        return C;
    }
    
    function service() public pure virtual returns(string memory){
        string memory D = "The Vehicle is being serviced";
        return D;
    }
}

//STEP 2_ child contract inherits the parent contract and override the service method.

contract cars is ParentVehicle {
   
    function service() public pure override returns(string memory){
        string memory A = "The car is being serviced";
        return A;
    }
}

contract Truck is ParentVehicle {
    
    function service() public pure override returns(string memory){
       string memory B = "The truck is being serviced";
       return B;
    }
}

contract MotorCycle is ParentVehicle {
    
    function service() public pure override returns(string memory){
        string memory C = "The MotorCycle is being serviced";
        return C;
    }
}

//STEP 3_ inherits the smart contract as in step 2 and calls the service method.

contract AltoMehran is cars {
    
}


contract Hino is Truck {
    
}

contract Yamaha is MotorCycle {
    
}

// STEP 4_taking the address of deployed 

contract ServiceStation1 is cars {

    function VehicleService(address add) public pure returns(string memory){
    AltoMehran a = AltoMehran(add);
    return a.service();
    }
}

contract ServiceStation2 is Truck {
    
    function VehicleService(address add) public pure returns(string memory){
    Hino b = Hino(add);
    return b.service();
    }
}

contract ServiceStation3 is MotorCycle {
    
    function VehicleService(address add) public pure returns(string memory){
    Yamaha c = Yamaha(add);
    return c.service();
    }
}