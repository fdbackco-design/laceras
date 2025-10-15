import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Brand from "./pages/brand";
import Products from "./pages/products";
import Reviews from "./pages/reviews";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/brand" component={Brand} />
      <Route path="/products" component={Products} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col w-full max-w-[100vw] overflow-x-hidden">
          <Navbar />
          <main className="flex-1 w-full">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
