import { changePage, logoChange, transitionRemove } from "./transitions.js";

transitionRemove(".transition", "right")
logoChange(".h-logo", ".transition", "right")
changePage(".main-btn a", ".transition", "right")