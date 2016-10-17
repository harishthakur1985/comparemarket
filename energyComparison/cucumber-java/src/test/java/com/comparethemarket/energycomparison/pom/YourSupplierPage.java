package com.comparethemarket.energycomparison.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class YourSupplierPage extends BasePage{

	private static final int WAIT_TIME_OUT = 60;
	
	private WebDriver driver;
	private WebDriverWait wait;
	
	private final By yourPostCodeTextBox = By.name("your-postcode");
	private final By findPostCode = By.id("find-postcode");
	private final By postCodeSet = By.cssSelector("div .address-container > span");
	private final By noBill = By.className("have-bill-no");
	private final By energyGasElectricity = By.className("energy-gas-electricity");
	private final By energyElectricity = By.className("energy-electricity");
	private final By energyGas = By.className("energy-gas");
	private final By next = By.id("goto-your-supplier-details");
	private final By unknownSupplier = By.cssSelector(".gas-supplier-dont-know span");
	
	public YourSupplierPage(WebDriver driver){
		super(driver);
		this.driver = driver;
	}
	
	// Set postcode
	public void setYourPostCode(String postCode){
		setText(yourPostCodeTextBox,postCode);
	}
	
    //Click on Find postcode button
    public void clickFindPostCode(){
    	clickElement(findPostCode);
    	wait = new WebDriverWait(driver, WAIT_TIME_OUT);
    	wait.until(ExpectedConditions.visibilityOfElementLocated(postCodeSet));
    }
    
    //Get set postcode
    public String getPostCode(){
    	return getText(postCodeSet);
    }
    
    public void clickNext(){
    	clickElement(next);
    }

	public void clickNoBill() {
		clickElement(noBill);
	}

	public void selectEnergyComparison(String energy) {
		energy = energy.toLowerCase();
		switch(energy) {
		case "gas":
			clickElement(energyGas);
			break;
		case "electricity":
			clickElement(energyElectricity);
			break;
		default :
			clickElement(energyGasElectricity);
		}
	}

	public void tickUnknownSupplier() {
		clickElement(unknownSupplier);
	}
}
