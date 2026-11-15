# Manual Accessibility Test Checklist

**Target:** https://www.indiapost.gov.in/  
**Tester:** ____________________  
**Date/time:** ____________________  
**Browser/version:** ____________________  
**Viewport:** ____________________

Record each step as PASS, FAIL or NOT TESTED. A failure must include reproducible evidence.

## A. Keyboard-only navigation

- [ ] Reload page and press Tab. Is the first focus destination sensible?
- [ ] Is there a visible focus indicator on every focused control?
- [ ] Can you reach all header/navigation items, search, key links and interactive controls?
- [ ] Can menus be opened and closed using keyboard only?
- [ ] Can forms be completed and submitted without a mouse?
- [ ] Does focus move in a logical order and avoid keyboard traps?
- [ ] Does Shift+Tab move backwards predictably?

## B. Images and accessible names

- [ ] Inspect meaningful images for useful text alternatives.
- [ ] Check icon-only buttons/links for accessible names.
- [ ] Confirm decorative images are ignored by assistive technology.

## C. Forms

- [ ] Every input has a visible and programmatic label.
- [ ] Required fields and formats are explained before submission.
- [ ] Validation errors identify the field and explain how to fix it.
- [ ] Error/status messages are exposed to assistive technology.

## D. Structure

- [ ] Page has a meaningful main heading.
- [ ] Heading levels follow a logical hierarchy.
- [ ] Main content and navigation landmarks are present and named where needed.
- [ ] Link text makes sense out of context.

## E. Contrast and reflow

- [ ] Normal text contrast is at least 4.5:1 (large text at least 3:1).
- [ ] UI component boundaries and meaningful graphics have sufficient contrast.
- [ ] At 200% zoom, content and controls remain usable.
- [ ] At 320 CSS px wide, content reflows without unnecessary horizontal scrolling.

## Evidence log

| Check | Result | Page/component | Evidence filename | Notes |
|---|---|---|---|---|
| Keyboard navigation | NOT TESTED | Homepage | — | Complete in browser |
| Images and names | NOT TESTED | Homepage | — | Inspect accessibility tree |
| Forms | NOT TESTED | Service form | — | Select a real public service form |
| Structure | NOT TESTED | Homepage | — | Inspect heading/landmark tree |
| Contrast/reflow | NOT TESTED | Homepage | — | Use contrast checker and responsive mode |
