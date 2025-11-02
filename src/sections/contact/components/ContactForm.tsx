"use client";

import { sendEmail } from "@/app/actions/sendEmail";
import { open_sans } from "@/fonts";
import { Button, Stack } from "@mui/material";
import Form from "next/form";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      loading={pending}
      variant="contained"
      type="submit"
      sx={{ width: "fit-content" }}
    >
      Send Email
    </Button>
  );
};

function ContactForm() {
  async function handleSubmit(formData: FormData) {
    const result = await sendEmail(formData);

    if (result.success) {
      toast.success("Email sent successfully!");
    } else {
      toast.error("Failed to send email");
    }
  }

  return (
    <Form action={handleSubmit}>
      <Stack sx={{ gap: "2rem", maxWidth: "600px", margin: "auto" }}>
        <input
          required
          type="text"
          className={`form-input ${open_sans.className}`}
          placeholder="Subject..."
          name="subject"
        />
        <textarea
          required
          className={`form-input ${open_sans.className}`}
          placeholder="Your message..."
          style={{ resize: "vertical" }}
          rows={10}
          name="message"
        />
        <SubmitButton />
      </Stack>
    </Form>
  );
}

export default ContactForm;
