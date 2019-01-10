<?php

class BankAccount implements IfaceBankAccount
{

    private $balance = null;

    public function __construct(Money $openingBalance)
    {
        $this->balance = $openingBalance;
    }

    public function balance()
    {
        return $this->balance;
    }

    public function deposit(Money $amount)
    {
        //implement this method
    	//$newamount=new Money();
    	if($amount->value()!=0)
    	{
    	$this->balance=new Money($this->balance->value() + $amount->value());	
    	}
    	else
    	{
    		throw new Exception("Please Deposit Amount Above 0");
    	}
    	

    }

    public function withdraw(Money $amount)
    {
    	 if($this->balance->value() < $amount->value())
    	 {
    	 	  throw new Exception("Withdrawl amount larger than balance");
    	 } 
        else
        {
 			$this->balance = new Money($this->balance->value() - $amount->value());
        }
           

    //	$this->balance=new Money($this->balance->value() - $amount->value());
        //implement this method
    }
    public function transfer(Money $amount, BankAccount $account)
    {
    	 $debitaccount			=		$this->balance->value();
    	 $creditaccount			=		$amount->value();
    	 $balanceaccount		=		$account->balance->value();
    	if($creditaccount>$balanceaccount)
    	{
    		$this->balance=new Money($debitaccount - $creditaccount);
    	    $account->balance=new Money($balanceaccount + $creditaccount);
    	}
    	else
    	{
    		throw new Exception("Withdrawl amount larger than balance");
    	}
    	
    	// $this->balance      = new Money($this->balance->value() - $amount->value());
      // $account->balance   = new Money($account->balance->value() + $amount->value());



    }
}