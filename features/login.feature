Feature: This feature describe the scenarios of the signin part of our authentication component

  @authentication
  Scenario Outline: The user is using the signin form
    Given I am in "auth/signin" page
    And "<username>" is the user username in the signin form
    And "<password>" is the user password in the signin form
    When submitting the signin form
    # Then the signin form is validated "<valid>"

    Examples:
      | username      | password             | valid |
      |               |                      | false |
      |               | thisisavalidpassword | false |
      | samkwerri.be  | thisisavalidpassword | false |
      | sam@kwerri.be |                      | false |
      | 09127335478   | 123456789            | true  |