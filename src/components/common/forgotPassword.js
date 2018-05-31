import React, { Component } from 'react';
import { Button, FormGroup, InputGroup, FormControl } from 'react-bootstrap';
class forgotPassword extends Component {
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
        <div className="formContent spikeBg">
          <div className="centeredBox">
            <form className="forgotPasswordForm p-5">
              <div className="formIcon">
                <span class="icon-change_password">
                  <span class="path1" />
                  <span class="path2" />
                </span>
              </div>
              <FormGroup>
                <legend className="text-center">Change Password</legend>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon>
                    <span class="icon-password" />
                  </InputGroup.Addon>
                  <FormControl type="password" placeholder="Old Password" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon>
                    <span class="icon-password" />
                  </InputGroup.Addon>
                  <FormControl type="text" placeholder="New Password" />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon>
                    <span class="icon-password" />
                  </InputGroup.Addon>
                  <FormControl type="text" placeholder="Confim Password" />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <Button
                  bsStyle="primary rounded centeredBtn"
                  disabled={isLoading}
                  onClick={!isLoading ? this.handleButtonState : null}
                >
                  {isLoading ? 'In Progress...' : 'Save'}
                </Button>
              </FormGroup>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default forgotPassword;
