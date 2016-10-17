package com.comparethemarket.energycomparison.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class YourEnergyDetailsPage extends BasePage{
	
	private final By electricityUsage = By.id("electricity-usage");
	private final By gasUsage = By.id("gas-usage");
	private final By gasCurrentSpend = By.id("gas-current-spend");
	private final By next = By.id("goto-your-energy");
	private final By errorMessage = By.id("get-started-view-status");
	
	
	public YourEnergyDetailsPage(WebDriver driver){
		super(driver);
	}
	    
    //Set electricity usage
    public void setElectricityUsage(String usage){
    	setText(electricityUsage,usage);
    }
    
    //Set gas usage
    public void setGasUsage(String usage){
    	setText(gasUsage,usage);
    }
    
    public void setGasCurrentSpend(String spend){
    	setText(gasCurrentSpend,spend);
    }
    
    public void setElectricityCurrentSpend(String spend){
    	setText(electricityUsage,spend);
    }
    
    public void clickNext(){
    	clickElement(next);
    }

	public String getErrorMessage() {
		waitForJStoLoad();
		return getText(errorMessage);
	}

	public boolean fieldHighlightedRed() {
		return getBorderHexValue(electricityUsage).equals("#FF5025");
	}

}
