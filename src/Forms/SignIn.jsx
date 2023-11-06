import React, { useRef, useState } from "react";
import {
  Heading,
  TextField,
  TextArea,
  Button,
  Text,
  Link,
} from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";

const SignIn = () => {
  const form = useRef();
  const [state, setState] = useState(null);
  const Navigate = useNavigate();

  const submit = () => {
    const formData = new FormData(form.current);
    const jsonObject = {};

    formData.forEach((value, key) => {
      jsonObject[key] = value;
    });

    const options = {
      method: "POST",
      body: new URLSearchParams(jsonObject),
    };

    fetch("http://server.byte-burst.xyz/", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.id !== undefined) {
          setState(true);
          Navigate("/E-Store");
          sessionStorage.setItem("id", response.id);
        } else {
          setState(false);
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <NavBar />
      <form
        ref={form}
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        className="bg-white min-h-[500px] sm:w-[500px] mx-auto p-10"
      >
        <input type="hidden" name="submit" value="signup" />
        <Heading className="text-center pt-10 pb-7 text-slate-500">
          {" "}
          Sign In
        </Heading>
        <div className="flex h-[40px] justify-evenly flex-wrap">
          {state ? (
            <>
              <Text>You are Logged In</Text>
            </>
          ) : state === false ? (
            <>
              <p className="text-red-500">An problem occured. Try again</p>
            </>
          ) : null}
        </div>

        <div className="py-10 flex justify-center flex-wrap gap-3">
          <TextField.Root className="w-[80%]">
            <TextField.Input
              type="email"
              name="email"
              placeholder="Email"
            ></TextField.Input>
          </TextField.Root>

          <input type="hidden" name="submit" value={"signin"} />

          <TextField.Root className="w-[80%]">
            <TextField.Input
              name="pwd"
              placeholder="Password"
              type="password"
            ></TextField.Input>
          </TextField.Root>
        </div>
        <Button name="submit" value={"signin"} className="m-auto block">
          Sign In
        </Button>
      </form>
    </>
  );
};

export default SignIn;
