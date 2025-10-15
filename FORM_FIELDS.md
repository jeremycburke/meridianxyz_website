# Contact Form Documentation

## Form Fields

The Meridian XYZ contact form includes the following fields:

### Personal Information

1. **First Name** (Required)

   - Type: Text input
   - Placeholder: "John"
   - Validation: Required field
   - Field name sent to Web3Forms: `name`

2. **Last Name** (Required)
   - Type: Text input
   - Placeholder: "Doe"
   - Validation: Required field
   - Field name sent to Web3Forms: `last_name`

### Contact Information

3. **Email Address** (Required)

   - Type: Email input
   - Placeholder: "you@company.com"
   - Validation: Required, must be valid email format
   - Field name sent to Web3Forms: `email`

4. **Phone Number** (Required)
   - Type: Tel input
   - Placeholder: "+1 (555) 1234-567"
   - Validation: Required field
   - Field name sent to Web3Forms: `phone`

### Message

5. **Your Message** (Required)
   - Type: Textarea (5 rows)
   - Placeholder: "Tell us about your needs..."
   - Validation: Required field
   - Field name sent to Web3Forms: `message`

## Hidden Fields

The form also includes these hidden fields for Web3Forms:

- **access_key**: Your Web3Forms API key
- **subject**: Set to "New Meridian XYZ Access Request"
- **botcheck**: Honeypot field for spam prevention (set to `false`)

## Layout

### Desktop (≥ 768px)

- Fields are arranged in a two-column grid:
  - Row 1: First Name | Last Name
  - Row 2: Email | Phone
  - Row 3: Message (full width)

### Mobile (< 768px)

- Fields stack vertically for better mobile experience:
  - First Name
  - Last Name
  - Email
  - Phone
  - Message

## Styling

All form fields use the Meridian XYZ dark theme:

- Background: `#404040`
- Text color: `#f0f0f0`
- Border: `#666666`
- Focus border: `#bebebe`
- Placeholder text: `gray-500`

## Submission Data Format

When the form is submitted, the following JSON is sent to Web3Forms:

```json
{
  "access_key": "your-api-key",
  "name": "John",
  "last_name": "Doe",
  "email": "john.doe@company.com",
  "phone": "+1 (555) 1234-567",
  "message": "Tell us about your needs...",
  "subject": "New Meridian XYZ Access Request",
  "botcheck": false
}
```

## Success/Error Handling

### Success State

- Form clears all fields
- Displays "Thank You!" message
- Shows confirmation text: "We've received your request. We'll be in touch soon."
- Provides "Close" button to dismiss modal

### Error State

- Displays error message banner above submit button
- Error messages:
  - General error: "Something went wrong. Please try again."
  - Network error: "Network error. Please check your connection and try again."
- Form data is preserved so user can try again

### Loading State

- Submit button text changes to "Submitting..."
- All form fields are disabled
- Button is visually dimmed (50% opacity)

## Required Configuration

To make the form functional, you must:

1. Sign up for Web3Forms at [web3forms.com](https://web3forms.com)
2. Get your access key
3. Update line 46 in `src/components/Modal.tsx`:
   ```typescript
   access_key: 'YOUR_ACTUAL_ACCESS_KEY_HERE',
   ```

## Form Accessibility

- All fields have proper `<label>` elements with `htmlFor` attributes
- Required fields are marked with HTML5 `required` attribute
- Close button has `aria-label="Close modal"`
- Form uses semantic HTML elements
- Keyboard navigation fully supported
- Fields properly disabled during submission

## Responsive Modal

The modal itself is responsive:

- Desktop: `max-w-2xl` (wider to accommodate two-column layout)
- Mobile: `mx-4` (4 units of horizontal margin)
- Max height: `90vh` (90% viewport height)
- Overflow: Scrollable if content exceeds viewport height
- Close button fixed in top-right corner with `z-10`
