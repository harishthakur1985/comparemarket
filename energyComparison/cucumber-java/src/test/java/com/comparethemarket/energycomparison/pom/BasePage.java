package com.comparethemarket.energycomparison.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BasePage extends WebPageHelper{
	
	private static final int WAIT_TIME_OUT = 60;
	
	private WebDriver driver;
	private WebDriverWait wait;
	
	private final By titleText = By.className("main-heading");
	
	public BasePage(WebDriver driver){
		super(driver);
		this.driver = driver;
	}
	
	public void checkTitle(String title){
		waitForJStoLoad();
    	wait = new WebDriverWait(driver, WAIT_TIME_OUT);
    	wait.until(ExpectedConditions.textToBe(titleText, title));
	}
	
	public void clickElement(By elementBy) {
		wait = new WebDriverWait(driver, WAIT_TIME_OUT);
		wait.until(ExpectedConditions.elementToBeClickable(elementBy));
		driver.findElement(elementBy).click();
	}
	
	public void setText(By elementBy, String postCode) {
		wait = new WebDriverWait(driver, WAIT_TIME_OUT);
		wait.until(ExpectedConditions.visibilityOfElementLocated(elementBy));
		driver.findElement(elementBy).sendKeys(postCode);
	}
    
	public String getText(By elementBy) {
		wait = new WebDriverWait(driver, WAIT_TIME_OUT);
		wait.until(ExpectedConditions.visibilityOfElementLocated(elementBy));
		return driver.findElement(elementBy).getText();
	}

}
