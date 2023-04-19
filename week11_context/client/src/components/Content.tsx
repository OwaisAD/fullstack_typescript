import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Content() {
  const { isLight, light, dark } = useContext(ThemeContext);
  const theme = isLight ? light : dark;

  return (
    <div className="content" style={{ background: theme.ui, color: theme.text }}>
      <h1>Content</h1>
      <p>This is the content component</p>
    </div>
  );
}
