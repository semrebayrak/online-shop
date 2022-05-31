import { BasketProvider } from "./context/basketcontext";
import { CompaniesProvider } from "./context/companiescontext";
import { ItemsProvider } from "./context/itemscontext";
import Home from "./pages/home";

function App() {
  return (
    <BasketProvider>
      <CompaniesProvider>
      <ItemsProvider>
        <Home />
      </ItemsProvider>
    </CompaniesProvider>
    </BasketProvider>
  );
}

export default App;
