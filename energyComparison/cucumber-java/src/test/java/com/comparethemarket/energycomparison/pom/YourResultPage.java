package com.comparethemarket.energycomparison.pom;

import java.util.regex.Pattern;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class YourResultPage extends BasePage {
	
	private static final int WAIT_TIME_OUT = 60;
	
	private WebDriver driver;
	
	private final By titleText = By.cssSelector(".results-title p");
	
	public YourResultPage(WebDriver driver){
		super(driver);
		this.driver = driver;
	}
	
	//Verify title text for Result page
	@Override
	public void checkTitle(String title){
		Pattern titlePattern = Pattern.compile(title);
		waitForJStoLoad();
    	WebDriverWait wait = new WebDriverWait(driver, WAIT_TIME_OUT);
    	wait.until(ExpectedConditions.textMatches(titleText,titlePattern));
	}
}
