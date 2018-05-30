import React, { Component } from "react";
import {Button,  Tabs, Tab, FormGroup, InputGroup, FormControl, ButtonToolbar, DropdownButton, MenuItem } from "react-bootstrap";
import Sidebar from './sidebar';
class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleButtonState = this.handleButtonState.bind(this);
    this.state = {
      isLoading: false
    };
  }
  handleButtonState() {
    this.setState({ isLoading: true });
    // This probably where you would have an `ajax` call
    setTimeout(() => {
      // Completed of async action, set loading state back
      this.setState({ isLoading: false });
    }, 2000);
  }
  
  render() {
    const { isLoading } = this.state;
    return (
        <div className="innerWrapper">
          <Sidebar></Sidebar>
          <div className="formContent">
            <div className="loginBox">
              <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Sign in">
                  <form>
                    <FormGroup>
                      <InputGroup>
                        <InputGroup.Addon>
                          <span class="icon-username"></span>
                        </InputGroup.Addon>
                        <FormControl type="text" placeholder="Username" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup>
                        <InputGroup.Addon>
                          <span class="icon-password"></span>
                        </InputGroup.Addon>
                        <FormControl type="text"  placeholder="Password"  />
                      </InputGroup>
                    </FormGroup>
                    <a className="forgotPass" href="forgot-password">Forgot Password</a>
                    <FormGroup>
                      <Button
                          bsStyle="primary rounded centeredBtn"
                          disabled={isLoading}
                          onClick={!isLoading ? this.handleButtonState : null}
                      >
                        {isLoading ? 'Checking Credentials...' : 'Sign In'}
                      </Button>
                      {/*<ButtonToolbar>
                       <Button bsStyle="primary">Sign In</Button>
                       </ButtonToolbar>
                       */}
                    </FormGroup>
                  </form>
                </Tab>
                <Tab eventKey={2} title="sign up">
                  <form>
                    <div className="signupText">
                      Sign up to SpikeView as
                      <ButtonToolbar>
                        <DropdownButton
                            bsSize="xsmall"
                            title="Student"
                            id="dropdown-size-large"
                        >
                          <MenuItem eventKey="1">Student</MenuItem>
                          <MenuItem eventKey="2">Student</MenuItem>
                          <MenuItem eventKey="3">Student</MenuItem>
                          <MenuItem divider />
                          <MenuItem eventKey="4">Student</MenuItem>
                        </DropdownButton>
                      </ButtonToolbar>
                    </div>
                    <FormGroup>
                      <InputGroup>
                        <InputGroup.Addon>
                          <span class="icon-email"></span>
                        </InputGroup.Addon>
                        <FormControl type="Email"  placeholder="Email" />
                      </InputGroup>
                    </FormGroup>
        
                    <FormGroup>
                      <InputGroup>
                        <InputGroup.Addon>
                          <span class="icon-username"></span>
                        </InputGroup.Addon>
                        <FormControl type="text" placeholder="First Name" />
                      </InputGroup>
                    </FormGroup>
                    
                    <FormGroup>
                      <InputGroup>
                        <InputGroup.Addon>
                          <span class="icon-username"></span>
                        </InputGroup.Addon>
                        <FormControl type="text" placeholder="Last Name" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <Button
                          bsStyle="primary rounded centeredBtn"
                          disabled={isLoading}
                          onClick={!isLoading ? this.handleButtonState : null}
                      >
                        {isLoading ? 'In Progress...' : 'Sign Up'}
                      </Button>
                    </FormGroup>
                  </form>
    
                </Tab>
              </Tabs>
            </div>
          </div>
         
        </div>
    )
  }
}
export default Login;
