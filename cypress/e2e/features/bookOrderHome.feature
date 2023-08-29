Feature: Check Book Order Apps Landing Page

    validate book order app landing page
    Background: User Visit Book Ordering App
        Given User Visits book ordering app
    Scenario: Validate book units input field valid
        Given User is able to put units values in interger only
            | 1 | 10 | 100 | 1000 |
    Scenario: Validate book units input field invalid
        Given User is not able to put units values invalid data
            | $ | ^ | 'he' | 1.2 |
    Scenario: Validate book price input field invalid
        Given User is not able to put price values invalid data
            | $ | ^ | 'he' | %^& |
    Scenario: Validate book price input field valid
        Given User is able to put price values in interger only
            | 1 | 10 | 100 | 10.2 |

    Scenario: Validate book discount input field valid
        Given User is able to put discount values in interger only
            | 1 | 10 | 100 | 10.2 |
    Scenario: Validate book discount input field invalid
        Given User is not able to put discount values invalid data
            | $ | ^ | 'he' | %^& |

