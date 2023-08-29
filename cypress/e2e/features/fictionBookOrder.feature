Feature: Order Fiction Book

    Feature Description
    Background: User Visit Book Ordering App
        Given User Visits book ordering app
    Scenario: As a wholesale customer, I should be able to order 50 Harry Potter fiction books at a rate of $35.80 each so that I can sell them to my customers.
        Given User select fiction book radio box
        And User Select "Harry Potter" book from choose a book dropdown
        And User input number of Units for Book '50'
        And User input price of single unit for the book '35.80'
        And User place order successfully by clicking on submit button
        Then Order Placed Correctly with "Harry Potter" book
        Then Validate units of book should be '50'
        Then Validate price of book should be '35.80'
        Then Validate amount AUD should be multiply '50' and '35.80'
        Then Validate discount amount AUD should be '50' * '35.80' * '0' divided by hundread
        Then Validate final amount AUD should be amount: '50' * '35.80' - discount: '0'
        