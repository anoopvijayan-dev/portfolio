"use client";

import { useEffect, useState } from "react";
import { traceLines } from "@/content/site";

const LABEL: Record<string, string> = { tool: "tool", model: "model", guard: "guard", human: "human" };

export default function Trace() {
  const [shown, setShown] = useState(traceLines.length);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    setShown(0);
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setShown(i);
      if (i >= traceLines.length) window.clearInterval(id);
    }, 520);
    return () => window.clearInterval(id);
  }, []);

  return (
    <figure className="trace" aria-label="Example agent run">
      <div className="trace-head">
        <span>merchant-risk-review</span>
        <span className="trace-run">run 7f3a</span>
      </div>
      <ol className="trace-body">
        {traceLines.map((l, idx) => (
          <li key={idx} className={`trace-line kind-${l.kind}`} data-visible={idx < shown}>
            <span className="trace-kind">{LABEL[l.kind]}</span>
            <span className="trace-text">{l.text}</span>
            {l.status && <span className={`trace-status tone-${l.tone}`}>{l.status}</span>}
          </li>
        ))}
      </ol>
      <figcaption>Example run. The agent does the legwork; a person signs off on anything above the limit.</figcaption>
    </figure>
  );
}
