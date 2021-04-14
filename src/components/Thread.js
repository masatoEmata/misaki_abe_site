import React from "react";

export default function Thread(props) {
  const { heading, children } = props;
  return (
    <div class="thread">
      <h2 class="threadHeading">{heading}</h2>
      <p class="passage">{children}</p>
    </div>
  );
}
