# Accessibility Baseline Audit — India Post

**Target URL:** https://www.indiapost.gov.in/  
**Review date:** 15 November 2026  
**Review type:** Desk research + prepared manual validation plan  
**Status:** Preliminary — browser-based verification pending

## 1. Objective

Assess a public-facing service website and prepare a traceable baseline for accessibility and repository architecture. The practical checks focus on keyboard operation, visible focus, text alternatives, form labels, heading/landmark structure, contrast and reflow.

## 2. Scope and limitations

The target is the India Post public website homepage and its publicly reachable service/navigation flows. This report was prepared from publicly indexed official website content and the supplied task brief. A live Chrome Lighthouse run, DOM inspection, screen-reader session and keyboard-only walkthrough have **not** been performed in this environment. Therefore:

- No Lighthouse score is claimed.
- No keyboard behavior is described as passed or failed.
- No five defects are fabricated.
- The five entries in `audit-log.csv` are verification targets, not confirmed defects.

## 3. Publicly available accessibility information

India Post has a page titled **Screen Reader Access**. It states that the website complies with WCAG 2.0 Level AA and says it is compatible with screen readers such as JAWS. This is the organisation's published statement. It should be checked against the current implementation and actual user journeys; it is not a substitute for independent testing.

Official sources:
- India Post homepage: https://www.indiapost.gov.in/
- India Post Screen Reader Access: https://www.indiapost.gov.in/screenreaderaccess
- Government of India GIGW accessibility guidance: https://guidelines.india.gov.in/accessibility-guidelines-and-attributes/

## 4. Five verification targets

These are the five required audit areas to test. Mark an item as an issue only when a reproducible failure and evidence are captured.

| ID | Area | WCAG reference | Verification method |
|---|---|---|---|
| WEB-001 | Keyboard access and visible focus | 2.1.1 Keyboard; 2.4.7 Focus Visible | Tab through header, menus, search and service links; confirm all controls are reachable and focus is visible. |
| WEB-002 | Text alternatives for meaningful images/icons | 1.1.1 Non-text Content | Inspect meaningful images and icon-only controls with accessibility tree/screen reader; confirm equivalent accessible names. |
| WEB-003 | Form labels and instructions | 3.3.2 Labels or Instructions; 4.1.2 Name, Role, Value | Inspect a service form; verify each field has a programmatic label and errors are announced. |
| WEB-004 | Heading and landmark structure | 1.3.1 Info and Relationships; 2.4.6 Headings and Labels | Inspect heading order and landmarks; ensure page sections and controls have meaningful names. |
| WEB-005 | Text contrast and responsive reflow | 1.4.3 Contrast (Minimum); 1.4.10 Reflow | Measure text contrast and test at 320 CSS px / 200% zoom; record clipping or two-dimensional scrolling. |

## 5. Findings

**Confirmed defects: 0 (not yet assessed).**  
**Pending verification targets: 5.**

This does not mean the website has zero defects. It means no defects can responsibly be confirmed until the specified browser tests are performed. The CSV issue log deliberately uses `PENDING` status and `Unverified` severity until evidence exists.

## 6. Evidence required

For each confirmed issue, capture:
1. Exact page URL and the control/component.
2. Screenshot or Lighthouse audit output.
3. Steps to reproduce.
4. Expected behavior and actual behavior.
5. WCAG criterion and severity rationale.
6. Recommended fix.

Save evidence in `screenshots/` and link the filename from the CSV `evidence` column.

## 7. Conclusion

The repository structure and audit plan are prepared. The accessibility audit remains preliminary until a real Lighthouse report and keyboard-only test are completed. Update this report with measured results before mentor submission.
