package com.comparethemarket.energycomparison.executor;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(strict = false, features = "classpath:features",
				 format = {"pretty","html:target/cucumber-html-report/cucumber-pretty","json:target/cucumber.json" },
				 tags = { "~@ignore" },
				 glue = "com.comparethemarket.energycomparison.stepdefs")
public class RunBDDTest {
	
}