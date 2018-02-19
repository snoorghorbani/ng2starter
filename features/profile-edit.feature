Feature: This feature describe the scenarios of the profile-edit part of our profile component

  @authentication
  Scenario Outline: The user is using the profile-edit form
    Given I am in "user/profile/edit" page
    And the user enter value "<FirstName>" for field "FirstName" 
    And the user enter value "<LastName>" for field "LastName" 
    And the user enter value "<Sex>" for field "Sex" 
    And the user enter value "<Email>" for field "Email" 
    And the user enter value "<Year>" for field "Year" 
    And the user enter value "<Month>" for field "Month" 
    And the user enter value "<Day>" for field "Day" 
    When submitting the profile-edit form
    # Then the profile-edit form is validated "<valid>"

    Examples:
      | FirstName | LastName | Sex  | Email                      | Year | Month | Day | valid |
      | ali       | taheri   | Male | alitaherimotlagh@yahoo.com | 1373 | 08    | 08  | true  |
