import React, { useRef, useState } from "react";
import {
  Heading,
  TextField,
  TextArea,
  Button,
  Text,
  Link,
} from "@radix-ui/themes";
import NavBar from "../NavBar";

const SignUp = () => {
  const form = useRef();
  const [state, setState] = useState(null);

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
      .then((response) => response.text())
      .then((response) => {
        console.log(response);
        if (response === "registered") {
          setState(true);
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
        className="bg-white min-h-[70vh] sm:w-[500px] mx-auto p-10"
      >
        <input type="hidden" name="submit" value="signup" />
        <Heading className="text-center pt-10 pb-7 text-slate-500">
          {" "}
          Sign Up
        </Heading>
        <div className="flex h-[40px] justify-evenly flex-wrap">
          {state ? (
            <>
              <Text>You are registered</Text>
              <Link color="blue" href="/E-Store/sign+In">
                Click here to Login
              </Link>
            </>
          ) : state === false ? (
            <>
              <p className="text-red-500">An problem occured. Try again</p>
            </>
          ) : null}
        </div>

        <div className="py-10 flex justify-center flex-wrap gap-3">
          <TextField.Root className="w-[200px]">
            <TextField.Input
              name="firstname"
              placeholder="First Name"
            ></TextField.Input>
          </TextField.Root>

          <TextField.Root className="w-[200px]">
            <TextField.Input
              name="lastname"
              placeholder="Last Name"
            ></TextField.Input>
          </TextField.Root>

          <TextField.Root className="w-[200px]">
            <TextField.Input
              type="email"
              name="email"
              placeholder="Email"
            ></TextField.Input>
          </TextField.Root>

          <TextField.Root className="w-[200px]">
            <TextField.Input
              name="tel"
              placeholder="Telephone No"
              type="tel"
            ></TextField.Input>
          </TextField.Root>

          <TextArea name="addr" placeholder="Address" className="w-[410px]" />

          <TextField.Root>
            <TextField.Input
              name="postcode"
              placeholder="Postal Code"
              type="number"
            ></TextField.Input>
          </TextField.Root>
          <TextField.Root>
            <TextField.Input
              name="pwd"
              placeholder="Password"
              type="password"
            ></TextField.Input>
          </TextField.Root>
        </div>
        <Button name="submit" value={"signup"} className="m-auto block">
          Sign Up
        </Button>
      </form>
    </>
  );
};

export default SignUp;
