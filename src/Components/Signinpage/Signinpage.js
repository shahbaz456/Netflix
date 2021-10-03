import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Button, FormGroup, Label, Input, Card } from "reactstrap";

const Signinpage = () => {
  const [email, setemail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const handleClick = () => {
    return axios
      .post("https://reqres.in/api/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log("data", response.data);
          history.push("/profile");
        }
        return response.data;
      });
  };
  return (
    <div className="login">
      <div className="signup">
        <Card>
          <h1 className="heading">Sign In</h1>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              value={email}
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email or PhoneNumber"
              onChange={(e) => setemail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              value={password}
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password "
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>

          <Button className="sign" onClick={handleClick}>
            Sign In
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Signinpage;
