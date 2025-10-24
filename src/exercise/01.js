import { useEffect } from 'react';

// ✅ Custom Hook: sets document.title with a default value
export function useDocumentTitle(title = "Welcome to the home page!") {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

// ✅ Optional: example component using the hook
export default function HomePage() {
  useDocumentTitle();

  return (
    <div>
      <h1>Home Page</h1>
      <p>The document title should now be "Welcome to the home page!"</p>
    </div>
  );
}
