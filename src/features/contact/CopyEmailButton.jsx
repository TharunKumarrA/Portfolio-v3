"use client";
import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { copyText } from "./clipboard";
export function CopyEmailButton({ email }) {
  const [status, setStatus] = useState("idle");
  async function handleCopy() {
    setStatus("copying");
    const result = await copyText(email, navigator.clipboard);
    setStatus(result.ok ? "copied" : "error");
  }
  return (
    <div className="copy-control">
      <button
        className="text-button"
        type="button"
        disabled={status === "copying"}
        onClick={handleCopy}
      >
        {status === "copied" ? (
          <FiCheck aria-hidden="true" />
        ) : (
          <FiCopy aria-hidden="true" />
        )}
        {status === "copying" ? "Copying…" : "Copy email"}
      </button>
      <span role="status" className="copy-status">
        {status === "copied"
          ? "Copied to clipboard."
          : status === "error"
            ? "Could not copy. Use the email link instead."
            : ""}
      </span>
    </div>
  );
}
