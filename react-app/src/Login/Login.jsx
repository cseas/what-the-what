import { Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  return isLoading ? (
    <Spinner color="#4200FF" style={{ marginTop: "280px" }} />
  ) : (
    <>
      <header className="App-header" style={{ paddingTop: "40px" }}>
        <p className="p-bold-light">Welcome to</p>

        <h1>
          <span className="h1-blue" style={{ paddingRight: "8px" }}>
            Wh@t
          </span>
          <span className="h1-black" style={{ paddingRight: "8px" }}>
            the
          </span>
          <span className="h1-blue">What!</span>
        </h1>
      </header>

      <main>
        <img
          src="/images/home-girl.png"
          alt="Banner"
          style={{
            border: "12px solid hsla(256, 100%, 50%, 0.2)",
            marginTop: "32px",
          }}
        />

        <p className="p-regular" style={{ paddingTop: "32px" }}>
          Ever wondered <span className="p-bold-blue">What</span> did just
          someone say in a meeting?
        </p>

        <p className="p-bold" style={{ paddingTop: "32px" }}>
          Now you can find the{" "}
          <span className="p-bold-blue">What's for all your Whats</span> here 😉
        </p>

        <img
          src="/images/home-google.png"
          alt="Log In With Google"
          style={{ width: "256px", marginTop: "40px", cursor: "pointer" }}
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => {
              navigate("/home");
            }, 1500);
          }}
        />
      </main>
    </>
  );
}
