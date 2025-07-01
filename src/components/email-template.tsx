interface EmailTemplateProps {
  firstName: string;
}

export function EmailTemplate({ firstName }: EmailTemplateProps) {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
      <p>Thanks for signing up!</p>
      <button>
        <a href="https://www.example.com">Go to example.com</a>
      </button>
    </div>
  );
}
