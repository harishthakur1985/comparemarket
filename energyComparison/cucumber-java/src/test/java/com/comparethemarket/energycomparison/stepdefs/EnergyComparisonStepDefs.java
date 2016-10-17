package com.comparethemarket.energycomparison.stepdefs;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import com.comparethemarket.energycomparison.pom.YourDetailsPage;
import com.comparethemarket.energycomparison.pom.YourEnergyDetailsPage;
import com.comparethemarket.energycomparison.pom.YourResultPage;
import com.comparethemarket.energycomparison.pom.YourSupplierPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EnergyComparisonStepDefs {

    private static final String COMPARE_THE_MARKET_TEST_URL = "https://energy.comparethemarket.com/energy/v2/?AFFCLIE=TST";
	private WebDriver driver;
    private YourSupplierPage yourSupplierPage;
    private YourEnergyDetailsPage yourEnergyDetailsPage;
    private YourDetailsPage yourDetailsPage;
    private YourResultPage yourResultPage;
    
    public EnergyComparisonStepDefs(){
    	this.driver = BrowserDriver.driver;
    	yourSupplierPage = new YourSupplierPage(driver);
    	yourEnergyDetailsPage = new YourEnergyDetailsPage(driver);
    	yourDetailsPage = new YourDetailsPage(driver);
    	yourResultPage = new YourResultPage(driver);
    }
      
	@Given("^I navigate to compare the market$")
	public void i_navigate_to_compare_the_market(){
		driver.get(COMPARE_THE_MARKET_TEST_URL);
	}
	
	@Given("^I am on ([^\"]*) page$")
	public void i_am_on_page(String page) {
		page = page.toLowerCase();
		switch(page) {
		//Verify your supplier page title
		case "supplier details":
			yourSupplierPage.checkTitle("Your Supplier");
			break;
		//Verify your energy page title
		case "energy details":
			yourEnergyDetailsPage.checkTitle("Your Energy");
			break;
		//Verify your details page title
		case "personal details":
			yourDetailsPage.checkTitle( "Your Preferences");
			break;
		//Verify prices page title
		case "prices result":
			yourResultPage.checkTitle("We’ve found you");
			break;
		default :
			Assert.fail("Page is not implemented");
		}
	}
	
	@When("^I add the postcode ([^\"]*)$")
	public void i_add_the_postcode(String postcode){
		//Set postcode
		yourSupplierPage.setYourPostCode(postcode);
		yourSupplierPage.clickFindPostCode();
	}
	
	@Then("^the postcode should be set$")
	public void the_postcode_should_be_set() {
		//Verify postcode set
		Assert.assertTrue(yourSupplierPage.getPostCode().equals("PE2 6YS"));
	}
	

	@When("^I click next to go to energy details$")
	public void i_click_next_to_go_to_energy_details() {
		yourSupplierPage.clickNext();
	}

	@When("^I click on next to go to personal details$")
	public void i_click_on_next_to_go_to_personal_details() {
		yourEnergyDetailsPage.clickNext();
	}

	@Then("^(electricity|gas) usage is ([^\"]*)$")
	public void energy_usage_is(String energy,String usage){
		if (energy.equals("electricity")) 
			yourEnergyDetailsPage.setElectricityUsage(usage);
		else if(energy.equals("gas"))
			yourEnergyDetailsPage.setGasUsage(usage);	
	}
	
	@Then("^(electricity|gas) current spend is ([^\"]*)$")
	public void energy_current_spend_is(String energy,String spend){
		if (energy.equals("electricity")) 
			yourEnergyDetailsPage.setElectricityCurrentSpend(spend);
		else if(energy.equals("gas"))
			yourEnergyDetailsPage.setGasCurrentSpend(spend);	
	}
	
	@Then("^I select tariff as ([^\"]*)$")
	public void i_select_tariff_as(String tariff) {
		yourDetailsPage.selectTariff(tariff);
	}

	@Then("^I select payment type ([^\"]*)$")
	public void i_select_payment_type(String paymentType) {
		yourDetailsPage.selectPaymentType(paymentType);
	}

	@Then("^I enter my email ([^\"]*)$")
	public void i_enter_my_email_id(String emailId) {
		yourDetailsPage.setEmail(emailId);
	}

	@Then("^I tick the box of terms and condition$")
	public void i_tick_the_box_of_terms_and_condition() {
		yourDetailsPage.tickTermsConditions();
	}

	@Then("^I click on Go to prices$")
	public void i_click_on_Go_to_prices() {
		yourDetailsPage.clickGoToPrices();
	}

	@Then("^error message should appear \"([^\"]*)\"$")
	public void error_message_should_appear(String errorMessage){
		Assert.assertTrue("Unexpected error message: "+yourEnergyDetailsPage.getErrorMessage(), yourEnergyDetailsPage.getErrorMessage().contains(errorMessage));
	}
	
	@Given("^I have no bill$")
	public void i_have_no_bill(){
	    yourSupplierPage.clickNoBill();
	}

	@Given("^I want ([^\"]*) energy comparison$")
	public void i_want_only_Gas_energy_comparison(String energy) {
	    yourSupplierPage.selectEnergyComparison(energy);
	}

	@Given("^I do not know current supplier$")
	public void i_don_t_know_current_supplier() {
	    yourSupplierPage.tickUnknownSupplier();
	}

	@Given("^I agree to receive marketing communication$")
	public void i_agree_to_receive_communication() {
	    yourDetailsPage.marketingPreference();
	}

	@Then("^required field is highlighted with red outline$")
	public void required_field_is_highlighted_with_red_outline() {
		Assert.assertTrue("Required field is not highlighted in Red.",yourEnergyDetailsPage.fieldHighlightedRed());
	}
}
