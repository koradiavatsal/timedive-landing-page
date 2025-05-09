
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TimeTracking from "./pages/TimeTracking";
import ProjectManagement from "./pages/ProjectManagement";
import LeaveManagement from "./pages/LeaveManagement";
import TimediveAI from "./pages/TimediveAI";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/time-tracking" element={<TimeTracking />} />
          <Route path="/project-management" element={<ProjectManagement />} />
          <Route path="/leave-management" element={<LeaveManagement />} />
          <Route path="/timedive-ai" element={<TimediveAI />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
