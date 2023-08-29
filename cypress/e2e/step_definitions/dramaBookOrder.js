import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { dramaBookPage } from "@pages/dramaBookPage";
Given('User select drama book radio box', () => {
    dramaBookPage.selectDramaBookCheckbox();
})

Given('User add coupon discount of {string}', (discount) => {
    dramaBookPage.addCouponDiscount(discount)
})

Then('Remove record and double check that is removed successfully',()=>{
    dramaBookPage.deleteRecord();
})