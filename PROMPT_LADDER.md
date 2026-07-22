## Version 1

### Prompt

Build a professional login page for a frontend AI engineering capstone project.

### Output (Representative Excerpt)

The AI generated a more polished login page designed for a frontend AI engineering capstone project.

It included:

- login.html, login.css, login.js, and index.html
- Split-screen responsive layout
- Indigo color palette matching the project
- Email and password validation
- Password visibility toggle
- Remember Me using localStorage
- Loading state with spinner
- Success message and redirect to settings.html
- Improved accessibility using ARIA attributes



### Notes

**What changed in the prompt**

- Added a clearer goal by specifying that the login page is for a frontend AI engineering capstone project.

**What improved in the output**

- The AI produced a more professional design that better matched the project's style and included additional UX features.

**What still failed**

- The prompt still did not specify the exact output format or project constraints, so the AI made assumptions and even added an extra `index.html` file.

**What to try next**

- Add project context so the AI understands the existing project structure and only generates files that fit into it.



## Version 2



### Prompt

Build a professional login page for a frontend AI engineering capstone project. Match the existing settings page design system and project structure.

### Output (Representative Excerpt)

The AI explored the project structure and aligned the login page with the existing settings page. It reused the shared indigo design tokens, typography, spacing, and styling patterns while keeping the login page consistent with the rest of the project.

### Notes

**What changed in the prompt**

- Added real project context by telling the AI to match the existing settings page and project structure.

**What improved in the output**

- The generated login page was much more consistent with the existing project. The AI reused the same design language instead of creating an unrelated interface.

**What still failed**

- The AI still decided to create an additional `index.html` file and assumed some project behavior that was never requested.

**What to try next**

- Specify the exact output format so the AI generates only the required files.



## Version 3



### Prompt

Build a professional login page for a frontend AI engineering capstone project. Match the existing settings page design system and project structure.

Generate only these files:

- login.html
- login.css
- login.js

Do not create any additional files.

### Output (Representative Excerpt)

The AI explored the existing project and generated only the requested files:

- login.html
- login.css
- login.js

It aligned the login page with the existing settings page by reusing the same design tokens, form patterns, and JavaScript structure without introducing additional files.

### Notes

**What changed in the prompt**

- Added a specified output format by listing exactly which files to generate.

**What improved in the output**

- The AI followed the requested file structure and focused only on the required deliverables instead of generating unnecessary project files.

**What still failed**

- The AI still made assumptions about implementation details instead of asking for clarification where requirements were missing.

**What to try next**

- Add explicit constraints about what the implementation should and should not do.



## Version 4



### Prompt

Build a professional login page for a frontend AI engineering capstone project. Match the existing settings page design system and project structure.

Generate only these files:

- login.html
- login.css
- login.js

Do not create any additional files.

Constraints:

- Use only HTML, CSS, and vanilla JavaScript.
- Do not use external libraries or frameworks.
- Reuse the existing design tokens and styling patterns from settings.css.
- Keep the code clean, semantic, and accessible.



### Output (Representative Excerpt)

These three files reuse settings.css's exact tokens (--color-primary, --radius, --shadow, spacing scale, .form-group/.field-error/.btn--primary conventions) and add only what's login-specific: a split brand panel for desktop, a password show/hide toggle, and a "remember me" flow. Validation, error states, and submit-loading behavior follow the same pattern as settings.js so the two pages feel like one system. Sign-in redirects to settings.html on success.

### Notes

**What changed in the prompt**

Added implementation constraints, including using only HTML, CSS, and vanilla JavaScript, avoiding external libraries, and reusing the existing design system.

**What improved in the output**

The AI followed the constraints and produced a solution that was more consistent with the existing project architecture and styling.

**What still failed**

The AI still assumed application behavior, such as redirecting to settings.html after login, even though this was not explicitly requested.

**What to try next**

Add verification requirements so the AI reviews its own output and checks that all requested requirements have been met before presenting the final solution.

## Version 5



### Prompt

Build a professional login page for a frontend AI engineering capstone project. Match the existing settings page design system and project structure.

Generate only these files:

- login.html
- login.css
- login.js

Do not create any additional files.

Constraints:

- Use only HTML, CSS, and vanilla JavaScript.
- Do not use external libraries or frameworks.
- Reuse the existing design tokens and styling patterns from settings.css.
- Keep the code clean, semantic, and accessible.

Before giving the final answer, verify that:

- Only the three requested files are generated.
- No external libraries are used.
- The design matches the existing settings page.
- The HTML is semantic and accessible.
- The JavaScript validates email and password correctly.
- Every requirement has been satisfied. If anything is missing, fix it before presenting the final output.



### Output (Representative Excerpt)

The AI verified its own output and confirmed:

- Only the requested files (login.html, login.css, login.js) were generated.
- No external libraries or frameworks were used.
- The design reused the existing settings.css design tokens.
- The HTML followed semantic and accessibility best practices.
- Email and password validation met the specified requirements.
- All requested requirements were satisfied before presenting the final solution.



### Notes

**What changed in the prompt**

Added verification requirements so the AI checked its own work before presenting the final output.

**What improved in the output**

The AI reviewed its solution against the requested requirements and explicitly confirmed that each requirement had been met, increasing confidence in the final result.

**What still failed**

The AI relied on its own verification and did not provide independent evidence such as running automated tests or demonstrating the implementation.

**What to try next**

Request automated tests or a verification checklist with test cases to validate the implementation independently.

# Final Reusable Prompt

Build a professional login page for a frontend AI engineering capstone project. Match the existing settings page design system and project structure.

Generate only these files:

- login.html
- login.css
- login.js

Do not create any additional files.

Constraints:

- Use only HTML, CSS, and vanilla JavaScript.
- Do not use external libraries or frameworks.
- Reuse the existing design tokens and styling patterns from settings.css.
- Keep the code clean, semantic, and accessible.

Before giving the final answer, verify that:

- Only the three requested files are generated.
- No external libraries are used.
- The design matches the existing settings page.
- The HTML is semantic and accessible.
- The JavaScript validates email and password correctly.
- Every requirement has been satisfied. If anything is missing, fix it before presenting the final output.

