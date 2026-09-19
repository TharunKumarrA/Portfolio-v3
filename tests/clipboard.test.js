import test from "node:test";
import assert from "node:assert/strict";
import { copyText } from "../src/features/contact/clipboard.js";
test("copy awaits the write before reporting success", async () => {
  let complete;
  const waiting = new Promise((resolve) => {
    complete = resolve;
  });
  let done = false;
  const result = copyText("test@example.com", {
    writeText: async (text) => {
      assert.equal(text, "test@example.com");
      await waiting;
    },
  }).then((value) => {
    done = true;
    return value;
  });
  await Promise.resolve();
  assert.equal(done, false);
  complete();
  assert.deepEqual(await result, { ok: true });
});
test("clipboard rejection is a handled failure", async () => {
  assert.deepEqual(
    await copyText("test", {
      writeText: async () => {
        throw new Error("denied");
      },
    }),
    { ok: false },
  );
});
test("clipboard unavailable retains the email-link fallback", async () => {
  assert.deepEqual(await copyText("test", undefined), { ok: false });
});
