import { describe, expect, test, beforeEach } from "bun:test";
import { getItem, setItem, removeItem, clear } from "./storage";

describe("storage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("getItem", () => {
    test("存在しないキーはデフォルト値を返す", () => {
      const result = getItem("nonexistent", "default");
      expect(result).toBe("default");
    });

    test("保存された値を取得できる", () => {
      localStorage.setItem("test-key", JSON.stringify("test-value"));
      const result = getItem("test-key", "default");
      expect(result).toBe("test-value");
    });

    test("数値を取得できる", () => {
      localStorage.setItem("number-key", JSON.stringify(42));
      const result = getItem<number>("number-key", 0);
      expect(result).toBe(42);
    });

    test("オブジェクトを取得できる", () => {
      const obj = { name: "test", value: 123 };
      localStorage.setItem("object-key", JSON.stringify(obj));
      const result = getItem("object-key", {});
      expect(result).toEqual(obj);
    });

    test("不正なJSONはデフォルト値を返す", () => {
      localStorage.setItem("invalid-key", "not valid json");
      const result = getItem("invalid-key", "default");
      expect(result).toBe("default");
    });
  });

  describe("setItem", () => {
    test("文字列を保存できる", () => {
      setItem("string-key", "hello");
      expect(localStorage.getItem("string-key")).toBe('"hello"');
    });

    test("数値を保存できる", () => {
      setItem("number-key", 100);
      expect(localStorage.getItem("number-key")).toBe("100");
    });

    test("真偽値を保存できる", () => {
      setItem("bool-key", true);
      expect(localStorage.getItem("bool-key")).toBe("true");
    });

    test("オブジェクトを保存できる", () => {
      setItem("object-key", { a: 1, b: 2 });
      expect(localStorage.getItem("object-key")).toBe('{"a":1,"b":2}');
    });
  });

  describe("removeItem", () => {
    test("指定したキーを削除できる", () => {
      localStorage.setItem("remove-key", '"value"');
      removeItem("remove-key");
      expect(localStorage.getItem("remove-key")).toBeNull();
    });

    test("存在しないキーを削除してもエラーにならない", () => {
      expect(() => removeItem("nonexistent")).not.toThrow();
    });
  });

  describe("clear", () => {
    test("全てのキーを削除できる", () => {
      localStorage.setItem("key1", '"value1"');
      localStorage.setItem("key2", '"value2"');
      clear();
      expect(localStorage.getItem("key1")).toBeNull();
      expect(localStorage.getItem("key2")).toBeNull();
    });
  });
});
