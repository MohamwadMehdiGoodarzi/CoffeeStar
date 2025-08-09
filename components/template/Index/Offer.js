import React, { useState, useRef } from "react";

function Offer() {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const timeoutRef = useRef(null);

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 3000);
  };

  const addEmail = async (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "" || !emailRegex.test(email)) {
      showToast("ایمیل وارد شده معتبر نیست!", "error");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/newsLetters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 201 || response.status === 200) {
        setEmail("");
        showToast("ایمیل شما با موفقیت ثبت شد!", "success");
      } else {
        showToast("مشکلی پیش آمده، دوباره تلاش کنید.", "error");
      }
    } catch (error) {
      showToast("خطا در ارتباط با سرور.", "error");
    }
  };

  return (
    <>

      {toast.show && (
        <div
          className={`fixed top-4 right-4 z-50 max-w-xs px-4 py-3 rounded shadow-lg text-white ${
            toast.type === "success" ? "bg-emerald-500" : "bg-red-500"
          }`}
          role="alert"
        >
          {toast.message}
        </div>
      )}

      {/* Main Content */}
      <header className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">

            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-DanaDemiBold text-gray-800 dark:text-white">
                  برای دریافت خبر ها و تخفیفات ما ایمیل خود را وارد نمایید
                </h1>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  از اعتماد شما بسیار متشکریم .. !
                </p>

                <form
                  onSubmit={addEmail}
                  className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row"
                >
                  <input
                    value={email}
                    id="email"
                    type="email"
                    required
                    className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                    placeholder="ایمیل خود را وارد نمایید .."
                    onChange={(event) => setEmail(event.target.value)}
                  />

                  <button
                    type="submit"
                    className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                  >
                    عضو شدن
                  </button>
                </form>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full max-w-md"
                src="https://merakiui.com/images/components/Email-campaign-bro.svg"
                alt="email illustration vector art"
              />
            </div>

          </div>
        </div>
      </header>
    </>
  );
}

export default Offer;
