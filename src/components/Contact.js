import React, { useEffect, useState } from "react";
import Thread from "./Thread";

export default function Contact() {
  const [detail, setDetail] = useState();
  const [email, setEmail] = useState();
  const [buttonLabel, setButtonLabel] = useState();

  function handleChange(e) {
    switch (e.target.name) {
      case "お問い合わせ":
        setDetail(e.target.value);
        break;
      case "メールアドレス":
        setEmail(e.target.value);
        break;
      default:
    }
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.form.run/js/v2/formrun.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (detail && email) {
      setButtonLabel("送信");
    } else {
      setButtonLabel("ご入力後に送信");
    }
  });

  return (
    <section id="sectionContact" class="sectionOther">
      <Thread heading={"Contact"}>
        <form
          action="https://form.run/api/v1/r/mb1qe2q6lkuok0zvdsmv51ip"
          method="post"
        >
          <div>
            <textarea
              name="お問い合わせ"
              placeholder="お問い合わせ内容"
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <input
              name="メールアドレス"
              type="text"
              data-formrun-type="email"
              placeholder="メールアドレス"
              onChange={handleChange}
            />
          </div>
          <button type="submit" class="neuButton label">
            {buttonLabel}
          </button>
        </form>
      </Thread>
    </section>
  );
}
