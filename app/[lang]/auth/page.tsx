"use client";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { provider, auth } from "@/common/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import GoogleAuthButtons from "./GoogleAuth";
import Hero from "./hero/Hero";
import { redirect } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaKey } from "react-icons/fa";
import Loading from "./loading";

export default function Login() {
  const [user, loading] = useAuthState(auth);
  const [isLoginUser, setIsLoginUser] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [imagesLoaded, setImagesLoaded] = useState(false);
  if (loading) {
    return <Loading />;
  }
  if (user && !loading) {
    redirect("/en/dashboard");
  }
  function handleLogin() {
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result!);
        const token = credential?.accessToken;
        if (token) {
          redirect("/en/dashboard");
        }
        // The signed-in user info.
        const user = result?.user;
      })
      .catch((error) => {});
  }
  function handleLogout() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  }
  function emailPasswordLogin() {
    if (email.includes("@") && email.includes(".")) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {})
        .catch((error) => {
          if (error.code === "auth/user-not-found") {
            setEmailError("User does not exist.");
            setTimeout(() => {
              setEmailError("");
            }, 7500);
          }
          if (error.code === `auth/wrong-password`) {
            setPasswordError("Wrong password.");
            setTimeout(() => {
              setPasswordError("");
            }, 7500);
          }
        });
    } else if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Please enter valid email adress.");
      setTimeout(() => {
        setEmailError("");
      }, 7500);
    }
    if (password.length < 6) {
      setPasswordError("Password is not correct");
      setTimeout(() => {
        setPasswordError("");
      }, 7500);
    }
  }
  function registerWithEmailPassword() {
    if (email.includes("@") && email.includes(".") && password.length >= 6) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {})
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            setEmailError("User already exists.");
          }
        });
    } else if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Please enter valid email adress.");
      setTimeout(() => {
        setEmailError("");
      }, 7500);
    }
    if (password.length < 6) {
      setPasswordError("Password should contain more than 6 characters");
      setTimeout(() => {
        setPasswordError("");
      }, 7500);
    }
  }

  setTimeout(() => {
    setImagesLoaded(true);
  }, 1000);
  return (
    <>
      <section className="h-screen items-center font-sans overflow-hidden">
        <div className="bg-gradient-to-br from-zinc-900 via-white-900 to-purple-900  w-full  h-screen relative  lg:overflow-hidden">
          {imagesLoaded && (
            <>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  pointerEvents: "none",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate3d(-50%,-50%,0)",
                  }}
                ></div>
              </div>
              <div className="h-[50vh] md:h-[100vh] w-full flex rounded-lg relative">
                {/* <div className="absolute hidden md:flex text-white left-[50%] -translate-x-[50%] bottom-24  flex-col items-center">
                  <FaArrowCircleUp className="h-12 w-12 text-white" />
                  <span className="mt-3">Hover over to see more</span>
                </div> */}
                <Link href="/">
                  <div className="absolute m-10 text-gray-100 text-xl z-[1502]">
                    decocanva
                  </div>
                </Link>
                {/* <div className="absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] h-[70vh] w-[70vh] z-[1500] scale-100 hover:scale-110 sm:opacity-50 hover:opacity-100 duration-150">
                  <Canvas
                    style={{
                      zIndex: "20",
                      width: "100%",
                      height: "100%",
                      overflow: "visible",
                    }}
                    camera={{ position: [0, 0, 2], fov: 40 }}
                  >
                    <FadingImage />
                  </Canvas>
                </div> */}
              </div>
              <Hero />
            </>
          )}
        </div>

        <div
          className="bg-white w-[90vw] sm:w-[80vw] lg:w-[50vw] xl:w-1/3  p-12 rounded-lg shadow-lg duration-1000
        flex items-center justify-center fixed  left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
        >
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight  text-black">
              {isLoginUser && "Sign in to your account"}
              {!isLoginUser && "Create an account"}
            </h1>

            <div className="mt-6">
              <div>
                <label className="flex flex-row items-center text-black">
                  <FaEnvelope className="mr-1 text-gray-700" /> Email Address
                </label>
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Enter Email Address"
                  className={`text-black w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none ${
                    emailError !== "" && "border-2 border-red-600"
                  }`}
                />
                {emailError !== "" && (
                  <span className=" text-red-600">{emailError}</span>
                )}
              </div>

              <div className="mt-4">
                <label className="flex flex-row items-center text-black">
                  <FaKey className="mr-1 text-gray-700" />
                  Password
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Enter Password"
                  className={`text-black w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none${
                  passwordError !== "" && "border-2 border-red-600"
                }`}
                />
                {passwordError !== "" && (
                  <span className=" text-red-600">{passwordError}</span>
                )}
              </div>

              {isLoginUser && (
                <button
                  onClick={emailPasswordLogin}
                  type="submit"
                  className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
                >
                  Log In
                </button>
              )}
              {!isLoginUser && (
                <button
                  onClick={registerWithEmailPassword}
                  type="submit"
                  className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
                >
                  Sign up
                </button>
              )}
            </div>

            <hr className="my-6 border-gray-300 w-full" />

            <GoogleAuthButtons
              user={user}
              handleLogin={handleLogin}
              handleLogout={handleLogout}
            />
            <div className="flex flex-row items-center justify-between">
              {isLoginUser && (
                <p className="mt-8 text-black">
                  Need an account?{" "}
                  <a
                    onClick={() => setIsLoginUser(false)}
                    className="cursor-pointer text-blue-500 hover:text-blue-700 font-bold"
                  >
                    Create one
                  </a>
                </p>
              )}
              {!isLoginUser && (
                <p className="mt-8 text-black">
                  Already registered?{" "}
                  <a
                    onClick={() => setIsLoginUser(true)}
                    className="cursor-pointer text-blue-500 hover:text-blue-700 font-bold"
                  >
                    Sign in
                  </a>
                </p>
              )}
              <div className="text-right mt-8">
                <a
                  onClick={() => setForgotPassword(true)}
                  href="#"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
          {forgotPassword && (
            <div className="w-max absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 drop-shadow-md shadow-black rounded p-12 z-[1605]">
              <div className="space-y-4 flex flex-col justify-start">
                <label className=" text-black text-2xl flex flex-row items-center">
                  <FaEnvelope className="mr-1 text-black" />
                  Email recovery
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Enter Email Address"
                  className="text-black w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
                <div className="flex flex-col">
                  <button
                    type="submit"
                    className="w-full block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg
              p-2 mt-6"
                  >
                    Reset password
                  </button>
                  <button
                    onClick={() => setForgotPassword(false)}
                    type="submit"
                    className="mr-4 w-full block bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg
              p-2 mt-6"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}