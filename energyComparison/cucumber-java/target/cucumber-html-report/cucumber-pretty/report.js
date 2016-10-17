$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/EnergyComparisonFlow.feature");
formatter.feature({
  "line": 1,
  "name": "Energy comparison on comparethemarket website",
  "description": "I want to go the comparethemarket website \r\nand should get quote/prices from different energy provider",
  "id": "energy-comparison-on-comparethemarket-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5924226670,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I navigate to compare the market",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I am on Supplier details page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I add the postcode PE2 6YS",
  "keyword": "And "
});
formatter.match({
  "location": "EnergyComparisonStepDefs.i_navigate_to_compare_the_market()"
});
formatter.result({
  "duration": 5055630428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Supplier details",
      "offset": 8
    }
  ],
  "location": "EnergyComparisonStepDefs.i_am_on_page(String)"
});
formatter.result({
  "duration": 156554950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PE2 6YS",
      "offset": 19
    }
  ],
  "location": "EnergyComparisonStepDefs.i_add_the_postcode(String)"
});
formatter.result({
  "duration": 2635149219,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Minimum required fields to be filled by user to complete journey for energy quotes/prices",
  "description": "",
  "id": "energy-comparison-on-comparethemarket-website;minimum-required-fields-to-be-filled-by-user-to-complete-journey-for-energy-quotes/prices",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I click next to go to energy details",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I am on Energy details page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "electricity usage is 800",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on next to go to personal details",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "gas usage is 700",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on next to go to personal details",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on personal details page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select tariff as Fixed",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select payment type monthly direct debit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter my email abc@de.com",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I tick the box of terms and condition",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on Go to prices",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I am on prices result page",
  "keyword": "Then "
});
formatter.match({
  "location": "EnergyComparisonStepDefs.i_click_next_to_go_to_energy_details()"
});
formatter.result({
  "duration": 283163588,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Energy details",
      "offset": 8
    }
  ],
  "location": "EnergyComparisonStepDefs.i_am_on_page(String)"
});
formatter.result({
  "duration": 791096637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "electricity",
      "offset": 0
    },
    {
      "val": "800",
      "offset": 21
    }
  ],
  "location": "EnergyComparisonStepDefs.energy_usage_is(String,String)"
});
formatter.result({
  "duration": 172311305,
  "status": "passed"
});
formatter.match({
  "location": "EnergyComparisonStepDefs.i_click_on_next_to_go_to_personal_details()"
});
formatter.result({
  "duration": 319919864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gas",
      "offset": 0
    },
    {
      "val": "700",
      "offset": 13
    }
  ],
  "location": "EnergyComparisonStepDefs.energy_usage_is(String,String)"
});
formatter.result({
  "duration": 262080372,
  "status": "passed"
});
formatter.match({
  "location": "EnergyComparisonStepDefs.i_click_on_next_to_go_to_personal_details()"
});
formatter.result({
  "duration": 240273172,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "personal details",
      "offset": 8
    }
  ],
  "location": "EnergyComparisonStepDefs.i_am_on_page(String)"
});
formatter.result({
  "duration": 482993447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fixed",
      "offset": 19
    }
  ],
  "location": "EnergyComparisonStepDefs.i_select_tariff_as(String)"
});
formatter.result({
  "duration": 284839334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "monthly direct debit",
      "offset": 22
    }
  ],
  "location": "EnergyComparisonStepDefs.i_select_payment_type(String)"
});
formatter.result({
  "duration": 366770882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@de.com",
      "offset": 17
    }
  ],
  "location": "EnergyComparisonStepDefs.i_enter_my_email_id(String)"
});
formatter.result({
  "duration": 282046424,
  "status": "passed"
});
formatter.match({
  "location": "EnergyComparisonStepDefs.i_tick_the_box_of_terms_and_condition()"
});
formatter.result({
  "duration": 252897915,
  "status": "passed"
});
formatter.match({
  "location": "EnergyComparisonStepDefs.i_click_on_Go_to_prices()"
});
formatter.result({
  "duration": 363220827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prices result",
      "offset": 8
    }
  ],
  "location": "EnergyComparisonStepDefs.i_am_on_page(String)"
});
formatter.result({
  "duration": 17046267961,
  "status": "passed"
});
formatter.after({
  "duration": 569041133,
  "status": "passed"
});
formatter.before({
  "duration": 5621522975,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I navigate to compare the market",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I am on Supplier details page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I add the postcode PE2 6YS",
  "keyword": "And "
});
formatter.match({
  "location": "EnergyComparisonStepDefs.i_navigate_to_compare_the_market()"
});
formatter.result({
  "duration": 4653753750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Supplier details",
      "offset": 8
    }
  ],
  "location": "EnergyComparisonStepDefs.i_am_on_page(String)"
});
formatter.result({
  "duration": 155398705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PE2 6YS",
      "offset": 19
    }
  ],
  "location": "EnergyComparisonStepDefs.i_add_the_postcode(String)"
});
formatter.result({
  "duration": 2974251145,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Gas energy comparison with No bill, unknown supplier, variable tariff and quarterly direct debit",
  "description": "",
  "id": "energy-comparison-on-comparethemarket-website;gas-energy-comparison-with-no-bill,-unknown-supplier,-variable-tariff-and-quarterly-direct-debit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I have no bill",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I want Gas energy comparison",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I do not know current supplier",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click next to go to energy details",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I am on Energy details page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "gas current spend is 100",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on next to go to personal details",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I am on personal details page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select tariff as Variable",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select payment type quarterly direct debit",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter my email abc@de.com",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I agree to receive marketing communication",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I tick the box of terms and condition",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on Go to prices",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I am on prices result page",
  "keyword": "Then "
});
formatter.match({
  "location": "EnergyComparisonStepDefs.i_have_no_bill()"
});
formatter.result({
  "duration": 250372257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gas",
      "offset": 7
    }
  ],
  "location": "EnergyComparisonStepDefs.i_want_only_Gas_energy_comparison(String)"
});
formatter.result({
  "duration": 378950339,
  "status": "passed"
});
formatter.match({
  "location": "EnergyComparisonStepDefs.i_don_t_know_current_supplier()"
});
formatter.result({
  "duration": 355410153,
  "status": "passed"
});
formatter.match({
  "location": "EnergyComparisonStepDefs.i_click_next_to_go_to_energy_details()"
});
formatter.result({
  "duration": 362610927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Energy details",
      "offset": 8
    }
  ],
  "location": "EnergyComparisonStepDefs.i_am_on_page(String)"
});
formatter.result({
  "duration": 551603506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gas",
      "offset": 0
    },
    {
      "val": "100",
      "offset": 21
    }
  ],
  "location": "EnergyComparisonStepDefs.energy_current_spend_is(String,String)"
});
formatter.result({
  "duration": 136688379,
  "status": "passed"
});
formatter.match({
  "location": "EnergyComparisonStepDefs.i_click_on_next_to_go_to_personal_details()"
});
formatter.result({
  "duration": 337465261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "personal details",
      "offset": 8
    }
  ],
  "location": "EnergyComparisonStepDefs.i_am_on_page(String)"
});
formatter.result({
  "duration": 403678746,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Variable",
      "offset": 19
    }
  ],
  "location": "EnergyComparisonStepDefs.i_select_tariff_as(String)"
});
formatter.result({
  "duration": 273931391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quarterly direct debit",
      "offset": 22
    }
  ],
  "location": "EnergyComparisonStepDefs.i_select_payment_type(String)"
});
formatter.result({
  "duration": 370985315,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@de.com",
      "offset": 17
    }
  ],
  "location": "EnergyComparisonStepDefs.i_enter_my_email_id(String)"
});
formatter.result({
  "duration": 273040029,
  "status": "passed"
});
formatter.match({
  "location": "EnergyComparisonStepDefs.i_agree_to_receive_communication()"
});
formatter.result({
  "duration": 195363177,
  "status": "passed"
});
formatter.match({
  "location": "EnergyComparisonStepDefs.i_tick_the_box_of_terms_and_condition()"
});
formatter.result({
  "duration": 313895074,
  "status": "passed"
});
formatter.match({
  "location": "EnergyComparisonStepDefs.i_click_on_Go_to_prices()"
});
formatter.result({
  "duration": 340290937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prices result",
      "offset": 8
    }
  ],
  "location": "EnergyComparisonStepDefs.i_am_on_page(String)"
});
formatter.result({
  "duration": 15483190826,
  "status": "passed"
});
formatter.after({
  "duration": 475002763,
  "status": "passed"
});
formatter.before({
  "duration": 5640749250,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I navigate to compare the market",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I am on Supplier details page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I add the postcode PE2 6YS",
  "keyword": "And "
});
formatter.match({
  "location": "EnergyComparisonStepDefs.i_navigate_to_compare_the_market()"
});
formatter.result({
  "duration": 4899184431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Supplier details",
      "offset": 8
    }
  ],
  "location": "EnergyComparisonStepDefs.i_am_on_page(String)"
});
formatter.result({
  "duration": 268499526,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PE2 6YS",
      "offset": 19
    }
  ],
  "location": "EnergyComparisonStepDefs.i_add_the_postcode(String)"
});
formatter.result({
  "duration": 2554205748,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Check validations error on Your energy page",
  "description": "",
  "id": "energy-comparison-on-comparethemarket-website;check-validations-error-on-your-energy-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "I click next to go to energy details",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I am on Energy details page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on next to go to personal details",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "error message should appear \"Complete this section to continue 1 question remaining\"",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I am on Energy details page",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "required field is highlighted with red outline",
  "keyword": "And "
});
formatter.match({
  "location": "EnergyComparisonStepDefs.i_click_next_to_go_to_energy_details()"
});
formatter.result({
  "duration": 251586136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Energy details",
      "offset": 8
    }
  ],
  "location": "EnergyComparisonStepDefs.i_am_on_page(String)"
});
formatter.result({
  "duration": 987994236,
  "status": "passed"
});
formatter.match({
  "location": "EnergyComparisonStepDefs.i_click_on_next_to_go_to_personal_details()"
});
formatter.result({
  "duration": 283411495,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Complete this section to continue 1 question remaining",
      "offset": 29
    }
  ],
  "location": "EnergyComparisonStepDefs.error_message_should_appear(String)"
});
formatter.result({
  "duration": 451279409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Energy details",
      "offset": 8
    }
  ],
  "location": "EnergyComparisonStepDefs.i_am_on_page(String)"
});
formatter.result({
  "duration": 124367598,
  "status": "passed"
});
formatter.match({
  "location": "EnergyComparisonStepDefs.required_field_is_highlighted_with_red_outline()"
});
formatter.result({
  "duration": 50464629,
  "status": "passed"
});
formatter.after({
  "duration": 554147718,
  "status": "passed"
});
});