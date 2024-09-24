import React, { useMemo, useState } from "react";
import TabBtn from "../TabBtn/TabBtn";
import Header from "../Header/Header";
import CoreConsept from "../CoreConsept/CoreConsept";
import { Core_Concept, Examples } from "../../data";

export default function Home() {
  const [text, setText] = useState();
  const hndleSelect = (selectedBtn) => {
    setText(selectedBtn);
  };

  return (
    <>
      <div>
        <Header />
        <main>
          <section id="core-concept">
            <h2>Core Concepts</h2>
            <ul>
              {Core_Concept.map((item, index) => (
                <CoreConsept
                  key={index}
                  title={item.title}
                  description={item.description}
                  img={item.image}
                />
              ))}
            </ul>
          </section>

          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabBtn
                isSelected={text === "componets"}
                onSelect={() => hndleSelect("componets")}
              >
                Componets
              </TabBtn>
              <TabBtn
                isSelected={text === "jsx"}
                onSelect={() => hndleSelect("jsx")}
              >
                Jsx
              </TabBtn>
              <TabBtn
                isSelected={text === "props"}
                onSelect={() => hndleSelect("props")}
              >
                Props
              </TabBtn>
              <TabBtn
                isSelected={text === "state"}
                onSelect={() => hndleSelect("state")}
              >
                State
              </TabBtn>
            </menu>
            {!text ? (
              <p className="text-[#a18aba]">Please select a tab</p>
            ) : (
              <div id="tab-content">
                <h3>{Examples[text].title}</h3>
                <p>{Examples[text].description}</p>
                <pre>
                  <code>{Examples[text].code}</code>
                </pre>
              </div>
            )}
          </section>
        </main>
      </div>
    </>
  );
}
