pragma solidity ^0.8.4;

contract CryptoBank {
    
    uint256 public bankCapital;
    address payable owner;
    event  bankNotice(string);
    uint8 firstFive;
    mapping(address => uint256) accountBalances;
    address[] bonus;
    
    
    fallback() payable external {           //Anyone stupid enough to send ether, be my guest
        owner.transfer(msg.value);
    }
    
    receive() payable external {emit bankNotice("Some ethers received");}
    
    modifier isOwner (address _owner) {
        require(_owner == owner, "This must be exeucted by contract owner"); 
            _;
    }
   

    // #1
    constructor() payable {
       
        require (msg.value >= 50 ether, "Owner must send 50 ether to start the bank");
        owner = payable(msg.sender);
        bankCapital = msg.value;
        emit bankNotice("The bank started with required paidup capital of 50 or more ethers");
    }
    // #2
    function closeBank() payable public isOwner(msg.sender) {
        selfdestruct(owner);
        emit bankNotice("The bank is now closed");
    }
    // #3
    function openAccount() payable public {
        require(msg.value >= 5 ether, "You need to deposit 5 Ether to open an account");
        require(accountBalances[msg.sender] == 0, "You already have an account");
        accountBalances[msg.sender] = accountBalances[msg.sender] + msg.value;    // #4
         
        emit bankNotice("Bank Account successfully created");
        if (bonus.length < 5 && checkFirstFive(msg.sender)==true) {    
            bonus.push(msg.sender);
            accountBalances[msg.sender]+=1 ether;
            emit bankNotice("You got 1 Ether bonus being in first 5 customers");
            
            }
    }
    
    // #5
    function depositMoney(address _account) payable public {
        require(accountBalances[_account] > 0 ether, "You need to open an account first");
        require(msg.value > 0 ether, "You need to send some ether with transaction for deposit");
        accountBalances[_account]+=msg.value;
        emit bankNotice("Your balance has been updated.");
    }
    // #6
    function withdrawMoney(uint256 _amount) payable public {
        require(accountBalances[msg.sender] >= _amount, "Insufficient Balance for withdrawl");
        accountBalances[msg.sender]-=_amount;
        payable(msg.sender).transfer(_amount);
        emit bankNotice("Withdrawl Successful.Your balance has been updated.");
    }
       // #7
   function checkFirstFive (address _address) private view returns (bool pay){
       pay = true;
       for (uint8 i = 0; i < bonus.length; i++) {
           if (_address == bonus[i]) {
               pay = false;
               break;
           }
 
       }
       return pay;
   }
    // #8
    function checkBalance(address _address) public view returns (uint256 _balance) {
        return accountBalances[_address];
    }
   
   // #9
   function closeAccount() payable public {
        require(accountBalances[msg.sender] > 0, "Either you don't have account or it is already closed");
        payable(msg.sender).transfer(accountBalances[msg.sender]);
        accountBalances[msg.sender]=0;
        emit bankNotice("Your balance has been transferred back and account is now closed.");
       
   }
   
}