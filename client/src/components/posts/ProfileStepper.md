# Profile Stepper

- V5 routing
   - If you are not logged in you are on the /auth/* route.

## Login.js
```javascript {highlight=1}
<Link to="/auth/profilestepper"
  className="font-weight-bold ml-2"
  id="kt_login_signup">
  Sign Up!
</Link>
```

## Routes.js
```javascript {highlight=5}
<Switch >
      {currentUser.isLoggedIn === null || !currentUser.isLoggedIn ? (
        /*Render auth page when user at `/auth` and not authorized.*/
        <Route >
          <AuthPage/>
        </Route>
      ) : (
        /*Otherwise redirect to root page (`/`)*/
         <Redirect from="/auth" to="/" />
      )}
```

## AuthPage.js

```javascript {highlight=17-21}
{ currentUser.isLoggedIn === 1
      ? (
        <Switch>
          <ContentRoute path="/dashboard" component={DashboardPage} />
          <ContentRoute exact path="/user-profile" component={UserProfilePage} />
          <ContentRoute exact path="/logout" component={Logout} />
          {/* <Redirect to="/dashboard" /> */}
        </Switch>
      ) : (
        <Switch>
          <ContentRoute exact path="/auth/login" component={Login} />
          <ContentRoute
            exact
            path="/auth/forgot-password"
            component={ForgotPasswordPage}
          />
          <ContentRoute
            exact
            path="/auth/profilestepper"
            component={ProfileStepper}
          />
          <Redirect from="/auth" exact={true} to="/auth/login" />
          <Redirect from="/auth/login" to="/dashboard" />;
          <Redirect to="/auth/login" />
        </Switch>
      )}
```
## ProfileStepper.js
- Controls the Stepper
- Controls what is displayed at each step
- Owns the user data collected in the RegisterStep
- Decides if it's ok to move back or forward

## return
- 12 If we're at the last step, go to Success page
- 24 Highlight the active step
- 28 Map out all the steps in the stepper
- 43 Call walkSteps to display the active step in a Box below the stepper
- 53 & 63 Display the right color for fwd/back arrows

```javascript {highlight=[12, 24, 28, 43, 52-54, 62-64]}
return (
    <>
      <div className="d-flex flex-column flex-root bg-white">
        <Link to="/" className="flex-column-auto mt-5 pb-lg-0 ">
          <img
            alt="Alerts for Good"
            className="max-h-70px"
            src="/media/a4g/a4g-logo-white.png"
          />
        </Link>
        <div className="bg-white">
          { activeStep === stepLabels.length ? (
            <Success />
          ) : (
            // Last Component
            <>
              {/* begin::stepper */ }

              <Box>
                <Typography
                  variant="h4"
                  align="center"
                  className="font-weight-bold text-dark-50">
                  { stepLabels[activeStep] }
                </Typography>
              </Box>
              <Stepper activeStep={ activeStep } alternativeLabel>
                { stepLabels.map(stepLabel => (
                  <Step key={ stepLabel }>
                    <StepLabel>{ stepLabel }</StepLabel>
                  </Step>
                )) }
              </Stepper>

              {/* forms go here */ }
              <Box
                p={ 0 }
                m={ 0 }
                display="flex"
                flexWrap="nowrap"
                flexDirection="column"
                justifyContent="center">
                { walkSteps(activeStep) }
              </Box>

              <div className={ clsx(classes.row, classes.navButtons) }>
                <IconButton
                  key={ 'IB' + 1 }
                  aria-label="back"
                  onClick={ e => handleBackButtonClick({ e }) }
                  disabled={ !backEnabled }>
                  { backEnabled
                    ? <Back ref={ refEB } />
                    : <Back ref={ refDB } /> }
                </IconButton>
                <IconButton
                  key={ 'IB' + 2 }
                  aria-label="next"
                  onClick={ HandleNextButtonClick }
                  disabled={ !nextEnabled }
                  label="next">
                  { nextEnabled
                    ? <Next ref={ refEN } />
                    : <Next ref={ refDN } /> }
                </IconButton>
              </div>
            </>
          ) }
        </div>
      </div>
    </>
  );
};
```

## walkSteps
- Called by the stepper, sending the active step
- Displays one of the 5 steps
- SummaryStep is special. It is a container where users can review the locations and friends they've entered and make changes before they finish up.
- SummaryStep is using the same *LocationsStep* and *FriendsStep* that are used stand-alone and also used in the *Dashboard*
```javascript {highlight=[8, 14, 20,26, 37]}
const walkSteps = activeStep => {
    switch (activeStep)
    {
      case 0:
        return (
          <div>
            <hr className={ classes.hr } />
            <RegisterStep form='RegisterStep' className="classes.page" handlePassword={ handlePassword } isADuplicate={ isADuplicate } />
          </div>
        );
      case 1:
        return (
          <div>
            <LocationsStep step={ activeStep } className="classes.page" />
          </div>
        );
      case 2:
        return (
          <div>
            <FriendsStep step={ activeStep } />
          </div>
        );
      case 3:
        return (
          <div>
            <SummaryStep />
            <hr className={ classes.hr } />
            <LocationsStep step={ activeStep } className="classes.page" />
            <hr className={ classes.hr } />
            <FriendsStep step={ activeStep } />
            <hr className={ classes.hr } />
          </div>
        );
      case 4:
        return (
          <div>
            <DonationStep />
          </div>
        );
      default:
        break;
    }
  };
