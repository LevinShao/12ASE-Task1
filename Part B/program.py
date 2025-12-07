def username_checker(username: str): # username must be a string
    """
    function that checks if a username is valid
    if invalid, returns a list of broken requirements

    - check username against rules
    - returns a list of broken requirements
    - if the list is empty, the username is valid
    """

    errors = [] # list to hold broken requirements

    # Requirement 1: Length <= 10
    if len(username) > 10:
        errors.append("• Username is longer than 10 characters") # Add error message to list

    # Requirement 2: Must be alphanumeric only
    if not username.isalnum():
        errors.append("• Username contains special characters (must be alphanumeric)") # Add error message to list

    # Requirement 3: Cannot contain < or >
    if "<" in username or ">" in username:
        errors.append("• Username contains '<' or '>' characters") # Add error message to list

    return errors # return list of broken requirements

def mainfunc():
    """
    main function for the program

    - asks the user for a username
    - validates the username through username_checker func
    - informs the user if the username is valid or not
    - returns the valid username
    - prints error messages
    - repeats program until user exits with empty input
    """

    while True: # infinite loop to keep asking for usernames until user exits
        username = input("Enter a username (or enter nothing to exit): ").strip()

        # treat empty string as exit
        if username == "": # User exits program if it detects empty input
            print("Program ended because empty input was received.")
            break # exit loop / end program

        errors = username_checker(username) # the program will go through the username_checker function to check the username for errors

        if len(errors) == 0: # if no errors, username is valid
            print(f"\nUsername '{username}' is valid.\n")
        else:
            print("\nInvalid username. The following rules were broken:")
            for error in errors: # print each error message
                print(error)
            print()  # blank line for readability

mainfunc()

# Test cases:
# Valid usernames: "user123", "admin1", "levinshao"
# Invalid usernames: "user<123", "verylongusername", "user@name", "user name"
# Extremely invalid usernames: "user123456789?!", "user?!is<invalid>123"