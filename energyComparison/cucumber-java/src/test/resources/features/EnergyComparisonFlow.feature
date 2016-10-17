Feature: Energy comparison on comparethemarket website
		I want to go the comparethemarket website 
		and should get quote/prices from different energy provider
		
Background:
	Given I navigate to compare the market
	And I am on Supplier details page
	And I add the postcode PE2 6YS

Scenario: Minimum required fields to be filled by user to complete journey for energy quotes/prices
	Given I click next to go to energy details
	And I am on Energy details page
	And electricity usage is 800
	And I click on next to go to personal details
	And gas usage is 700
	And I click on next to go to personal details
	And I am on personal details page
	And I select tariff as Fixed
	And I select payment type monthly direct debit
	And I enter my email abc@de.com
	And I tick the box of terms and condition
	When I click on Go to prices
	Then I am on prices result page

Scenario: Gas energy comparison with No bill, unknown supplier, variable tariff and quarterly direct debit
	Given I have no bill
	And I want Gas energy comparison
	And I do not know current supplier
	And I click next to go to energy details
	And I am on Energy details page
	And gas current spend is 100
	And I click on next to go to personal details
	And I am on personal details page
	And I select tariff as Variable
	And I select payment type quarterly direct debit
	And I enter my email abc@de.com
	And I agree to receive marketing communication
	And I tick the box of terms and condition
	When I click on Go to prices
	Then I am on prices result page

Scenario: Check validations error on Your energy page
	Given I click next to go to energy details
	And I am on Energy details page
	When I click on next to go to personal details
	Then error message should appear "Complete this section to continue 1 question remaining"
	And I am on Energy details page
	And required field is highlighted with red outline
