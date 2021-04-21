import React from "react";
import Thread from "./Thread";

export default function Contact() {
  return (
    <section id="sectionOther" class="sectionOther">
      <Thread heading={"History"}>
        <div id="History">
          <dl>
            <dt>1999</dt>
            <dd>大分県別府市生まれ</dd>
          </dl>
          <dt>2018</dt>
          <dd>大分県立芸術緑丘高校卒業</dd>
          <dl>
            <dt>2021</dt>
            <dd>東京藝術大学美術学部絵画科油画入学</dd>
          </dl>
          <dl>
            <dt></dt>
            <dd>現在は絵画を中心に、映像作品も手がけている。</dd>
          </dl>
        </div>
      </Thread>
    </section>
  );
}
