import { createRoot } from "react-dom/client";
import React from "react";
import Button from "@example/demo";

const root = document.getElementById("app");
if (root) {
    createRoot(root).render(<Button />);
}
