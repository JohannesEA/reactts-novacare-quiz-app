import { renderHook } from "@testing-library/react-hooks";
import useFetchAccordionItemCollection from "../hooks/useFetchAccordionItemCollection";
import { AccordionItemCollection } from "../types/types";

describe("useFetchAccordionItemCollection", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("fetches accordion item collection successfully", async () => {
    const responseData: {
      data: { accordionItemCollection: AccordionItemCollection };
    } = {
      data: {
        accordionItemCollection: {
          items: [
            { internalName: "item1", text: "Text 1", name: "Name 1" },
            { internalName: "item2", text: "Text 2", name: "Name 2" },
          ],
          total: 2,
          skip: 0,
          limit: 10,
        },
      },
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      json: () => Promise.resolve(responseData),
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchAccordionItemCollection()
    );

    // Assert initial state
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe("");
    expect(result.current.data).toBeUndefined();

    await waitForNextUpdate();

    // Assert state after fetching data
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe("");
    expect(result.current.data).toEqual(
      responseData.data.accordionItemCollection
    );
  });

  it("handles fetch error", async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error("Failed to fetch"));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchAccordionItemCollection()
    );

    // Assert initial state
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe("");
    expect(result.current.data).toBeUndefined();

    await waitForNextUpdate();

    // Assert state after handling error
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe("Feil ved henting av spørsmål og svar");
    expect(result.current.data).toBeUndefined();
  });
});
