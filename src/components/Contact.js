import React from "react";

import Thread from "./Thread";

export default function Contact() {
  return (
    <section id="sectionContact" class="sectionOther">
      <Thread heading={"Contact"}>
        <form
          className="formrun"
          action="https://form.run/api/v1/r/mb1qe2q6lkuok0zvdsmv51ip"
          method="post"
        >
          <div>
            <textarea
              name="お問い合わせ"
              data-formrun-required=""
              placeholder="お問い合わせ内容"
              class="formrun-has-error"
            ></textarea>
          </div>
          <div>
            <input
              name="メールアドレス"
              type="text"
              data-formrun-type="email"
              data-formrun-required=""
              placeholder="メールアドレス"
            />
          </div>
          <div class="_formrun_gotcha" style={{ display: "none" }}>
            <label for="_formrun_gotcha">
              If you are a human, ignore this field
            </label>
            <input
              type="text"
              name="_formrun_gotcha"
              id="_formrun_gotcha"
              tabindex="-1"
            />
          </div>
          <button
            type="submit"
            data-formrun-error-text="未入力の項目があります"
            data-formrun-submitting-text="送信中..."
            data-formrun-default-text="送信"
            className="neuButton label"
          >
            送信
          </button>
        </form>
      </Thread>
    </section>
  );
}
