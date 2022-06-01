import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";
import SortingBox from "./components/filters/sortingbox";
import { BasketProvider } from "./context/basketcontext";
import { CompaniesProvider } from "./context/companiescontext";
import ItemsContext, { ItemsProvider } from "./context/itemscontext";
import Home from "./pages/home";

test("Sorting Options Mount Test", async () => {
  await act(async () =>
    render(
      <BasketProvider>
        <CompaniesProvider>
          <ItemsProvider>
            <SortingBox type="Sorting" />
          </ItemsProvider>
        </CompaniesProvider>
      </BasketProvider>
    )
  );

  const lowToHigh = screen.getByText(/Price low to high/i);
  const newToOld = screen.getByText(/New to old/i);

  expect(lowToHigh).toBeInTheDocument();
  expect(newToOld).toBeInTheDocument();
});

test("Basket Mount Test", async () => {
  const { container, rerender } = await act(async () =>
    render(
      <BasketProvider>
        <CompaniesProvider>
          <ItemsProvider>
            <Home></Home>
          </ItemsProvider>
        </CompaniesProvider>
      </BasketProvider>
    )
  );
  var basket;
  await waitFor(() => {
    basket = screen.getByText(/Your basket is empty/i);
  });

  expect(basket).toBeInTheDocument();
});

test("Basket Add Item Test", async () => {
  const { container, rerender } = await act(async () =>
    render(
      <BasketProvider>
        <CompaniesProvider>
          <ItemsProvider>
            <Home></Home>
          </ItemsProvider>
        </CompaniesProvider>
      </BasketProvider>
    )
  );

  await waitFor(() => {
    screen.getByTestId("add-to-basket-2");
  });

  fireEvent.click(screen.getByTestId("add-to-basket-2"));

  expect(screen.getByTestId("basket-item")).toBeInTheDocument();
});

test("Tag Occurence Counter Test ", async () => {
  const { container, rerender } = await act(async () =>
    render(
      <BasketProvider>
        <CompaniesProvider>
          <ItemsProvider>
            <Home></Home>
          </ItemsProvider>
        </CompaniesProvider>
      </BasketProvider>
    )
  );
  var tagItem;
  await waitFor(() => {
    tagItem = screen.getByTestId("Tags-count-1");
  });

  expect(tagItem.innerHTML > 0);
});

test("Brand Occurence Counter Test ", async () => {
  const { container, rerender } = await act(async () =>
    render(
      <BasketProvider>
        <CompaniesProvider>
          <ItemsProvider>
            <Home></Home>
          </ItemsProvider>
        </CompaniesProvider>
      </BasketProvider>
    )
  );
  var tagItem;
  await waitFor(() => {
    tagItem = screen.getByTestId("Brands-count-1");
  });

  expect(tagItem.innerHTML > 0);
});

test("Sorting Test ", async () => {
  const { container, rerender } = await act(async () =>
    render(
      <BasketProvider>
        <CompaniesProvider>
          <ItemsProvider>
            <Home></Home>
          </ItemsProvider>
        </CompaniesProvider>
      </BasketProvider>
    )
  );
 
  var highPriceItem
  var lowPriceItem
  await waitFor(() => {
     screen.getByTestId("price low to high");
  });

  fireEvent.click(screen.getByTestId("price low to high"));
  

  await waitFor(() => {
    lowPriceItem = screen.getByTestId("product-price-1");
  });


  fireEvent.click(screen.getByTestId("price low to high"));

  await waitFor(() => {
    highPriceItem = screen.getByTestId("product-price-1");
  });


  expect(lowPriceItem.innerHTML <highPriceItem.innerHTML);
});
