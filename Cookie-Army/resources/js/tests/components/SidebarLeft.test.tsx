import SidebarLeft from "@/Components/SidebarLeft";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

describe("Unit Test SidebarLeft Card Profile", () => {
    beforeEach(() => {
        render(<SidebarLeft />);
    });

    test("make sure nama user harus nama user", () => {
        const nameUser = screen.getByTestId("name__user");
        expect(nameUser).toHaveTextContent(/^Aldi Pratama$/);
    });

    test("make sure username harus username", () => {
        const username = screen.getByTestId("user__name");
        expect(username).toHaveTextContent(/^@alx.dyy$/);
    });

    test("make sure bio harus bio", () => {
        const userBio = screen.getByTestId("user__bio");
        expect(userBio).toHaveTextContent("Lorem ipsum dolor sit amet");
    });

    test("make sure button harus My Profile", () => {
        const btnProfile = screen.getByTestId("button_to_profile");
        expect(btnProfile).toHaveTextContent(/^My Profile$/);
    });

    test("make sure suggestion harus People you may know", () => {
        const suggestFriend = screen.getByTitle("suggestion_friends");
        expect(suggestFriend).toHaveTextContent(/^People you may know$/);
    });
});
