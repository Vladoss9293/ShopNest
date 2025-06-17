import { enableMocking } from "@/shared/api/mocks";
import { ROUTES } from "@/shared/model/routes";
import { redirect } from "react-router-dom";

export async function protectedLoader() {
    await enableMocking();

    const token = true;

    if (!token) {
        return redirect(ROUTES.LOGIN);
    }

    return null;
}