import { stringToHash } from "../";

test("utils", () => {
  expect( stringToHash("deniscarrier@deweb.eosnation.io") ).toBe("8945370747656800747");
});
