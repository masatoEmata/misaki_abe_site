import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  neuButton: {
    boxShadow:
      "-7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001, inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001",
    "&:hover": {
      boxShadow: "-2px -2px 5px #fff, 2px 2px 5px #babecc",
    },
    backgroundColor: "#dde6f0",
    padding: "10px 25px",
    margin: 10,
    borderStyle: "none",
  },
  input: {
    width: 400,
    transition: "all 0.2s ease-in-out",
    appearance: "none",
    border: 0,
    outline: 0,
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#EBECF0",
    textShadow: "1px 1px 0 #fff",
    fontFamily: "Yu Mincho",
    boxShadow: "inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff",
  },
  inputTextarea: {
    height: 140,
    width: 400,
    transition: "all 0.2s ease-in-out",
    appearance: "none",
    border: 0,
    outline: 0,
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#EBECF0",
    textShadow: "1px 1px 0 #fff",
    fontFamily: "Yu Mincho",
    boxShadow: "inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff",
  },
}));

export default function Form() {
  const classes = useStyles();

  return (
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
          className={classes.inputTextarea}
        ></textarea>
      </div>
      <div>
        <input
          name="メールアドレス"
          type="text"
          data-formrun-type="email"
          data-formrun-required=""
          placeholder="メールアドレス"
          className={classes.input}
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
        className={classes.neuButton}
      >
        送信
      </button>
    </form>
  );
}
