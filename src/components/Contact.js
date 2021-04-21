import React, { useEffect, useState } from "react";
import Thread from "./Thread";

export default function Contact() {
  const [detail, setDetail] = useState();
  const [email, setEmail] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [buttonShadowSelecor, setButtonShadowSelecor] = useState(
    "neuButton label disableButtonShadow"
  );

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
      setButtonDisabled(false);
      setButtonShadowSelecor("neuButton label");
    } else {
      setButtonDisabled(true);
      setButtonShadowSelecor("neuButton label disableButtonShadow");
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
          <button
            type="submit"
            class={buttonShadowSelecor}
            disabled={buttonDisabled}
          >
            送信する
          </button>
        </form>
      </Thread>
    </section>
  );
}