```
## HandleNextButtonClick
- Only does work if the user is trying to leave the RegisterStep (Step 0)
- isValid is stored in the StepperSlice and set by RegisterStep
- 14 Checks for entries in required fields
- Shows a snackbar message for errors


- 21 Calls addCustomer (useAddCustomerMutation) to write the user to the database.
- If response returns a new custId
  - 25 Adds the new custId to the userSlice
  - Enables Next & back buttons
  - 30 Increments activeStep to next step
- If response fails because the new user entered a cell number that's already in use
  - 35 If a duplicate was not found (originalStatus === 404 is good) but an error was still caught, it means no new record was created for some other reason, so show a 500 server error.
  - 38 Any other error indicates that a duplicate cell exists.
  - show snackbar with duplicate error
  - decrement activeStep back to current step (0)

```javascript {highlight=[21, 25, 30, 35, 38]}
const HandleNextButtonClick = () => {
    let prevStep = activeStep;
    switch (prevStep)
    {
      case 0:
        if (backEnabled)
          setBack(enableBack);
        if (nextEnabled)
          setNext(enableNext);
        if (isValid && userState.custid === 0)
        {
          let { ...newUser } = userState;
          newUser = { ...newUser, pwd: pwd };
          if(newUser.cell === "" || newUser.email === "" || newUser.pwd === "" || newUser.firstname === "" || newUser.lastname === "") {
            let snackType='missingRequiredField'
            enqueueSnackbar(null, {
              persist: true,
              content: key => <Snackbar id={ key } message={ snackType } />
            });
          }
          addCustomer(newUser).unwrap()
            .then((payload) => {
              console.log(`addCustomer fulfilled payload: `, payload, payload.insertId);

              dispatch(updateCustidState(payload));
              dispatch(updateNextEnabled(true));
              dispatch(updateBackEnabled(true));
              setNext(enableNext);
              setBack(enableBack);
              dispatch(updateActiveStep(activeStep + 1));
            })
            .catch((error) => {
              let snackType = '';
              console.error('addCustomer rejected error: ', error);
              if (error.originalStatus === 404) {
                snackType = '500ServerError';
              }
              else {
                dispatch(updateErrorState({ cell: 'Duplicate cell' }));
                dispatch(updateErrorState({ email: 'Duplicate email' }));
                setIsADuplicate(true);
                snackType = 'signUpError';
              }
              dispatch(updateActiveStep(activeStep - 1));
              enqueueSnackbar(null, {
                persist: true,
                content: key => <Snackbar id={ key } message={ snackType } />
              });
            });
        } else if (userState.custid > 0)
        {
          dispatch(updateActiveStep(activeStep + 1));
        }
        break;
      default:
        dispatch(updateNextEnabled(true));
        dispatch(updateBackEnabled(true));
        setNext(enableNext);
        setBack(enableBack);
        dispatch(updateActiveStep(activeStep + 1));
        break;
    };
  };
  ```
## handleBackButtonClick
- Only does work if the user is returning to the RegisterStep (Step 0)
- 7 If user made changes that are valid
  - 10 Write the changes to the database
  - 13 Update the userSlice
  - Enable the Next button & disable the Back button
- 19 If user tried to change to a cell or email that some other customer is already using
  - 24 Show snackbar duplicate error message
  - 29 If Back is enabled on Step 0, it takes the user back to the login page.
```javascript {highlight=[7, 10, 13, 19, 24, 29]}
  const handleBackButtonClick = async () => {
    let lastStep = activeStep;
    dispatch(updateActiveStep(activeStep - 1));
    switch (lastStep)
    {
      case 1:
        if (isValid)
        {
          let { ...newUser } = userState; //copy object
          updateCustomer(newUser).unwrap()
            .then((payload) => {
              //console.log(`updateCustomer fulfilled payload: `, payload)
              dispatch(updateUserState(payload));
              dispatch(updateNextEnabled(true));
              dispatch(updateBackEnabled(false));
              setNext(enableNext);
              setBack(disableBack);
            })
            .catch((error) => {
              console.error('updateCustomer rejected error: ', error);
              dispatch(updateErrorState({ cell: 'Duplicate cell' }));
              dispatch(updateErrorState({ email: 'Duplicate email' }));
              dispatch(updateActiveStep(activeStep - 1));
              enqueueSnackbar(`email-cell combination is already in use`, {
                variant: 'error',
              });
            });
        }
        dispatch(updateBackEnabled(true));
        setBack(enableBack);
        break;
      default:
        dispatch(updateBackEnabled(true));
        setBack(enableBack);
        dispatch(updateActiveStep(activeStep - 1));
        break;
    }
  };
  ```
