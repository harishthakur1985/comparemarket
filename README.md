# comparemarket: Energy flow tests

Getting Started

Open the project comparethemarket-master/energyComparison/cucumber-java using eclipse.


Prerequisities

-Eclipse

-Mozilla firefox or Chrome browser

-Java JDK latest version


Installing

Please install the above softwares if not already installed.


Runnning the tests

-To run test open the energyComparison\cucumber-java\src\test\java\com\comparethemarket\energycomparison\executor\RunBddTest.java file in eclipse 
 and right click run jUnit test.

-Result report is generated on the following path

	path : comparethemarket-master/energyComparison/target/cucumber-html-report/cucumber-pretty/index.html

-The tests will be run in Firefox mozilla by default to run in chrome browser change the following
	1) Open file energyComparison\cucumber-java\src\test\java\com\comparethemarket\energycomparison\stepdefs\BrowserDriver.java
	2) Comment line number 25 using // and uncomment line number 27-28 by removing //.
	3) And rerun the tests.
	
  
Tests

-Feature file is at energyComparison\cucumber-java\src\test\resources\features\EnergyComparisonFlow.feature

-Test1: It is to cover end to end flow with minimum user inputs and using all defaults selection.

        Gas & Electricity > With Bill > Same supplier > Fixed tariff > monthly direct debit
	
-Test2: To check the Gas only flow with different combination of payment and communication

        Gas > No Bill > unknown supplier > variable tariff > quaterly direct debit > marketing preferences
	
-Test3: To check mandatory field are validated if any input is not provided and the missing field is highlighted with correctly
