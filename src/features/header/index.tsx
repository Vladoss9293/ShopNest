import { ROUTES } from "@/shared/model/routes";
import { Button } from "@/shared/ui/kit/button";
import { Link } from "react-router-dom";

export default function AppHeader() {
  return (
    <header className="bg-background border-b border-border/40 shadow-sm py-3 px-5 mb-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-semibold">ShopNest</div>

        <Button asChild variant="default" size="sm">
          <Link to={ROUTES.LOGIN}>Войти</Link>
        </Button>
      </div>
    </header>
  );
}
