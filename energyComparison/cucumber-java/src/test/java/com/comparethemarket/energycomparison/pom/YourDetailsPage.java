package com.comparethemarket.energycomparison.pom;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class YourDetailsPage extends BasePage{
	
	private WebDriver driver;
	
	private final By fixedTariff = By.className("fixed-rate-1");
	private final By variableTariff = By.className("variable-bill-1");
	private final By allTariff = By.className("tariff-all");
	private final By monthlyDirectDebit = By.className("annual-1");
	private final By quarterlyDirectDebit = By.className("quarterly-1");
	private final By payOnReceiptBill = By.className("bill-1");
	private final By allPayment = By.className("payment-all");
	private final By email = By.id("Email");
	private final By termsTickBox = By.id("terms-label");
	private final By goToPrices = By.id("email-submit");
	private final By marketingPreference = By.cssSelector("div [for='marketingPreference'] span");
	
	public YourDetailsPage(WebDriver driver){
		super(driver);
		this.driver = driver;
	}
    
    //Select tariff
    public void selectTariff(String tariff){
    	By element = null;
    	tariff = tariff.toLowerCase();
    	switch(tariff){
    	case "fixed" :
    		element = fixedTariff;
    		break;
    	case "variable":
    		element = variableTariff;
    		break;
    	case "all":
    		element = allTariff;
    		break;
    	default :
    		Assert.fail("Unknown tariff");
    	}
    	
    	clickElement(element);	
    }
    
    //Select payment type
    public void selectPaymentType(String paymentType){
    	By element = null;
    	paymentType = paymentType.toLowerCase();
    	
    	switch(paymentType){
    	case "monthly direct debit":
    		element = monthlyDirectDebit;
    		break;
    	case "quarterly direct debit":
    		element = quarterlyDirectDebit;
    		break;
    	case "receipt bill":
    		element = payOnReceiptBill;
    		break;
    	case "all payment":
    		element = allPayment;
    		break;
    	default :
			Assert.fail("Unknown payment type");
    	}
    	
    	clickElement(element);	
    }
    
    //Set email id
    public void setEmail(String emailId){
    	setText(email,emailId);
    }
    
    //Tick terms and conditions
    public void tickTermsConditions(){
    	clickElement(termsTickBox);
    }
    
    //Click go to prices button
    public void clickGoToPrices(){
    	clickElement(goToPrices);
    }

	public void marketingPreference() {
		List<WebElement> elements = driver.findElements(marketingPreference);	
		elements.get(1).click();
	}
}
