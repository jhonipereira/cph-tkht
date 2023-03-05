const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("should return the partition key", () => {
    const params = { param1: "one", param2: "two"};
    const originalKey = crypto.createHash("sha3-512").update(JSON.stringify(params)).digest("hex");
    const trivialKey = deterministicPartitionKey(params);
    expect(trivialKey).toEqual(originalKey);
  });

  it("should accept other types than string", () => {
    const trivialKey = deterministicPartitionKey(123456);
    expect(trivialKey).toEqual(trivialKey);
  });

  it("should re-hash the key if it's longer than the MAX_PARTITION_KEY_LENGTH (256 chars)", () => {
    const longword = "jhoni".repeat(400);
    const hashedOnce = crypto.createHash("sha3-512").update(longword).digest("hex");
    const trivialKey = deterministicPartitionKey(longword);
    expect(trivialKey).not.toEqual(hashedOnce);
  })
});

