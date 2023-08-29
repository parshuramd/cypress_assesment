Feature: Order Fiction Book

    Feature Description
    Background: User Visit Book Ordering App
        Given User Visits book ordering app
    Scenario: As a book lover, I should be able to order a drama called “The Rainbow” for no more than $125.00 I also want to use my 10% discount voucher so that I can send this book to my mum.
        Given User select drama book radio box
        And User Select "The Rainbow" book from choose a book dropdown
        And User input number of Units for Book '1'
        And User input price of single unit for the book '125'
        And User add coupon discount of '10'
        And User place order successfully by clicking on submit button
        Then Order Placed Correctly with "The Rainbow" book
        Then Validate units of book should be '1'
        Then Validate price of book should be '125'
        Then Validate amount AUD should be multiply '1' and '125'
        Then Validate discount amount AUD should be '1' * '125' * '10' divided by hundread
        Then Validate final amount AUD should be amount: '1' * '125' - discount: '10'
        Then Remove record and double check that is removed successfully