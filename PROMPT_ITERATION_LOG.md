# Prompt Iteration Log

## Task

Build a professional login page for a frontend AI engineering capstone project.

---

## Version 0 (Naive Prompt)

### Technique

None (Naive)

### Prompt

Build a login page.

### Output

The AI generated a simple responsive login page using HTML and CSS.

It included:

- Email and password fields
- Remember Me checkbox
- Forgot Password link
- Sign Up link
- Responsive centered layout
- Modern gradient background
- Basic hover and focus effects

### Notes

**What changed**

None. This is the baseline prompt.

**Observed output difference**

This is the baseline, so there is no previous version to compare against.

## Version 1



### Technique

Role Assignment

### Prompt

You are a Senior Frontend Engineer.

Build a professional login page for a frontend AI engineering capstone project.

### Output

The AI responded as a Senior Frontend Engineer and produced a much more detailed specification for a professional login page.

It included:

- Modern responsive design
- HTML, CSS, and JavaScript requirements
- Professional color palette
- Form validation
- Accessibility requirements
- Responsive layout
- Folder structure
- Code quality guidelines
- Expected output files



### Notes

**What changed**

Added a role assignment by telling the AI to act as a Senior Frontend Engineer.

**Observed output difference**

The response became more structured and professional. Instead of producing only a basic login page, the AI considered software engineering best practices, accessibility, validation, responsiveness, and maintainability.

**What still failed**

The AI generated a detailed specification instead of directly producing the requested implementation files.

**What to try next**

Add context and motivation so the AI understands the existing project and generates code that fits into it.

---



## Version 2



### Technique

Context and Motivation

### Prompt

You are a Senior Frontend Engineer.

I am building a frontend AI engineering capstone project. The project already contains a settings page with an existing design system. Build a professional login page that matches the existing project structure and design style.

### Output

The AI recognized the existing project context and generated a login page that matched the existing Settings page.

It included:

- Consistent design language
- Shared color palette and typography
- Existing spacing and reusable components
- Vanilla HTML, CSS, and JavaScript
- Professional SaaS-style interface



### Notes

**What changed**

Added project context by explaining that the project already has a Settings page and an existing design system.

**Observed output difference**

The AI produced a login page that was much more consistent with the existing application instead of creating a generic standalone design.

**What still failed**

The AI still decided many implementation details on its own and did not specify exactly which files should be generated.

**What to try next**

Specify the required output format so the AI generates only the requested files.

---



## Version 3



### Technique

Output Structure

### Prompt

You are a Senior Frontend Engineer.

I am building a frontend AI engineering capstone project. The project already contains a settings page with an existing design system. Build a professional login page that matches the existing project structure and design style.

Generate only these files:

- login.html
- login.css
- login.js

Do not create any additional files.

### Output

The AI generated only the requested files:

- login.html
- login.css
- login.js

It focused only on the required deliverables and avoided generating unnecessary project files.

### Notes

**What changed**

Specified the exact output structure by listing the required files.

**Observed output difference**

The AI followed the requested file structure and produced only the required implementation files, making the response more focused and usable.

**What still failed**

The AI still jumped directly into code without explaining its implementation approach.

**What to try next**

Ask the AI to break the task into clear implementation steps before generating the code.

---



## Version 4



### Technique

Step Decomposition

### Prompt

You are a Senior Frontend Engineer.

I am building a frontend AI engineering capstone project. The project already contains a settings page with an existing design system. Build a professional login page that matches the existing project structure and design style.

Generate only these files:

- login.html
- login.css
- login.js

Do not create any additional files.

Before generating the code:

1. Briefly explain your implementation plan.
2. Generate login.html.
3. Generate login.css.
4. Generate login.js.
5. Explain how the three files work together.



### Output

The AI first explained its implementation plan before generating the code.

It then:

- Generated login.html
- Generated login.css
- Generated login.js
- Explained how the three files work together



### Notes

**What changed**

Added step-by-step instructions describing the order in which the AI should complete the task.

**Observed output difference**

The response became much easier to follow because the AI explained its approach before writing code and finished with an explanation of how the files work together.

**What still failed**

Although the workflow improved, the AI still relied on its own assumptions for some implementation details.

**What to try next**

Provide an example of the desired response format so the AI can better match the expected output.

---



## Version 5



### Technique

Few-shot Examples

### Prompt

You are a Senior Frontend Engineer.

I am building a frontend AI engineering capstone project. The project already contains a settings page with an existing design system.

Example of a good response:

- First explain the implementation plan.
- Generate only login.html, login.css, and login.js.
- Keep the design consistent with the existing settings page.
- Use semantic HTML, accessible forms, and clean vanilla JavaScript.
- Finish with a short explanation of how the files work together.

Now build a professional login page following the same style.

Generate only these files:

- login.html
- login.css
- login.js

Do not create any additional files.

### Output

The AI first explained its implementation plan before generating the code.

It then generated:

- login.html
- login.css
- login.js

The generated solution included:

- Semantic HTML with accessible labels
- Responsive authentication card
- CSS variables for a reusable design system
- Client-side form validation
- Password visibility toggle
- Loading state and simulated login
- Responsive, mobile-first layout

Finally, the AI explained how the three files work together, making the implementation easier to understand and integrate into the existing project.

### Notes

**What changed**

Added a few-shot example that demonstrated the expected response format.

**Observed output difference**

The AI closely followed the example, producing a well-organized response with a clear implementation plan, the requested files, and a concluding explanation.

What still failed

The few-shot example made the AI closely imitate the example format instead of adapting its response independently. While the structure improved, the output became less flexible and occasionally repeated wording from the example.

**What to try next**

Request an explicit verification checklist after the implementation to confirm that all requirements have been met.

# Cross-Model Comparison

**ChatGPT:** Produced a structured response with clear explanations and closely followed the requested prompt format.

**Claude:** Focused more on implementation details, code organization, and reuse of the existing design system. Its responses were concise and emphasized consistency with the project architecture.

**Overall:** ChatGPT was stronger at following structured instructions, while Claude produced cleaner implementation-focused responses. Combining structured prompts with clear constraints produced the best results on both models.

# Final Reusable Prompt

You are a Senior Frontend Engineer.

I am building a frontend AI engineering capstone project. The project already contains a settings page with an existing design system.

Before generating the code:

1. Briefly explain your implementation plan.
2. Generate only:
  - login.html
  - login.css
  - login.js
3. Match the existing design system and project structure.
4. Use semantic HTML, accessible forms, responsive CSS, and vanilla JavaScript only.
5. Finish by explaining how the three files work together.

Do not generate any additional files.